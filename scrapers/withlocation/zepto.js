import puppeteer from "puppeteer";

async function setZeptoLocation(page, loc) {
  console.log(`Setting Zepto location: ${loc}`);

  // Always open Zepto homepage first
  await page.goto("https://www.zepto.com/", {
    waitUntil: "networkidle2",
    timeout: 0,
  });

  // ---------------------------------------------
  // OPTIONAL POPUP CLICK (like Blinkit)
  // ---------------------------------------------
  try {
    // const btn = await page.$('div.a0Ppr > button');
    await page.waitForSelector('span.cTJX6L', { timeout: 5000 });
    const btn = await page.$('span.cTJX6L');
    if (btn) {
      await btn.click().catch(() => {});
    //   await btn.click().catch(() => {});
      console.log("Clicked location button");
    } else {
      console.log("Location button not found, skipping");
    }
  } catch {}

  // ---------------------------------------------
  // SEARCH INPUT
  // ---------------------------------------------
  try {
    await page.waitForSelector('[placeholder="Search a new address"]', {
      timeout: 15000,
    });
  } catch {
    console.log("Search address input not found after waiting.");
    return null;
  }

  // Type location
  await page.type('[placeholder="Search a new address"]', loc);

  // ---------------------------------------------
  // FIRST SUGGESTION CLICK
  // ---------------------------------------------
  try {
    await page.waitForSelector('div.cIArQh', {
      timeout: 15000,
    });

    await page.click('div.cIArQh');
  } catch {
    console.log("Location suggestion not found.");
  }

  await new Promise((res) => setTimeout(res, 500));

  // ---------------------------------------------
  // CONFIRM BUTTON
  // ---------------------------------------------
//   try {
//     await page.waitForSelector('.bg-skin-primary > .flex', {
//       timeout: 15000,
//     });

//     await page.click('.bg-skin-primary > .flex');
//   } catch {
//     console.log("Final location confirm button not found.");
//   }

  console.log("Zepto location set (no verification)");
  return true;
}


async function scrapeZepto(product, location) {
  const browser = await puppeteer.launch({
    headless: true,
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
  req.continue(); // allow everything
});

//   page.on("request", (req) => {
//     const url = req.url();
//     if (
//       req.resourceType() === "stylesheet" ||
//       req.resourceType() === "font" ||
//       req.resourceType() === "media" ||
//       url.includes("googletag") ||
//       url.includes("analytics") ||
//       url.includes("facebook") ||
//       url.includes("ads") ||
//       url.endsWith(".css")
//     ) {
//       return req.abort();
//     }
//     req.continue();
//   });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
  );

  // Set location before searching
  if (location) {
    await setZeptoLocation(page, location);
  }

  const url = `https://www.zepto.com/search?query=${encodeURIComponent(product)}`;
  console.log("Opening:", url);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 0 });

  // Scroll to load products
  await page.evaluate(async () => {
    let total = 0;
    const step = 1000;
    while (total < 20000) {
      window.scrollBy(0, step);
      total += step;
      await new Promise((res) => setTimeout(res, 120));
    }
  });

  const productSelector = "a.B4vNQ";
  await page.waitForSelector(productSelector, { timeout: 6000 });

  const products = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll("a.B4vNQ"));
    return cards.map((card) => {
      const name = card.querySelector('[data-slot-id="ProductName"] span');
      const price = card.querySelector('[data-slot-id="EdlpPrice"] span');
      const image = card.querySelector("img");
      const weight = card.querySelector('[data-slot-id="PackSize"] span');
      const soldout = card.querySelector('div.cBYlm8');

      return {
        name: name ? name.innerText.trim() : null,
        price: price ? price.innerText.trim() : null,
        weight: weight ? weight.innerText.trim() : null,
        image: image ? image.src : null,
        href: card.href,
        soldout: soldout ? true : false,
      };
    });
  });

  await browser.close();
  return products;
}

export default scrapeZepto;

// RUN
// (async () => {
//   const product = "amul butter";
//   const location = "400082"; // <-- set your location here
//   const start = performance.now();
//   const result = await scrapeZepto(product, location);
//   const end = performance.now();
//   console.log(`⏱ Time: ${((end - start) / 1000).toFixed(2)} sec. Result: ${result.length}`);
//   console.log(result);
// })();
