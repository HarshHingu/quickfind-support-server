const testdata = [
  {
    "score": null,
    "blinkit": {
      "id": "product_container",
      "name": null,
      "weight": null,
      "price": null,
      "image": null
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.59,
    "blinkit": {
      "id": "561270",
      "name": "Amul Taaza Toned Milk",
      "weight": "1 ltr",
      "price": "₹57",
      "image": null
    },
    "zepto": {
      "name": "Amul Taaza Toned Fresh Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d4b8ef20-df5e-4d0b-ab04-36de62dd0f45.jpeg",
      "href": "https://www.zepto.com/pn/amul-taaza-toned-fresh-milk-pouch/pvid/9d447ba5-1d35-46e1-bc64-e932135d026f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.611,
    "blinkit": {
      "id": "12872",
      "name": "Amul Gold Full Cream Milk",
      "weight": "500 ml",
      "price": "₹35",
      "image": null
    },
    "zepto": {
      "name": "Amul Gold Full Cream Fresh Milk (Pouch)",
      "price": "₹35",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3a8d4113-939d-4e4e-a7ce-96e52152ba97.jpeg",
      "href": "https://www.zepto.com/pn/amul-gold-full-cream-fresh-milk-pouch/pvid/51d55eac-ca29-4532-9b32-9b7d317f346a",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.641,
    "blinkit": {
      "id": "176",
      "name": "Amul Taaza Homogenised Toned Milk",
      "weight": "1 ltr",
      "price": "₹75",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png"
    },
    "zepto": {
      "name": "Amul Taaza Homogenised Toned Milk (Tetra Pack)",
      "price": "₹75",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/654e3c68-865e-42b0-ae12-8467c583cfaf.jpeg",
      "href": "https://www.zepto.com/pn/amul-taaza-homogenised-toned-milk-tetra-pack/pvid/84eae511-5edb-4a22-875e-5aa94976c2d6",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "160704",
      "name": "Amul Cow Milk",
      "weight": "500 ml",
      "price": "₹30",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.603,
    "blinkit": {
      "id": "206314",
      "name": "Amul Lactose Free Milk",
      "weight": "250 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/87c1c525-750e-475f-91d1-f155026ddaa1.png"
    },
    "zepto": {
      "name": "Amul Lactose Free Milk (Tetra Pack)",
      "price": "₹25",
      "weight": "1 pack (250 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bb9facdf-f5ad-45e6-90bb-3568b9791d88.jpeg",
      "href": "https://www.zepto.com/pn/amul-lactose-free-milk-tetra-pack/pvid/23037033-b0ab-4109-82b6-30f3a2a2cf84",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.625,
    "blinkit": {
      "id": "34778",
      "name": "Amul Moti Toned Milk (90 Days Shelf Life)",
      "weight": "450 ml",
      "price": "₹32",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/eb2ba2ce-96fd-43cb-acc0-2a04ff6b810d.png"
    },
    "zepto": {
      "name": "Amul Moti - Homogenised Toned Milk (Pouch 90 Days Shelf life)",
      "price": "₹32",
      "weight": "1 pack (450 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/0b462c8d-e38c-4b49-aab1-d8f57b8fb89c.jpeg",
      "href": "https://www.zepto.com/pn/amul-moti-homogenised-toned-milk-pouch-90-days-shelf-life/pvid/1638f685-befc-478e-95f8-2d92213866e7",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "485113",
      "name": "Amul Taaza Toned Milk - Pack of 2",
      "weight": "2 x 200 ml",
      "price": "₹32",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/ce70d80f-bb6d-4aea-b1b2-eba9b30bf0ac.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "179",
      "name": "Amul Gold Milk",
      "weight": "1 ltr",
      "price": "₹80",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/8b6b5194-6eaa-4db2-9257-2d27ad931303.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "177181",
      "name": "Amul Slim 'n' Trim Skimmed Milk (Zero Cholesterol)",
      "weight": "1 ltr",
      "price": "₹82",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/c1fb14c1-2f67-4fa1-bee8-04f68c8cd8e9.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.658,
    "blinkit": {
      "id": "559097",
      "name": "Amul Gir Cow A2 Milk",
      "weight": "1 ltr",
      "price": "₹80",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/53cc4198-105d-4a42-a9e8-664297a37683.png"
    },
    "zepto": {
      "name": "Amul A2 Gir Cow Fresh Milk",
      "price": "₹80",
      "weight": "1 pc (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/006c611f-dee4-4767-8b82-5455417661b4.jpeg",
      "href": "https://www.zepto.com/pn/amul-a2-gir-cow-fresh-milk/pvid/c02751b7-b3b3-4e34-b913-44fa6b4badbc",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.566,
    "blinkit": {
      "id": "621320",
      "name": "Amul Gold Full Cream Fresh Milk + Baby Banana Combo",
      "weight": "500 ml + 4 pieces",
      "price": "₹70",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f7b39b3c-b254-4ff0-a332-df14bcd3739b.png"
    },
    "zepto": {
      "name": "Amul Gold Full Cream Fresh Milk (Pouch)",
      "price": "₹35",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3a8d4113-939d-4e4e-a7ce-96e52152ba97.jpeg",
      "href": "https://www.zepto.com/pn/amul-gold-full-cream-fresh-milk-pouch/pvid/51d55eac-ca29-4532-9b32-9b7d317f346a",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "534890",
      "name": "Amul Taaza Toned Fresh Milk + Baby Banana (Robusta) Combo",
      "weight": "4 pieces + 500 ml",
      "price": "₹64",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/c454a110-ed64-4a88-bfd9-58b51570bc4b.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.655,
    "blinkit": {
      "id": "547185",
      "name": "Amul Buffalo A2 Milk",
      "weight": "1 ltr",
      "price": "₹88",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6032ea96-4ab2-44b4-8b46-f6bbf7cecfa7.png"
    },
    "zepto": {
      "name": "Amul A2 Buffalo Fresh Milk",
      "price": "₹37",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6289ad23-bd4f-491d-8fa4-d2866037963d.jpeg",
      "href": "https://www.zepto.com/pn/amul-a2-buffalo-fresh-milk/pvid/051dbb52-bcad-48b4-bb9f-63f409a6d38f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "534886",
      "name": "Amul Gold Full Cream Fresh Milk + Banana Robusta Regular Combo",
      "weight": "3 pieces + 500 ml",
      "price": "₹70",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9db15f7c-0e83-457d-b3d8-4367bd5fae33.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "547189",
      "name": "Amul Calci+ Milk",
      "weight": "250 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f595053a-a7ee-44a9-afce-76ac773e52b0.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "622786",
      "name": "Amul Cow Fresh Milk + Baby Banana Combo",
      "weight": "500 ml + 4 pieces",
      "price": "₹65",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/fea0129b-fb22-4e49-8612-28cd3ab8c274.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "622771",
      "name": "Amul Cow Fresh Milk + Banana Combo",
      "weight": "500 ml + 3 pieces",
      "price": "₹65",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/b27ceabc-bb25-4d67-95f8-74f251f96456.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "168",
      "name": "Amul Pure Milk Cheese Slices",
      "weight": "200 g",
      "price": "₹140",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a501e65f-194b-4db2-abc9-6b7bb515349c.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.554,
    "blinkit": {
      "id": "206534",
      "name": "Amul Kool Kesar Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d991a261-ae1a-483f-8c1c-a25b4e1916bb.png"
    },
    "zepto": {
      "name": "Amul Kool Kesar Milk Drink",
      "price": "₹22",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d1d451d2-544b-4a76-a732-ca003c889a50.jpeg",
      "href": "https://www.zepto.com/pn/amul-kool-kesar-milk-drink/pvid/021dba0c-a895-49d1-9fcb-2aa8b4b78921",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.615,
    "blinkit": {
      "id": "19504",
      "name": "Amul Kool Badam Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1a98a20c-8ed3-473f-a306-e03bd1e75a7f.png"
    },
    "zepto": {
      "name": "Amul Kool Badam Milk",
      "price": "₹23",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3ef5e6b2-3457-431d-b6aa-779bb8b8b7bc.jpeg",
      "href": "https://www.zepto.com/pn/amul-kool-badam-milk/pvid/5d5efa84-3f14-403f-a788-114378c92af8",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "26164",
      "name": "Amul Mithai Mate Condensed Milk",
      "weight": "200 g",
      "price": "₹63",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/74d45e9e-da52-4b6d-8bc3-80502b525dfe.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.639,
    "blinkit": {
      "id": "402720",
      "name": "Amul Kool Elaichi Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/c988c2c6-0808-4296-838f-aa20db89c1ed.png"
    },
    "zepto": {
      "name": "Amul Gold Kool Royal Elaichi Flavoured Milk",
      "price": "₹28",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b3572087-da2e-4424-b63f-b09996d3e115.jpg",
      "href": "https://www.zepto.com/pn/amul-gold-kool-royal-elaichi-flavoured-milk/pvid/b02f34c3-96ce-424d-9774-10e4d4faa8d7",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "178310",
      "name": "Amul Pure Milk Cheese",
      "weight": "400 g",
      "price": "₹237",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/bce5f050-e8fa-420b-a1b9-8d1abbed18cf.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "534884",
      "name": "Amul Taaza Toned Fresh Milk + Banana Robusta Regular Combo",
      "weight": "3 pieces + 500 ml",
      "price": "₹64",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/25932bc7-c15b-447b-8d6f-e0112e3eecc2.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "19135",
      "name": "Amul Kool Cafe Milk 'n' Coffee Flavoured Milk (Can)",
      "weight": "200 ml",
      "price": "₹35",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/66751334-2a0b-4f91-823a-bb76fc79363f.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "398852",
      "name": "Amul Kadai Doodh Flavoured Milk",
      "weight": "200 ml",
      "price": "₹35",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/3b9f0328-c7ec-45ac-80ce-2a804019f253.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.624,
    "blinkit": {
      "id": "402721",
      "name": "Amul Kool Rose Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/b582cc56-32fa-4d3e-a399-233cb148e7c3.png"
    },
    "zepto": {
      "name": "Amul Gold Kool Exotic Rose Flavoured Milk",
      "price": "₹28",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c7d26faf-e9a7-4f6e-8442-ff6efc330a1d.jpg",
      "href": "https://www.zepto.com/pn/amul-gold-kool-exotic-rose-flavoured-milk/pvid/3d07309b-dc77-4c21-be3d-d3b1820bfa81",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "427609",
      "name": "Amul Lite Milk Fat Spread",
      "weight": "100 g",
      "price": "₹45",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/5981f9ee-7eb8-4ec3-8467-82f6d206de7d.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "26904",
      "name": "Amul Kool Strawberry Flavoured Milk",
      "weight": "200 ml",
      "price": "₹30",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f9d052ec-1c7d-4965-9196-9192ee6241f3.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "341598",
      "name": "Amul Kool Cafe Milk 'n' Coffee Flavoured Milk",
      "weight": "200 ml",
      "price": "₹30",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d4e5896d-0327-4183-9d9f-04c26846e4bd.png"
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "10492",
      "name": "Amul Mithai Mate Condensed Milk",
      "weight": "400 g",
      "price": "₹122",
      "image": null
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "617986",
      "name": "Amul Sweetened Condensed Milk Gold",
      "weight": "405 g",
      "price": "₹152",
      "image": null
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.599,
    "blinkit": {
      "id": "19925",
      "name": "Mother Dairy Toned Milk",
      "weight": "500 ml",
      "price": "₹29",
      "image": null
    },
    "zepto": {
      "name": "Mother Dairy Toned Fresh Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e52434af-28d5-466d-bf08-29d60934c9ac.jpeg",
      "href": "https://www.zepto.com/pn/mother-dairy-toned-fresh-milk-pouch/pvid/b3da2d29-caf2-4c0e-9634-94d82008ae70",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.59,
    "blinkit": {
      "id": "339309",
      "name": "Mother Dairy Cow Milk",
      "weight": "500 ml",
      "price": "₹30",
      "image": null
    },
    "zepto": {
      "name": "Mother Dairy Fresh Cow Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9e9101e0-5591-483e-8f36-6eb14389d4a9.jpeg",
      "href": "https://www.zepto.com/pn/mother-dairy-fresh-cow-milk-pouch/pvid/3b2f7706-f70f-474d-911b-13aebfa73bcc",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.678,
    "blinkit": {
      "id": "19924",
      "name": "Mother Dairy Full Cream Milk",
      "weight": "500 ml",
      "price": "₹35",
      "image": null
    },
    "zepto": {
      "name": "Mother Dairy Full Cream Fresh Milk",
      "price": "₹35",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/22462d98-c262-4fad-aff6-f0e9a0dd23ce.jpeg",
      "href": "https://www.zepto.com/pn/mother-dairy-full-cream-fresh-milk/pvid/75e52b8a-1811-41e3-8a15-8c408f20b71d",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": {
      "id": "637875",
      "name": "Country Delight Cow Fresh Milk",
      "weight": "450 ml",
      "price": "₹44",
      "image": null
    },
    "zepto": null,
    "instamart": null
  },
  {
    "score": 0.59,
    "blinkit": {
      "id": "561270",
      "name": "Amul Taaza Toned Milk",
      "weight": "1 ltr",
      "price": "₹57",
      "image": null
    },
    "zepto": {
      "name": "Amul Taaza Toned Fresh Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d4b8ef20-df5e-4d0b-ab04-36de62dd0f45.jpeg",
      "href": "https://www.zepto.com/pn/amul-taaza-toned-fresh-milk-pouch/pvid/9d447ba5-1d35-46e1-bc64-e932135d026f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.611,
    "blinkit": {
      "id": "12872",
      "name": "Amul Gold Full Cream Milk",
      "weight": "500 ml",
      "price": "₹35",
      "image": null
    },
    "zepto": {
      "name": "Amul Gold Full Cream Fresh Milk (Pouch)",
      "price": "₹35",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3a8d4113-939d-4e4e-a7ce-96e52152ba97.jpeg",
      "href": "https://www.zepto.com/pn/amul-gold-full-cream-fresh-milk-pouch/pvid/51d55eac-ca29-4532-9b32-9b7d317f346a",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.611,
    "blinkit": {
      "id": "12872",
      "name": "Amul Gold Full Cream Milk",
      "weight": "500 ml",
      "price": "₹35",
      "image": null
    },
    "zepto": {
      "name": "Amul Gold Full Cream Fresh Milk (Pouch)",
      "price": "₹69",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/540c3e2e-131d-43dc-8266-90a15aae8674.jpeg",
      "href": "https://www.zepto.com/pn/amul-gold-full-cream-fresh-milk-pouch/pvid/a3277b40-243f-4bd5-a38e-af3a77b837e1",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.655,
    "blinkit": {
      "id": "547185",
      "name": "Amul Buffalo A2 Milk",
      "weight": "1 ltr",
      "price": "₹88",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6032ea96-4ab2-44b4-8b46-f6bbf7cecfa7.png"
    },
    "zepto": {
      "name": "Amul A2 Buffalo Fresh Milk",
      "price": "₹37",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6289ad23-bd4f-491d-8fa4-d2866037963d.jpeg",
      "href": "https://www.zepto.com/pn/amul-a2-buffalo-fresh-milk/pvid/051dbb52-bcad-48b4-bb9f-63f409a6d38f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.625,
    "blinkit": {
      "id": "34778",
      "name": "Amul Moti Toned Milk (90 Days Shelf Life)",
      "weight": "450 ml",
      "price": "₹32",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/eb2ba2ce-96fd-43cb-acc0-2a04ff6b810d.png"
    },
    "zepto": {
      "name": "Amul Moti - Homogenised Toned Milk (Pouch 90 Days Shelf life)",
      "price": "₹32",
      "weight": "1 pack (450 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/0b462c8d-e38c-4b49-aab1-d8f57b8fb89c.jpeg",
      "href": "https://www.zepto.com/pn/amul-moti-homogenised-toned-milk-pouch-90-days-shelf-life/pvid/1638f685-befc-478e-95f8-2d92213866e7",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Fresh Cow Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c47d8c5f-ae38-42af-8f48-0535396b474e.jpeg",
      "href": "https://www.zepto.com/pn/amul-fresh-cow-milk-pouch/pvid/8de1592a-3b72-4b0a-8527-ef59c4620410",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.641,
    "blinkit": {
      "id": "176",
      "name": "Amul Taaza Homogenised Toned Milk",
      "weight": "1 ltr",
      "price": "₹75",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png"
    },
    "zepto": {
      "name": "Amul Taaza Homogenised Toned Milk (Tetra Pack)",
      "price": "₹75",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/654e3c68-865e-42b0-ae12-8467c583cfaf.jpeg",
      "href": "https://www.zepto.com/pn/amul-taaza-homogenised-toned-milk-tetra-pack/pvid/84eae511-5edb-4a22-875e-5aa94976c2d6",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.641,
    "blinkit": {
      "id": "176",
      "name": "Amul Taaza Homogenised Toned Milk",
      "weight": "1 ltr",
      "price": "₹75",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png"
    },
    "zepto": {
      "name": "Amul Taaza Homogenised Toned Milk (Tetra Pack)",
      "price": "₹16",
      "weight": "1 pack (200 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7aecef2d-80ab-406d-8f44-bea711b845ae.jpeg",
      "href": "https://www.zepto.com/pn/amul-taaza-homogenised-toned-milk-tetra-pack/pvid/2a231315-2b07-4de0-af4a-3a4f9c48ad0c",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Gokul Satvik Toned Fresh Cow Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/158de1ea-f723-48a0-84f8-cc6279ee94f5.jpeg",
      "href": "https://www.zepto.com/pn/gokul-satvik-toned-fresh-cow-milk-pouch/pvid/d31bcd2e-9e92-4082-a165-cecd37289ed9",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Gokul Buffalo Full Cream Fresh Milk (Pouch)",
      "price": "₹37",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c01ac262-d5fe-4bdf-b5ce-5be9b93fdd9a.jpeg",
      "href": "https://www.zepto.com/pn/gokul-buffalo-full-cream-fresh-milk-pouch/pvid/23e25e5f-a089-4cee-8af6-9fb67260a1bc",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.599,
    "blinkit": {
      "id": "19925",
      "name": "Mother Dairy Toned Milk",
      "weight": "500 ml",
      "price": "₹29",
      "image": null
    },
    "zepto": {
      "name": "Mother Dairy Toned Fresh Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e52434af-28d5-466d-bf08-29d60934c9ac.jpeg",
      "href": "https://www.zepto.com/pn/mother-dairy-toned-fresh-milk-pouch/pvid/b3da2d29-caf2-4c0e-9634-94d82008ae70",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Gokul Taaza Toned Fresh Milk (Pouch)",
      "price": "₹56",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-606-945,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bcbc5542-7194-4e99-88d0-7afe0ddef188.png",
      "href": "https://www.zepto.com/pn/gokul-taaza-toned-fresh-milk-pouch/pvid/85137306-477a-419a-926a-76ee56d71d4f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.678,
    "blinkit": {
      "id": "19924",
      "name": "Mother Dairy Full Cream Milk",
      "weight": "500 ml",
      "price": "₹35",
      "image": null
    },
    "zepto": {
      "name": "Mother Dairy Full Cream Fresh Milk",
      "price": "₹35",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/22462d98-c262-4fad-aff6-f0e9a0dd23ce.jpeg",
      "href": "https://www.zepto.com/pn/mother-dairy-full-cream-fresh-milk/pvid/75e52b8a-1811-41e3-8a15-8c408f20b71d",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.59,
    "blinkit": {
      "id": "339309",
      "name": "Mother Dairy Cow Milk",
      "weight": "500 ml",
      "price": "₹30",
      "image": null
    },
    "zepto": {
      "name": "Mother Dairy Fresh Cow Milk (Pouch)",
      "price": "₹29",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9e9101e0-5591-483e-8f36-6eb14389d4a9.jpeg",
      "href": "https://www.zepto.com/pn/mother-dairy-fresh-cow-milk-pouch/pvid/3b2f7706-f70f-474d-911b-13aebfa73bcc",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Dahi Pouch",
      "price": "₹33",
      "weight": "1 pack (390 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f06d8762-8c47-4bda-a822-022a4c75da61.jpeg",
      "href": "https://www.zepto.com/pn/amul-masti-dahi-pouch/pvid/c50ac90e-6abb-4bc9-9aa0-34feacb95e24",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.658,
    "blinkit": {
      "id": "559097",
      "name": "Amul Gir Cow A2 Milk",
      "weight": "1 ltr",
      "price": "₹80",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/53cc4198-105d-4a42-a9e8-664297a37683.png"
    },
    "zepto": {
      "name": "Amul A2 Gir Cow Fresh Milk",
      "price": "₹80",
      "weight": "1 pc (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/006c611f-dee4-4767-8b82-5455417661b4.jpeg",
      "href": "https://www.zepto.com/pn/amul-a2-gir-cow-fresh-milk/pvid/c02751b7-b3b3-4e34-b913-44fa6b4badbc",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Gold Homogenised Standardised Milk (Tetra Pack)",
      "price": "₹80",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/dbeabd64-f310-49c8-9032-e25fc098ea86.jpeg",
      "href": "https://www.zepto.com/pn/amul-gold-homogenised-standardised-milk-tetra-pack/pvid/ff393466-31a4-4aba-a51b-a787c39ef57e",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.554,
    "blinkit": {
      "id": "206534",
      "name": "Amul Kool Kesar Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d991a261-ae1a-483f-8c1c-a25b4e1916bb.png"
    },
    "zepto": {
      "name": "Amul Kool Kesar Milk Drink",
      "price": "₹22",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d1d451d2-544b-4a76-a732-ca003c889a50.jpeg",
      "href": "https://www.zepto.com/pn/amul-kool-kesar-milk-drink/pvid/021dba0c-a895-49d1-9fcb-2aa8b4b78921",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.603,
    "blinkit": {
      "id": "206314",
      "name": "Amul Lactose Free Milk",
      "weight": "250 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/87c1c525-750e-475f-91d1-f155026ddaa1.png"
    },
    "zepto": {
      "name": "Amul Lactose Free Milk (Tetra Pack)",
      "price": "₹25",
      "weight": "1 pack (250 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bb9facdf-f5ad-45e6-90bb-3568b9791d88.jpeg",
      "href": "https://www.zepto.com/pn/amul-lactose-free-milk-tetra-pack/pvid/23037033-b0ab-4109-82b6-30f3a2a2cf84",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.615,
    "blinkit": {
      "id": "19504",
      "name": "Amul Kool Badam Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1a98a20c-8ed3-473f-a306-e03bd1e75a7f.png"
    },
    "zepto": {
      "name": "Amul Kool Badam Milk",
      "price": "₹23",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3ef5e6b2-3457-431d-b6aa-779bb8b8b7bc.jpeg",
      "href": "https://www.zepto.com/pn/amul-kool-badam-milk/pvid/5d5efa84-3f14-403f-a788-114378c92af8",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Kool Elaichi Drink",
      "price": "₹23",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/ee5108b0-d0f3-4e48-b227-1ce864e48539.jpeg",
      "href": "https://www.zepto.com/pn/amul-kool-elaichi-drink/pvid/08ad853e-80d9-4552-a5b2-3b53f039f770",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Smoodh Chocolate Milk Drink | Pet",
      "price": "₹17",
      "weight": "1 pc (150 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3125-3125,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d4249cb6-8f3f-49a6-9815-b85971ab493e.jpg",
      "href": "https://www.zepto.com/pn/smoodh-chocolate-milk-drink-pet/pvid/2b3d7c58-3f59-4f43-9ee8-e48ec604191b",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Humpy A2 Fresh Cow Milk (Pouch)",
      "price": "₹43",
      "weight": "1 pack (500 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-997-997,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6f1cf679-1eb0-4461-96a1-27fabb6218e4.jpeg",
      "href": "https://www.zepto.com/pn/humpy-a2-fresh-cow-milk-pouch/pvid/54d5a66c-7911-40ec-aa65-940a2146bc57",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Salted Butter",
      "price": "₹55",
      "weight": "1 pack (100 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e15c0b10-0367-4675-a5ab-6da2abf9bee1.jpeg",
      "href": "https://www.zepto.com/pn/amul-salted-butter/pvid/8da0c985-dc37-495c-a8bd-6019c120cb44",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Dahi Pouch",
      "price": "₹78",
      "weight": "1 pack (1 kg)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/75db7c09-d598-4300-aa1a-b35016cf88c5.jpeg",
      "href": "https://www.zepto.com/pn/amul-masti-dahi-pouch/pvid/cf83fdee-ebcf-4f49-915c-3c552a088670",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Smoodh Toffee Caramel Milk",
      "price": "₹17",
      "weight": "1 pc (150 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-4167-4167,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a0f22b79-ce28-4127-b4bc-a43e830d49f5.jpg",
      "href": "https://www.zepto.com/pn/smoodh-toffee-caramel-milk/pvid/db97666d-32a7-4a11-b037-55677b7e0b1a",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Smoodh Chocolate and Hazelnut Milk Drink",
      "price": "₹17",
      "weight": "1 pc (150 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3125-3125,pr-true,f-auto,q-40,dpr-2/cms/product_variant/8a4d3e7a-49f2-44b6-9685-cb7ed6652b04.jpg",
      "href": "https://www.zepto.com/pn/smoodh-chocolate-and-hazelnut-milk-drink/pvid/ac044ae0-1096-4a9c-86f9-4aa6058ef5a6",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Dahi Cup",
      "price": "₹23",
      "weight": "1 pc (200 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a3372e87-53ed-4674-8b09-07646468428c.jpg",
      "href": "https://www.zepto.com/pn/amul-masti-dahi-cup/pvid/51c1f355-3a4d-4ae2-a459-048b73108e6f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Slim Trim Skimmed Milk (Tetra Pack)",
      "price": "₹82",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e42279d3-0d9c-44fb-a686-9895dc9c6bdf.jpeg",
      "href": "https://www.zepto.com/pn/amul-slim-trim-skimmed-milk-tetra-pack/pvid/11cca7b6-7d07-4e6e-a799-0fcf85f7b5da",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Delicious Fat Spread - Cholesterol Free",
      "price": "₹19",
      "weight": "1 pack (100 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9a6ce510-2ce2-4760-bf45-3f09629d2471.jpeg",
      "href": "https://www.zepto.com/pn/delicious-fat-spread-cholesterol-free/pvid/e600868b-693e-4f8b-ae63-23aade3cb112",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Salted Butter",
      "price": "₹55",
      "weight": "1 pack (100 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e15c0b10-0367-4675-a5ab-6da2abf9bee1.jpeg",
      "href": "https://www.zepto.com/pn/amul-salted-butter/pvid/8da0c985-dc37-495c-a8bd-6019c120cb44",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Dahi Pouch",
      "price": "₹78",
      "weight": "1 pack (1 kg)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/75db7c09-d598-4300-aa1a-b35016cf88c5.jpeg",
      "href": "https://www.zepto.com/pn/amul-masti-dahi-pouch/pvid/cf83fdee-ebcf-4f49-915c-3c552a088670",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Smoodh Toffee Caramel Milk",
      "price": "₹17",
      "weight": "1 pc (150 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-4167-4167,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a0f22b79-ce28-4127-b4bc-a43e830d49f5.jpg",
      "href": "https://www.zepto.com/pn/smoodh-toffee-caramel-milk/pvid/db97666d-32a7-4a11-b037-55677b7e0b1a",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Smoodh Chocolate and Hazelnut Milk Drink",
      "price": "₹17",
      "weight": "1 pc (150 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3125-3125,pr-true,f-auto,q-40,dpr-2/cms/product_variant/8a4d3e7a-49f2-44b6-9685-cb7ed6652b04.jpg",
      "href": "https://www.zepto.com/pn/smoodh-chocolate-and-hazelnut-milk-drink/pvid/ac044ae0-1096-4a9c-86f9-4aa6058ef5a6",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Dahi Cup",
      "price": "₹23",
      "weight": "1 pc (200 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a3372e87-53ed-4674-8b09-07646468428c.jpg",
      "href": "https://www.zepto.com/pn/amul-masti-dahi-cup/pvid/51c1f355-3a4d-4ae2-a459-048b73108e6f",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Slim Trim Skimmed Milk (Tetra Pack)",
      "price": "₹82",
      "weight": "1 pack (1 L)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e42279d3-0d9c-44fb-a686-9895dc9c6bdf.jpeg",
      "href": "https://www.zepto.com/pn/amul-slim-trim-skimmed-milk-tetra-pack/pvid/11cca7b6-7d07-4e6e-a799-0fcf85f7b5da",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Delicious Fat Spread - Cholesterol Free",
      "price": "₹19",
      "weight": "1 pack (100 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9a6ce510-2ce2-4760-bf45-3f09629d2471.jpeg",
      "href": "https://www.zepto.com/pn/delicious-fat-spread-cholesterol-free/pvid/e600868b-693e-4f8b-ae63-23aade3cb112",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Dahi Cup",
      "price": "₹44",
      "weight": "1 pc (400 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bc8c4071-3379-44b4-b675-7b6ff308e86c.jpeg",
      "href": "https://www.zepto.com/pn/amul-masti-dahi-cup/pvid/c3c7b54e-83ab-40f0-8ba3-09d8633831bc",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.639,
    "blinkit": {
      "id": "402720",
      "name": "Amul Kool Elaichi Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/c988c2c6-0808-4296-838f-aa20db89c1ed.png"
    },
    "zepto": {
      "name": "Amul Gold Kool Royal Elaichi Flavoured Milk",
      "price": "₹28",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b3572087-da2e-4424-b63f-b09996d3e115.jpg",
      "href": "https://www.zepto.com/pn/amul-gold-kool-royal-elaichi-flavoured-milk/pvid/b02f34c3-96ce-424d-9774-10e4d4faa8d7",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Gold Chocochips Ice Cream Cup",
      "price": "₹43",
      "weight": "1 pack (125 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/32f708a6-70c1-49bd-8fc1-744bcb4f9109.jpg",
      "href": "https://www.zepto.com/pn/amul-gold-chocochips-ice-cream-cup/pvid/939ded54-bb16-4dcd-8165-f24974a6e957",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": 0.624,
    "blinkit": {
      "id": "402721",
      "name": "Amul Kool Rose Flavoured Milk",
      "weight": "180 ml",
      "price": "₹25",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/b582cc56-32fa-4d3e-a399-233cb148e7c3.png"
    },
    "zepto": {
      "name": "Amul Gold Kool Exotic Rose Flavoured Milk",
      "price": "₹28",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c7d26faf-e9a7-4f6e-8442-ff6efc330a1d.jpg",
      "href": "https://www.zepto.com/pn/amul-gold-kool-exotic-rose-flavoured-milk/pvid/3d07309b-dc77-4c21-be3d-d3b1820bfa81",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Salted Butter (Chiplets)",
      "price": "₹68",
      "weight": "1 pack (10 x 10 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bc145179-e4da-45db-a10c-7c19dff04176.jpeg",
      "href": "https://www.zepto.com/pn/amul-salted-butter-chiplets/pvid/7457c7d6-26b9-466b-8950-9c1adb6faa9a",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Masti Set Curd Tub",
      "price": "₹95",
      "weight": "1 pc (1 kg)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/ca568776-411d-4f0a-acf7-f0b040f9550d.jpg",
      "href": "https://www.zepto.com/pn/amul-masti-set-curd-tub/pvid/cf8c88da-d6d3-40af-893c-db15c351513b",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Salted Butter",
      "price": "₹275",
      "weight": "1 pack (500 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/229b297f-d894-457d-9c8b-34aa86df6b88.jpeg",
      "href": "https://www.zepto.com/pn/amul-salted-butter/pvid/fc2ffbca-a36b-4728-b6be-3168475f3b75",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Salted Butter",
      "price": "₹112",
      "weight": "1 pack (200 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a9d3d8d2-ffe9-48d9-90dd-c76defed76dd.jpeg",
      "href": "https://www.zepto.com/pn/amul-salted-butter/pvid/bebc0d21-3d61-49ad-bedc-a7155a5169d3",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Gold Fruit 'N' Nut Fantasy Ice Cream Cup",
      "price": "₹43",
      "weight": "1 pack (125 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/888f2338-68d4-4a23-8f15-09e1a90905fa.jpg",
      "href": "https://www.zepto.com/pn/amul-gold-fruit-n-nut-fantasy-ice-cream-cup/pvid/835fbf52-badb-4f1f-b58a-7190620e51e6",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Garlic & Herbs Buttery Spread",
      "price": "₹61",
      "weight": "1 pack (100 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d2ba7227-a1c2-4881-b613-dac4c8501e8e.jpeg",
      "href": "https://www.zepto.com/pn/amul-garlic-herbs-buttery-spread/pvid/bb3b57c0-4a26-4c7b-8ff2-9e50ee19bb51",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Nestle Milo Health Chocolate Drink with Millets",
      "price": "₹39",
      "weight": "1 pc (180 ml)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9bcd0f6b-0f8b-460f-8d66-cd3cf253273e.jpg",
      "href": "https://www.zepto.com/pn/nestle-milo-health-chocolate-drink-with-millets/pvid/32ff0d90-3da0-463d-bedc-c40950cfb841",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Amul Premium Dahi Cup",
      "price": "₹55",
      "weight": "1 pc (400 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/3e2942a4-7d05-4fca-84de-3d5731a9b295.jpeg",
      "href": "https://www.zepto.com/pn/amul-premium-dahi-cup/pvid/c23cb9e0-9531-41ab-8855-f3df4144b5ca",
      "soldout": false
    },
    "instamart": null
  },
  {
    "score": null,
    "blinkit": null,
    "zepto": {
      "name": "Delicious Fat Spread - Cholesterol Free",
      "price": "₹97",
      "weight": "1 pack (500 g)",
      "image": "https://cdn.zeptonow.com/production/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a7da26d1-33d9-4d69-8c41-7d614bf57ac9.jpeg",
      "href": "https://www.zepto.com/pn/delicious-fat-spread-cholesterol-free/pvid/98507230-5aaf-46b3-90c2-69c86786a994",
      "soldout": false
    },
    "instamart": null
  }
]
export default testdata;