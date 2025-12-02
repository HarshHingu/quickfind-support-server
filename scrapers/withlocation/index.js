// const runBlinkit = require("./blinkitwithoutlocation");
// const runZepto = require("./zeptofinal");
// const { stringSimilarity } = require("string-similarity-js");
import runBlinkit  from "./blinkit.js";
import runZepto from "./zepto.js";
import { stringSimilarity } from "string-similarity-js";

function createEntry() {
  return {
    score: null,
    blinkit: null,
    zepto: null,
    instamart: null
  };
}


// ---------------------- Helpers ----------------------

const normalize = (s) => {
  if (!s || typeof s !== "string") return "";
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const extractWeight = (title) => {
  if (!title || typeof title !== "string") return null;

  const m = title.match(/(\d+\.?\d*)\s*(g|kg|ml|l|litre|ltr|unit|units|pcs|piece|pack)/i);
  if (!m) return null;

  let w = parseFloat(m[1]);
  let unit = m[2].toLowerCase();

  if (unit === "kg" || unit === "l" || unit === "litre" || unit === "ltr") w *= 1000;

  return w;
};

const jaccard = (a, b) => {
  const s1 = new Set(a.split(" "));
  const s2 = new Set(b.split(" "));
  const inter = [...s1].filter(x => s2.has(x)).length;
  const uni = new Set([...s1, ...s2]).size;
  return uni === 0 ? 0 : inter / uni;
};

// BRAND HELPER: get first word
const getBrand = (title = "") => {
  const norm = normalize(title);
  return norm.split(" ")[0] || "";
};

// BRAND SIMILARITY
const brandSimilarity = (a, b) => {
  if (!a || !b) return 0;
  return a === b ? 1 : 0;
};


// ---------------------- Similarity ----------------------

function productSimilarity(a, b) {
  const nameA = a?.name || "";
  const nameB = b?.name || "";

  const A = normalize(nameA);
  const B = normalize(nameB);

  // 1. Title similarity
  const titleSim = stringSimilarity(A, B);

  // 2. Weight match
  const w1 = extractWeight(nameA);
  const w2 = extractWeight(nameB);

  let weightSim = 0;
  if (w1 && w2) {
    weightSim = 1 - Math.min(1, Math.abs(w1 - w2) / Math.max(w1, w2));
  }

  // 3. Keyword similarity
  const kwSim = jaccard(A, B);

  // 4. BRAND (first word match)
  const brandA = getBrand(nameA);
  const brandB = getBrand(nameB);
  const brandSim = brandSimilarity(brandA, brandB);

  // FINAL SCORE (adjusted weights)
  return (
    titleSim * 0.55 +
    weightSim * 0.25 +
    kwSim * 0.10 +
    brandSim * 0.10
  );
}


// ---------------------- Main Logic ----------------------

function matchPlatforms(platforms) {
  const entries = [];

  const names = Object.keys(platforms);
  const data = platforms;

  for (const a of names) {
    const listA = data[a] || [];

    for (const prodA of listA) {
      let bestPlatform = null;
      let bestProd = null;
      let bestScore = 0;

      for (const b of names) {
        if (a === b) continue;

        const listB = data[b] || [];

        for (const prodB of listB) {
          const score = productSimilarity(prodA, prodB);

          if (score > bestScore) {
            bestScore = score;
            bestProd = prodB;
            bestPlatform = b;
          }
        }
      }

      const entry = createEntry();
      entry[a] = prodA;

      if (bestScore >= 0.55) {
        entry[bestPlatform] = bestProd;
        entry.score = Number(bestScore.toFixed(3));
      }

      entries.push(entry);
    }
  }

  return entries;
}


async function runComparison(product,location) {
  const start = performance.now();

  const [blinkitResult = [], zeptoResult = []] = await Promise.all([
    runBlinkit(product, location),
    runZepto(product, location)
  ]);

  const matches = matchPlatforms({
    blinkit: blinkitResult,
    zepto: zeptoResult
  });

  const end = performance.now();
  console.log(`⏱ Total Time: ${((end - start) / 1000).toFixed(2)} sec`);
  console.log(matches);

  return matches;
}

export default runComparison;