// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";

async function scrapeBlinkit(product) {
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

  // BLOCK heavy resources
  await page.setRequestInterception(true);
  page.on("request", req => {
    const url = req.url();

    if (
      req.resourceType() === "stylesheet" ||
      req.resourceType() === "image" ||
      req.resourceType() === "font" ||
      req.resourceType() === "media" ||
      url.includes("googletag") ||
      url.includes("analytics") ||
      url.includes("onesignal") ||
      url.includes("segment") ||
      url.includes("facebook") ||
      url.includes("doubleclick") ||
      url.includes("ads") ||
      url.includes("hotjar") ||
      url.includes("clarity") ||
      url.includes("intercom") ||
      url.endsWith("service-worker.js") ||
      url.endsWith(".css") ||
      url.endsWith(".png") ||
      url.endsWith(".jpg") ||
      url.endsWith(".jpeg") ||
      url.endsWith(".svg") ||
      url.endsWith(".webp") ||
      url.endsWith(".gif") ||
      url.endsWith(".woff") ||
      url.endsWith(".woff2") ||
      url.endsWith(".ttf") ||
      url.endsWith(".otf") ||
      url.endsWith(".mp4") ||
      url.endsWith(".mp3") ||
      url.endsWith(".webm")
    ) {
      return req.abort();
    }
    req.continue();
  });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
  );

  const url = `https://blinkit.com/s/?q=${encodeURIComponent(product)}`;
  console.log("Opening:", url);

  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  // Scroll for lazy-load
  await page.evaluate(async () => {
    let total = 0;
    const step = 1000;
    while (total < 20000) {
      window.scrollBy(0, step);
      total += step;
      await new Promise(res => setTimeout(res, 120));
    }
  });

  const gridSel = 'div[role="button"][id]';

  // ---------------------- SAFE CHECK ----------------------
  try {
    await page.waitForSelector(gridSel, { timeout: 6000 });
  } catch (err) {
    console.log("❌ No products found on Blinkit for:", product);
    await browser.close();
    return [];
  }
  // --------------------------------------------------------

  const products = await page.evaluate(() => {
    const cards = Array.from(
      document.querySelectorAll('div[role="button"][id]')
    );

    return cards.map(card => {
      const name =
        card.querySelector("div.tw-text-300.tw-font-semibold.tw-line-clamp-2") ||
        card.querySelector("div.Product__UpdatedTitle-sc-11dk8zk-9");

      const weight = card.querySelector(
        "div.tw-text-200.tw-font-medium.tw-line-clamp-1"
      );

      const img = card.querySelector("img");

      let price = null;
      for (let p of card.querySelectorAll("div.tw-text-200.tw-font-semibold")) {
        const t = p.innerText.trim();
        if (t.startsWith("₹")) {
          price = t;
          break;
        }
      }

      return {
        name: name ? name.innerText.trim() : null,
        weight: weight ? weight.innerText.trim() : null,
        price,
        image: img ? img.src : null,
        href: `https://blinkit.com/prn/product/prid/${card.id}`,
      };
    });
  });

  await browser.close();
  return products;
}

const runBlinkit = async product => {
  const start = performance.now();
  const result = await scrapeBlinkit(product);
  const end = performance.now();

  console.log(
    `⏱ Time blinkit without location: ${((end - start) / 1000).toFixed(2)} sec. Result: ${result.length}`
  );

  return result;
};

// module.exports = runBlinkit;
// export { runBlinkit };
export default runBlinkit;
