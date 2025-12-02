// const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";

async function scrapeZepto(product) {
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
  page.on("request", req => {
    const url = req.url();
    if (
      req.resourceType() === "stylesheet" ||
      req.resourceType() === "font" ||
      req.resourceType() === "media" ||
      url.includes("googletag") ||
      url.includes("analytics") ||
      url.includes("facebook") ||
      url.includes("ads") ||
      url.endsWith(".css")
    ) {
      return req.abort();
    }
    req.continue();
  });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
  );

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
      await new Promise(res => setTimeout(res, 120));
    }
  });

  const productSelector = "a.B4vNQ";

  // -------------------- SAFE CHECK --------------------
  try {
    await page.waitForSelector(productSelector, { timeout: 6000 });
  } catch (e) {
    console.log("❌ No products found on Zepto for:", product);
    await browser.close();
    return [];
  }
  // -----------------------------------------------------

  const products = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll("a.B4vNQ"));

    return cards.map(card => {
      const name = card.querySelector('[data-slot-id="ProductName"] span');
      const price = card.querySelector('[data-slot-id="EdlpPrice"] span');
      const image = card.querySelector("img");
      const weight = card.querySelector('[data-slot-id="PackSize"] span');
      const soldout = card.querySelector("div.cBYlm8");

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

const runZepto = async (product) => {
  const start = performance.now();
  const result = await scrapeZepto(product);
  const end = performance.now();

  console.log(
    `⏱ Time for zepto without location: ${((end - start) / 1000).toFixed(2)} sec. Result: ${result.length}`
  );

  return result;
};

// module.exports = runZepto;
export default runZepto;
