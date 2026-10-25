/* Regenerates sitemap.xml from the product catalogue in assets/js/products.js.
   Run from the project root after adding or removing products:
     node tools/build-sitemap.js */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE = "https://www.aquarise.lk";

// products.js is a browser script; give it just enough of a DOM to load.
const sandbox = { document: { addEventListener() {} }, console };
vm.createContext(sandbox);
vm.runInContext(
  fs.readFileSync(path.join(ROOT, "assets/js/products.js"), "utf8") +
    "\n;this.__products = [...DAB_PRODUCTS, ...EIFEL_PRODUCTS];",
  sandbox
);

const today = new Date().toISOString().slice(0, 10);
const esc = s => s.replace(/&/g, "&amp;");

const urls = [
  { loc: `${SITE}/`, priority: "1.0" },
  { loc: `${SITE}/products.html`, priority: "0.9" },
  { loc: `${SITE}/partners.html`, priority: "0.7" },
  ...sandbox.__products.map(p => ({
    loc: `${SITE}/product.html?supplier=${p.supplierKey}&id=${encodeURIComponent(p.id)}`,
    priority: p.cat === "electronic-booster" || p.supplierKey === "eifel" ? "0.8" : "0.6",
  })),
];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${esc(u.loc)}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join("\n") +
  `\n</urlset>\n`;

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
