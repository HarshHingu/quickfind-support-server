import puppeteer from "puppeteer";

// ---------------------------------------------
// SET LOCATION FUNCTION (CLEAN + WORKING)
// ---------------------------------------------
async function setBlinkitLocation(page, loc) {
  console.log(`Setting Blinkit location: ${loc}`);

  await page.goto("https://blinkit.com/", {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  // Handle optional pop-up
  await page.waitForSelector("div.hEjBTn > img", { timeout: 15000 });
  const el = await page.$("div.hEjBTn > img");
  // await page.waitForSelector("div.DownloadAppModal__Wrapper-sc-1wef47t-3.Svsjl > div.DownloadAppModal__Footer-sc-1wef47t-10.iasVNG > div.DownloadAppModal__ContinueLink-sc-1wef47t-12.kdaLHw", { timeout: 5000 });
  // const el = await page.$("div.DownloadAppModal__Wrapper-sc-1wef47t-3.Svsjl > div.DownloadAppModal__Footer-sc-1wef47t-10.iasVNG > div.DownloadAppModal__ContinueLink-sc-1wef47t-12.kdaLHw");
 try {
  await page.waitForSelector("div.hEjBTn > img", { timeout: 8000 });
  const el = await page.$("div.hEjBTn > img");
  if (el) {
    await el.click().catch(() => {});
    console.log("Clicked optional element");
  }
} catch (err) {
  console.log("Popup image not found. Continuing...");
}

  // Wait for the locality input
  try {
    await page.waitForSelector('div.hQarli', { timeout: 15000 });
  } catch {
    console.log("Locality input not found, retrying...");
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForSelector('div.hQarli', { timeout: 15000 });
  }

  

  // Click + type location
  await page.click('div.hQarli');
//   await page.click('input[name="select-locality"]');
  await page.type('[name="select-locality"]', loc);
//   await page.waitForTimeout(2000);

  // Try selecting first suggestion
  try {
    await page.waitForSelector('[class*="LocationSearchList"]', {
      timeout: 10000,
    });
    await page.$$eval('[class*="LocationSearchList"]', (el) => el[0].click());
  } catch {
    console.log("Location suggestion not found.");
  }

//   await page.waitForTimeout(2500);

  // Final verification
  const result = await page.evaluate(() => {
    const title = document.querySelector('[class^="LocationBar__Subtitle"]');
    return title ? title.textContent.trim() : null;
  });

  console.log("Location set result:", result);
  return result;
}

// ---------------------------------------------
// MAIN SCRAPER
// ---------------------------------------------
async function scrapeBlinkit(product, location) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-extensions",
      "--disable-background-timer-throttling",
      "--disable-renderer-backgrounding",
      "--disable-backgrounding-occluded-windows",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 700 });

  // Block heavy resources
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const url = req.url();
    // const block =
    //   req.resourceType() === "stylesheet" ||
    //   req.resourceType() === "image" ||
    //   req.resourceType() === "font" ||
    //   req.resourceType() === "media" ||
    //   url.includes("googletag") ||
    //   url.includes("analytics") ||
    //   url.includes("facebook") ||
    //   url.includes("doubleclick") ||
    //   url.endsWith(".css") ||
    //   url.endsWith(".png") ||
    //   url.endsWith(".jpg") ||
    //   url.endsWith(".jpeg") ||
    //   url.endsWith(".svg") ||
    //   url.endsWith(".webp");

    // if (block) return req.abort();
    req.continue();
  });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
  );

  // ---------------------------------------------
  // 🔥 SET LOCATION HERE
  // ---------------------------------------------
  await setBlinkitLocation(page, location);

  // ---------------------------------------------
  // NOW OPEN PRODUCT SEARCH PAGE
  // ---------------------------------------------
  const url = `https://blinkit.com/s/?q=${encodeURIComponent(product)}`;
  console.log("Opening:", url);

  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  // Scroll lazy-load
  await page.evaluate(async () => {
    let total = 0;
    while (total < 20000) {
      window.scrollBy(0, 1000);
      total += 1000;
      await new Promise((r) => setTimeout(r, 120));
    }
  });

  // Selector
  const gridSel = 'div[role="button"][id]';
  await page.waitForSelector(gridSel, { timeout: 8000 });

  // Extract
  const products = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('div[role="button"][id]')];

    return cards.map((card) => {
      const name =
        card.querySelector(
          "div.tw-text-300.tw-font-semibold.tw-line-clamp-2"
        ) || card.querySelector("div.Product__UpdatedTitle-sc-11dk8zk-9");

      const weight = card.querySelector(
        "div.tw-text-200.tw-font-medium.tw-line-clamp-1"
      );

      const img = card.querySelector("img");

      let price = null;
      for (let p of card.querySelectorAll("div.tw-text-200.tw-font-semibold")) {
        const txt = p.innerText.trim();
        if (txt.startsWith("₹")) {
          price = txt;
          break;
        }
      }

      return {
        id: card.id,
        name: name ? name.innerText.trim() : null,
        weight: weight ? weight.innerText.trim() : null,
        price,
        image: img ? img.src : null,
      };
    });
  });

  await browser.close();
  return products;
}

export default scrapeBlinkit;

// ---------------------------------------------
// RUN
// ---------------------------------------------
// (async () => {
//   const product = "amul butter";
//   const location = "Andheri East, Mumbai"; // <-- set your location here
//   const t1 = performance.now();
//   const result = await scrapeBlinkit(product, location);
//   const t2 = performance.now();

//   console.log(`⏱ Time: ${((t2 - t1) / 1000).toFixed(2)} sec`);
//   console.log(result);
// })();

