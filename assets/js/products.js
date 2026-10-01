/* ==========================================================================
   Product catalogue data — DAB Pumps + Eifel Pump
   Sources:
     DAB Pumps  : https://www.dabpumps.com/en_en/products/catalog
     Eifel Pump : https://www.eifelcn.com/products
     Category groupings and the Eifel product selection follow the
     Aquarise Agencies (Pvt) Ltd company & products deck.
   ========================================================================== */

const DAB_BASE = "https://www.dabpumps.com/en_en/products/catalog/";
const IMG_BASE = "https://s7g10.scene7.com/is/image/dabpumps/";
const IMG_PARAMS = "?wid=600&hei=600&fmt=jpg&bgcolor=FFFFFF";

const WHATSAPP_NUMBER = "94764276959";
function whatsappLink(productName, supplier) {
  const text = `Hi Aquarise, I'm interested in the ${productName}${supplier ? " (" + supplier + ")" : ""}. Could you share more details and pricing? (via aquarise.lk)`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ---------------- DAB Pumps ---------------- */

const DAB_CATEGORIES = [
  { id: "multistage",         label: "Multistage Centrifugal Pumps" },
  { id: "end-suction",        label: "End Suction Centrifugal Pumps" },
  { id: "booster",            label: "Booster Pumps & Pressure Sets" },
  { id: "electronic-pressure",label: "Electronic Pressure Sets" },
  { id: "inline",             label: "Inline Pumps" },
  { id: "circulator",         label: "Circulator Pumps (HVAC)" },
  { id: "borehole",           label: "Submersible & Borehole Pumps" },
  { id: "sewage",             label: "Submersible Sewage Pumps" },
  { id: "drainage",           label: "Submersible Drainage Pumps" },
  { id: "lifting",            label: "Lifting Systems" },
  { id: "pool",               label: "Swimming Pool & Garden Pumps" },
  { id: "controls",           label: "Controls & Monitoring" },
  { id: "storage",            label: "Storage Tanks" },
];

const DAB_PRODUCTS = [
  { name: "A, B, D", slug: "a-b-d", cat: "circulator", img: "a_b_d_dab_family",
    desc: "Fixed-speed circulator pumps for domestic heating and hot-water recirculation systems." },
  { name: "ALM, ALP", slug: "alm-alp", cat: "inline", img: "alm_alp_dab_family",
    desc: "In-line, fixed-speed circulators built for compact plant rooms and residential heating loops." },
  { name: "BPH, BMH, DPH, DMH", slug: "bph-bmh-dph-dmh", cat: "inline", img: "bph_bmh_dph_dmh_dab_family",
    desc: "Single and twin-head in-line circulators for heating and conditioning circuits in larger buildings." },
  { name: "CM / CP / DCM / DCP (and G variants)", slug: "cm-cm-g-cm2-cm2-g-cp-cp-g-cp2-cp2-g-dcm-dcm-g-dcm2-dcm2-g-dcp-dcp-g-dcp2-dcp2-g", cat: "inline",
    img: "CM_CM-G_CM2_CM2-G_CP_CP-G_CP2_CP2-G_DCM_DCM-G_DCM2_DCM2-G_DCP_DCP-G_DCP2_DCP2-G_dab_family",
    desc: "Fixed-speed in-line circulator range covering single and twin-pump configurations for heating and conditioning." },
  { name: "CME / CPE / DCME / DCPE (and GE variants)", slug: "cme-cm-ge-cpe-cp-ge-dcme-dcm-ge-dcpe-dcp-ge", cat: "inline",
    img: "CME_CM-GE_CM2E_CM2-GE_CPE_CP-GE_CP2E_CP2-GE_dab_family%20copia",
    desc: "Electronic, variable-speed in-line circulators that trim energy use to match real system demand." },
  { name: "Evoplus circulator", slug: "evoplus-circulator", cat: "circulator", img: "evoplus_dab_family",
    desc: "High-efficiency electronic circulator with automatic self-adapting function for residential heating." },
  { name: "Evosta circulator", slug: "evosta-circulator", cat: "circulator", img: "evosta_dab_family",
    desc: "Compact, energy-saving electronic circulator designed as a drop-in upgrade for older fixed-speed units." },
  { name: "K (Single / Twin Impeller)", slug: "k", cat: "multistage", img: "k_dab_family",
    desc: "Close-coupled centrifugal pumps for general water circulation, part of the K single/twin impeller range." },
  { name: "KC", slug: "kc", cat: "multistage", img: "kc_kcv_dab_family-1",
    desc: "Close-coupled centrifugal pumps for domestic and light commercial water supply." },
  { name: "K-HA", slug: "k-ha", cat: "inline", img: "k_ha_dab_family",
    desc: "Fixed-speed in-line circulator built for high-availability heating and cooling plant." },
  { name: "KI (Single / Twin Impeller)", slug: "ki", cat: "multistage", img: "ki_dab_family",
    desc: "Centrifugal pumps from the KI single/twin impeller series, suited to booster and circulation duties." },
  { name: "KLM, KLP", slug: "klm-klp", cat: "inline", img: "klm_klp_dab_family",
    desc: "In-line circulators for medium-to-large heating and conditioning distribution networks." },

  { name: "4-inch motors", slug: "4-inch-motors", cat: "borehole", img: "4_inch_motors_dab_family",
    desc: "Submersible motors sized for 4-inch boreholes, paired with DAB submersible pump ends for wells." },
  { name: "6 inch motors", slug: "6-inch-motors", cat: "borehole", img: "6_inch_motors_dab_family",
    desc: "Heavy-duty submersible motors for 6-inch boreholes serving high-yield water supply and irrigation." },
  { name: "Divertek", slug: "divertek", cat: "borehole", img: "divertek_dab_family",
    desc: "Submersible multistage pumps for deep wells, boreholes and pressure-boosting applications." },
  { name: "Micra", slug: "micra", cat: "borehole", img: "micra_dab_family",
    desc: "Compact submersible pump for small-diameter wells and domestic water supply." },
  { name: "Pulsar", slug: "pulsar", cat: "borehole", img: "pulsar_dab_family",
    desc: "Submersible borehole pumps engineered for reliable groundwater abstraction and farm water supply." },
  { name: "Rewindable borehole motor", slug: "rewindable-borehole-motor", cat: "borehole", img: "rewindable_borehole_motors_dab_family",
    desc: "Rewindable submersible motor platform for long-service-life borehole installations." },
  { name: "S4 borehole", slug: "s4-borehole", cat: "borehole", img: "s4_borehole_dab_family",
    desc: "Slim submersible pump range for narrow boreholes and residential groundwater wells." },
  { name: "SMC borehole", slug: "smc-borehole", cat: "borehole", img: "smc_dab_family",
    desc: "Submersible multistage borehole pumps for domestic and agricultural water lifting." },
  { name: "SMN borehole", slug: "smn-borehole", cat: "borehole", img: "smn_dab_family",
    desc: "Submersible borehole pump series built for continuous duty in water supply schemes." },
  { name: "SS borehole", slug: "ss-borehole", cat: "borehole", img: "ss_borehole_dab_family",
    desc: "Stainless-steel submersible borehole pumps for corrosion resistance in aggressive groundwater." },
  { name: "VA", slug: "va", cat: "borehole", img: "va_dab_family",
    desc: "Submersible pump range for vertical installation in wells and boreholes." },

  { name: "Divertron", slug: "divertron", cat: "electronic-pressure", img: "divertron_dab_family",
    desc: "All-in-one integrated pressurisation unit that starts and stops automatically with water demand." },
  { name: "DTron", slug: "dtron", cat: "electronic-pressure", img: "dtron_dab_family",
    desc: "Integrated electronic pressurisation system combining pump, controller and sensor in one unit." },
  { name: "EsyBox Line", slug: "esybox-line", cat: "electronic-pressure", img: "esybox_line_dab_family",
    desc: "Compact automatic booster sets delivering constant pressure for homes and buildings — featured on our homepage." },
  { name: "KV (Booster / Pressure Sets)", slug: "kv", cat: "booster", img: "KV_dab_family",
    desc: "Vertical multistage pumps from the NKV/NKVE/KV booster range for pressure boosting and water supply." },
  { name: "KVC", slug: "kvc-booster-pumps-set-with-fixed-speed", cat: "electronic-pressure", img: "kvc_dab_family",
    desc: "Fixed-speed vertical multistage booster sets for buildings with steady pressure demand." },
  { name: "NKP, NKP-G", slug: "nkp-nkp-g", cat: "booster", img: "nkp_g_dab_family",
    desc: "Close-coupled centrifugal pumps from the NKP/NKM booster range for water supply and pressure-boosting." },

  { name: "Drenag", slug: "drenag", cat: "drainage", img: "drenag_dab_family",
    desc: "Submersible drainage pumps for clear-to-slightly-soiled water in basements and civil works." },
  { name: "Feka", slug: "feka", cat: "sewage", img: "feka_dab_family",
    desc: "Submersible pumps for effluent and wastewater containing solids, for domestic and civil use." },
  { name: "FekaBox station", slug: "fekabox-station", cat: "lifting", img: "dels_dab_family",
    desc: "Compact pre-assembled lifting station for collecting and pumping domestic wastewater." },
  { name: "Fekafos, Fekabox", slug: "fekafos-fekabox", cat: "lifting", img: "fekafos_fekabox_dab_family",
    desc: "Wastewater lifting stations with submersible pumps for below-sewer-level drainage." },
  { name: "FK", slug: "fk", cat: "sewage", img: "fk_dab_family",
    desc: "Submersible sewage pumps built to handle raw wastewater with a free-passage impeller." },
  { name: "FX", slug: "fx", cat: "drainage", img: "fx_dab_family",
    desc: "Submersible drainage pumps for construction sites, flooded areas and general dewatering." },
  { name: "Genix stations", slug: "genix-stations", cat: "lifting", img: "genix_dab_family",
    desc: "Packaged lifting stations for residential and small commercial wastewater collection." },
  { name: "Nova", slug: "nova", cat: "drainage", img: "nova_dab_family",
    desc: "Submersible drainage pumps for clean and lightly loaded water in homes and gardens." },
  { name: "NovaBox station", slug: "novabox-station", cat: "lifting", img: "novabox_station_dab_family",
    desc: "Ready-to-install lifting station pairing Nova drainage pumps with a collection tank." },

  { name: "EPro", slug: "epro", cat: "pool", img: "epro_dab_family",
    desc: "Self-priming filtration pumps for residential and light commercial swimming pools." },
  { name: "ESwim", slug: "eswim", cat: "pool", img: "eswim_dab_family",
    desc: "Self-priming pool pumps designed for reliable filtration circulation in private pools." },
  { name: "Eurocover", slug: "eurocover", cat: "pool", img: "eurocover_dab_family",
    desc: "Dedicated pump for pool-cover water removal, keeping automatic covers running freely." },
  { name: "EuroPro High Flow", slug: "europro", cat: "pool", img: "europro_hf_dab_family",
    desc: "Robust self-priming centrifugal pumps for pool filtration and garden water transfer." },
  { name: "EuroSwim", slug: "euroswim", cat: "pool", img: "euroswim_dab_family",
    desc: "Self-priming swimming-pool filtration pumps for consistent water clarity." },
  { name: "Novair", slug: "novair", cat: "pool", img: "novair_dab_family",
    desc: "Submersible aerator for ponds and small water bodies, improving oxygenation." },
  { name: "Novapond", slug: "novapond", cat: "pool", img: "novapond_dab_family%20copia",
    desc: "Submersible pump designed for ornamental ponds, fountains and water features." },

  { name: "Euro", slug: "euro", cat: "multistage", img: "euro_dab_family",
    desc: "Horizontal multistage pumps for water supply, irrigation and pressure-boosting applications." },
  { name: "KDN", slug: "kdn", cat: "end-suction", img: "kdn_dab_family",
    desc: "End suction centrifugal pumps, including the KDN Oversize range, for general and firefighting duty." },
  { name: "KVT", slug: "kvt", cat: "multistage", img: "kvt_dab_family",
    desc: "Vertical multistage pumps built for demanding industrial and firefighting duty." },
  { name: "NKV", slug: "nkv", cat: "multistage", img: "nkv_dab_family",
    desc: "Vertical multistage pumps available in firefighting-certified configurations for building fire systems." },

  { name: "2 JET", slug: "jet", cat: "booster", img: "jet_dab_family",
    desc: "Self-priming jet pumps for deep-well water supply where suction lift is required." },
  { name: "KPF, KPS", slug: "kpf-kps", cat: "multistage", img: "kpf_dab_family",
    desc: "Peripheral pumps from the KPS/KPF multistage centrifugal range for low-flow, high-head supply." },

  { name: "DConnect Box", slug: "dconnect-box", cat: "controls", img: "d_connect_box_dab_family",
    desc: "Remote monitoring device that connects compatible DAB pumps to the DConnect app for status and alerts." },
  { name: "On/off controller", slug: "on-off-controller", cat: "controls", img: "on_off_controller_dab_family",
    desc: "Simple electronic controller for automatic on/off pump operation based on pressure or level." },
  { name: "Pump controller", slug: "pump-controller", cat: "controls", img: "pump_controller_dab_family",
    desc: "Electronic control panel for managing single or multiple pump installations." },
  { name: "Variable frequency drive", slug: "variable-frequency-drive", cat: "controls", img: "ngdrive_dab_family",
    desc: "VFD units that modulate pump speed to match demand, cutting energy use and wear." },
  { name: "VFD pass through for water pump", slug: "vfd-pass-through-for-water-pump", cat: "controls", img: "VFD_pass_through_for_water_pump_family",
    desc: "Pass-through variable frequency drive for retrofitting speed control onto existing pump installations." },

  { name: "NBB", slug: "nbb", cat: "storage", img: "nbb_dab_family",
    desc: "Pressure and water storage tanks that complement DAB pump sets for stable system pressure." },
].map(p => ({
  ...p,
  id: p.slug,
  supplier: "DAB Pumps",
  supplierKey: "dab",
  url: DAB_BASE + p.slug,
  image: p.img ? IMG_BASE + p.img + IMG_PARAMS : null,
}));

/* ---------------- EsyBox Line — homepage feature + sub-products ---------------- */

const ESYBOX_PRODUCTS = [
  { id: "esybox-pop", name: "EsyBox Pop", url: DAB_BASE + "esybox-line/esybox_pop",
    img: "esybox_pop_dab_family_fml",
    desc: "Small residential — maximum pressure, minimum size for homes without space for bulky equipment. The latest addition to the range, with integrated H2D connectivity." },
  { id: "esybox-mini3", name: "EsyBox Mini³", url: DAB_BASE + "esybox-line/esybox-mini-3",
    img: "esybox_mini_dab_family_fml",
    desc: "Residential — a small, energy-efficient booster packed with advanced technology, with quiet operation for home and garden pressure management." },
  { id: "esybox", name: "EsyBox", url: DAB_BASE + "esybox-line/esybox",
    img: "esybox_dab_family_fml",
    desc: "Residential & building water boosting — the pioneering electronic pressure vessel system with a fully integrated inverter, for maximum water and energy savings." },
  { id: "esybox-diver", name: "EsyBox Diver", url: DAB_BASE + "esybox-line/esybox-diver",
    img: "esybox__diver_dab_family_fml_",
    desc: "Submersible applications — the first submersible pump with a built-in inverter and remote control, for wells, tanks and outdoor use." },
  { id: "esybox-max", name: "EsyBox Max", url: DAB_BASE + "esybox-line/esybox-max",
    img: "esybox__max_dab_family_fml",
    desc: "Larger residential & commercial — a modular pressure-boosting system with integrated connectivity, expandable to multi-unit sets for buildings up to 120 apartments." },
].map(p => ({ ...p, image: IMG_BASE + p.img + IMG_PARAMS }));

// Attach the EsyBox Line sub-products so its detail page can list every model.
DAB_PRODUCTS.find(p => p.id === "esybox-line").subProducts = ESYBOX_PRODUCTS;

/* ---------------- Eifel Pump ----------------
   Only the UL Listed models Aquarise Agencies supplies are listed here:
   EHF, ESF and FDL. */

const EIFEL_BASE = "https://www.eifelcn.com/category/";
const EIFEL_PRODUCTS_URL = "https://www.eifelcn.com/products";

const EIFEL_CATEGORIES = [
  { id: "fire-ul",  label: "UL Listed Fire Pumps" },
  { id: "jockey",   label: "UL Listed Jockey Pumps" },
];

const EIFEL_PRODUCT_BASE = "https://www.eifelcn.com/product/";
const EIFEL_IMG = "assets/images/eifel-src/";

const EIFEL_SUBPRODUCTS = {
  "ehf-series": [
    { id: "ehfc-baseplate", name: "EHFC — with Integrated Baseplate", img: "ehf1.jpg",
      url: EIFEL_PRODUCT_BASE + "eifel-horizontal-end-suction-centrifugal-fire-pump-with-baseplate",
      desc: "UL 448 compliant end suction fire pump with an integrated baseplate and optimised hydraulic design." },
    { id: "ehf-cooling", name: "EHF — NFPA 20 Cooling System Pump", img: "ehf2.png",
      url: EIFEL_PRODUCT_BASE + "nfpa20-end-suction-fire-pump-for-cooling-system",
      desc: "UL 448 compliant fire pump with optimised hydraulics for high efficiency and energy saving." },
    { id: "ehf-highrise", name: "EHF — Heavy-Duty High-Rise Pump", img: "ehf3.jpg",
      url: EIFEL_PRODUCT_BASE + "ul-listed-heavy-duty-end-suction-fire-pump-for-high-rise-buildings",
      desc: "Heavy-duty UL Listed end suction fire pump built for high-rise buildings and industrial complexes." },
  ],
  "esf-series": [
    { id: "esf-diesel", name: "ESF — Diesel Engine Variant", img: "esf1.png",
      url: EIFEL_PRODUCT_BASE + "eifel-ul-fm-diesel-engine-fire-pump-double-suction-split-casing-pump-for-fire-protection-system",
      desc: "UL/FM diesel engine driven double-suction split-case fire pump for fire protection systems." },
    { id: "esf-electric", name: "ESF — Electric High-Pressure Variant", img: "esf2.png",
      url: EIFEL_PRODUCT_BASE + "horizontal-double-suction-split-for-fire-pump-electric-high-pressure-industrial-ul-firefighting-water-pump",
      desc: "UL 448 compliant electric-driven double-suction split-case fire pump for high-pressure firefighting duty." },
    { id: "esf-ductile", name: "ESF — Ductile Iron Casing Variant", img: "esf3.jpg",
      url: EIFEL_PRODUCT_BASE + "eifel-ul-listed-horizontal-double-suction-split-case-fire-pump-with-ductile-iron-casing",
      desc: "UL Listed double-suction split-case fire pump with a ductile iron casing for durability." },
  ],
  "fdl-series": [
    { id: "fdl-multistage", name: "FDL / FDLF / FDLL — Vertical Multistage Pump", img: "fdl1.jpg",
      url: EIFEL_PRODUCT_BASE + "mechanical-seal-vertical-multistage-centrifugal-pump",
      desc: "UL Listed non-self-priming vertical multistage centrifugal pumps available with standard motors, for HVAC and high-altitude duty." },
  ],
};

const EIFEL_PRODUCTS = [
  { id: "ehf-series", name: "EHF Series", url: EIFEL_BASE + "ehf-series", cat: "fire-ul", img: "eifel-collage-ehf.jpg",
    desc: "UL Listed heavy-duty horizontal end suction fire pumps, built with optimised hydraulics and ductile iron casings for high-rise buildings and industrial complexes." },
  { id: "esf-series", name: "ESF Series", url: EIFEL_BASE + "esf-series", cat: "fire-ul", img: "eifel-collage-esf.jpg",
    desc: "UL Listed horizontal double-suction split-case fire pumps, designed to process high-flow emergency volumes with stable operation and low vibration." },
  { id: "fdl-series", name: "FDL Series", url: EIFEL_BASE + "fdl-series", cat: "jockey", img: "eifel-collage-fdl.jpg",
    desc: "UL Listed vertical multistage pressure maintenance pumps designed specifically to serve as reliable jockey pump sets within emergency sprinkler mains." },
].map(p => ({
  ...p,
  supplier: "Eifel Pump",
  supplierKey: "eifel",
  ulListed: true,
  image: p.img ? "assets/images/" + p.img : null,
  subProducts: (EIFEL_SUBPRODUCTS[p.id] || []).map(sp => ({
    ...sp,
    image: EIFEL_IMG + sp.img,
    supplier: "Eifel Pump",
    ulListed: true,
  })),
}));

/* ---------------- Shared rendering helpers ---------------- */

const UL_BADGE_HTML = `<span class="ul-badge" title="UL Listed">
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>
  UL Listed</span>`;

function catLabel(categories, id) {
  const c = categories.find(x => x.id === id);
  return c ? c.label : id;
}

function detailUrl(p) {
  return `product.html?supplier=${p.supplierKey}&id=${encodeURIComponent(p.id)}`;
}

function productCardHTML(p, categories) {
  const mediaInner = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback'); this.remove();" />`
    : "";
  const fallbackClass = p.image ? "" : " img-fallback";
  return `
    <article class="product-card">
      <a class="product-card-link" href="${detailUrl(p)}">
        <div class="product-media${fallbackClass}">${mediaInner}${p.ulListed ? UL_BADGE_HTML : ""}</div>
        <span class="cat-chip">${catLabel(categories, p.cat)}</span>
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </a>
      <div class="card-foot">
        <span style="font-size:.78rem;color:var(--gray);font-weight:600;">${p.supplier}</span>
        <div class="card-foot-actions">
          <a href="${whatsappLink(p.name, p.supplier)}" target="_blank" rel="noopener" class="wa-icon-link" aria-label="Contact us on WhatsApp about ${p.name}" title="Contact us on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5L9.2 8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
          </a>
          <a href="${detailUrl(p)}">
            View Details
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    </article>`;
}

/* ==========================================================================
   EsyBox Line — feature badges (connectivity, monitoring, assembly, certs)
   Shared between the homepage feature section and the EsyBox Line detail page.
   ========================================================================== */

const ESYBOX_FEATURE_BADGES = [
  { img: "assets/images/feature-connectivity.png", alt: "Built-in Connectivity" },
  { img: "assets/images/feature-monitoring.png", alt: "Remote Monitoring — via web portal and H2D App" },
  { img: "assets/images/feature-osa.png", alt: "On-Site Assembly (OSA)" },
  {
    caption: "Certified",
    imgs: [
      { src: "assets/images/cert-acs.png", alt: "ACS certified" },
      { src: "assets/images/cert-wras.png", alt: "WRAS approved product" },
      { src: "assets/images/cert-nsf.png", alt: "NSF certified" },
    ],
  },
];

function esyboxFeatureBadgesHTML() {
  return ESYBOX_FEATURE_BADGES.map(f => {
    if (f.imgs) {
      return `
      <div class="feature-badge feature-badge-certs">
        <div class="cert-logos">
          ${f.imgs.map(i => `<img src="${i.src}" alt="${i.alt}" loading="lazy" />`).join("")}
        </div>
        <span class="cert-caption">${f.caption}</span>
      </div>`;
    }
    return `
    <div class="feature-badge">
      <img src="${f.img}" alt="${f.alt}" class="feature-badge-img" loading="lazy" />
    </div>`;
  }).join("");
}

function initEsyboxFeatureBadges() {
  const el = document.getElementById("esyboxFeatureBadges");
  if (el) el.innerHTML = esyboxFeatureBadgesHTML();
}

/* ==========================================================================
   Homepage — Featured EsyBox Line slideshow
   ========================================================================== */

function initEsyboxSlideshow() {
  const stage = document.getElementById("esyboxStage");
  const dotsWrap = document.getElementById("esyboxDots");
  const info = document.getElementById("esyboxInfo");
  if (!stage || !dotsWrap || !info) return;

  let current = 0;

  stage.innerHTML = ESYBOX_PRODUCTS.map((p, i) => `
    <div class="slide${i === 0 ? " active" : ""}" data-i="${i}">
      <img src="${p.image}" alt="${p.name}" loading="${i === 0 ? "eager" : "lazy"}" />
    </div>`).join("");

  dotsWrap.innerHTML = ESYBOX_PRODUCTS.map((_, i) =>
    `<button data-i="${i}" class="${i === 0 ? "active" : ""}" aria-label="Show slide ${i + 1}"></button>`
  ).join("");

  function renderInfo() {
    const p = ESYBOX_PRODUCTS[current];
    info.innerHTML = `
      <span class="cat-chip">EsyBox Line</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="hero-actions" style="margin:0;">
        <a href="product.html?supplier=dab&id=esybox-line&sub=${p.id}" class="btn btn-primary btn-sm">View Details</a>
        <a href="${whatsappLink(p.name, "DAB Pumps")}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5L9.2 8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
          WhatsApp
        </a>
      </div>`;
  }

  function goTo(i) {
    current = (i + ESYBOX_PRODUCTS.length) % ESYBOX_PRODUCTS.length;
    stage.querySelectorAll(".slide").forEach(s => s.classList.toggle("active", +s.dataset.i === current));
    dotsWrap.querySelectorAll("button").forEach(b => b.classList.toggle("active", +b.dataset.i === current));
    renderInfo();
  }

  dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) goTo(+btn.dataset.i);
  });

  document.getElementById("esyboxPrev")?.addEventListener("click", () => goTo(current - 1));
  document.getElementById("esyboxNext")?.addEventListener("click", () => goTo(current + 1));

  renderInfo();

  let timer = setInterval(() => goTo(current + 1), 6000);
  stage.closest(".slideshow")?.addEventListener("mouseenter", () => clearInterval(timer));
  stage.closest(".slideshow")?.addEventListener("mouseleave", () => {
    timer = setInterval(() => goTo(current + 1), 6000);
  });
}

/* ==========================================================================
   Products page — landing (DAB / Eifel / Browse All) + catalog panel
   ========================================================================== */

function initProductsPage() {
  const optionsWrap = document.getElementById("supplierOptions");
  const panel = document.getElementById("catalogPanel");
  const panelHead = document.getElementById("catalogPanelHead");
  const filterBar = document.getElementById("filterBar");
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  if (!optionsWrap || !panel || !grid) return;

  const VIEWS = {
    dab:   { label: "DAB Pumps",  products: DAB_PRODUCTS,   categories: DAB_CATEGORIES,
             source: "https://www.dabpumps.com/en_en/products/catalog", sourceLabel: "DAB Pumps official catalogue" },
    eifel: { label: "Eifel Pump", products: EIFEL_PRODUCTS, categories: EIFEL_CATEGORIES,
             source: "https://www.eifelcn.com/products", sourceLabel: "Eifel Pump official catalogue" },
    all:   { label: "All Suppliers", products: [...DAB_PRODUCTS, ...EIFEL_PRODUCTS],
             categories: [...DAB_CATEGORIES, ...EIFEL_CATEGORIES], source: null, sourceLabel: null },
  };

  document.querySelectorAll(".supplier-card").forEach(card => {
    const key = card.dataset.view;
    const count = VIEWS[key].products.length;
    const countEl = card.querySelector(".count");
    if (countEl) countEl.textContent = `${count} products`;
  });

  let activeView = null;
  let activeCat = "all";

  function renderGrid() {
    const view = VIEWS[activeView];
    const items = activeCat === "all" ? view.products : view.products.filter(p => p.cat === activeCat);
    grid.innerHTML = items.map(p => productCardHTML(p, view.categories)).join("");
    noResults.style.display = items.length ? "none" : "block";
  }

  function renderFilterBar(view) {
    const seenCats = new Set(view.products.map(p => p.cat));
    const cats = view.categories.filter(c => seenCats.has(c.id));
    filterBar.innerHTML = `<button class="filter-btn active" data-cat="all">All Products</button>` +
      cats.map(c => `<button class="filter-btn" data-cat="${c.id}">${c.label}</button>`).join("");
  }

  function renderHead(view) {
    const sourceHTML = view.source
      ? `<div class="catalog-source-tag">
           <span>Supplier: <strong>${view.label}</strong></span>
           &middot; <a href="${view.source}" target="_blank" rel="noopener">${view.sourceLabel} &rarr;</a>
         </div>`
      : `<div class="catalog-source-tag"><span>Showing products from <strong>DAB Pumps</strong> and <strong>Eifel Pump</strong></span></div>`;
    const eifelNote = activeView === "eifel"
      ? `<p style="font-size:.85rem;color:var(--gray);max-width:680px;margin:0 0 20px;">
           Every Eifel pump we supply is <strong>UL Listed</strong> — fire pumps meet UL 448 standards and are suitable for NFPA 20 fire protection systems.
           Selected models are approved by the CMC Fire Department for buildings up to 30&nbsp;m in height.
           Eifel Pump (Fuzhou) Corp. Ltd holds ISO 9001:2015 certification.
         </p>`
      : "";
    panelHead.innerHTML = `
      <span class="back-link" id="backToOptions">&larr; Back to supplier options</span>
      ${sourceHTML}
      <div class="section-head" style="text-align:left;margin:0 0 8px;max-width:680px;">
        <h2>${view.label} product catalogue</h2>
        <p>Browse <strong>${view.products.length}</strong> product${view.products.length === 1 ? "" : "s"}.
           Each listing links to the manufacturer's official product page for full technical specifications.</p>
      </div>
      ${eifelNote}`;
    document.getElementById("backToOptions").addEventListener("click", showOptions);
  }

  function showCatalog(key) {
    activeView = key;
    activeCat = "all";
    const view = VIEWS[key];
    renderHead(view);
    renderFilterBar(view);
    renderGrid();
    panel.hidden = false;
    document.querySelectorAll(".supplier-card").forEach(c => c.classList.toggle("active", c.dataset.view === key));
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    location.hash = key;
  }

  function showOptions() {
    panel.hidden = true;
    document.querySelectorAll(".supplier-card").forEach(c => c.classList.remove("active"));
    optionsWrap.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", location.pathname);
  }

  optionsWrap.addEventListener("click", (e) => {
    const card = e.target.closest(".supplier-card");
    if (card) showCatalog(card.dataset.view);
  });

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat;
    renderGrid();
  });

  const initialHash = location.hash.replace("#", "");
  if (VIEWS[initialHash]) showCatalog(initialHash);
}

/* ==========================================================================
   Product detail page — single product, or a family with sub-products
   ========================================================================== */

function subProductCardHTML(sp, highlightId) {
  const mediaInner = sp.image
    ? `<img src="${sp.image}" alt="${sp.name}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback'); this.remove();" />`
    : "";
  const fallbackClass = sp.image ? "" : " img-fallback";
  const highlightClass = sp.id === highlightId ? " highlight" : "";
  return `
    <article class="product-card${highlightClass}" id="sub-${sp.id}">
      <div class="product-media${fallbackClass}">${mediaInner}${sp.ulListed ? UL_BADGE_HTML : ""}</div>
      <h4>${sp.name}</h4>
      <p>${sp.desc}</p>
      <div class="card-foot">
        <span style="font-size:.78rem;color:var(--gray);font-weight:600;">${sp.supplier || "DAB Pumps"}</span>
        <div class="card-foot-actions">
          <a href="${whatsappLink(sp.name, sp.supplier || "DAB Pumps")}" target="_blank" rel="noopener" class="wa-icon-link" aria-label="Contact us on WhatsApp about ${sp.name}" title="Contact us on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5L9.2 8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
          </a>
          <a href="${sp.url}" target="_blank" rel="noopener">
            Official page
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </div>
    </article>`;
}

function initProductDetailPage() {
  const root = document.getElementById("productDetail");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const supplierKey = params.get("supplier");
  const id = params.get("id");
  const subId = params.get("sub");

  const SOURCES = {
    dab:   { products: DAB_PRODUCTS,   categories: DAB_CATEGORIES,   label: "DAB Pumps",
             source: "https://www.dabpumps.com/en_en/products/catalog" },
    eifel: { products: EIFEL_PRODUCTS, categories: EIFEL_CATEGORIES, label: "Eifel Pump",
             source: "https://www.eifelcn.com/products" },
  };

  const src = SOURCES[supplierKey];
  const product = src && src.products.find(p => p.id === id);

  const notFound = document.getElementById("detailNotFound");
  const found = document.getElementById("detailFound");

  if (!product) {
    notFound.hidden = false;
    found.hidden = true;
    return;
  }

  notFound.hidden = true;
  found.hidden = false;

  document.title = `${product.name} | ${src.label} | Aquarise Agencies`;

  document.getElementById("detailBreadcrumb").innerHTML =
    `<a href="products.html">Products</a> &rsaquo;
     <a href="products.html#${supplierKey}">${src.label}</a> &rsaquo;
     <span>${product.name}</span>`;

  const mediaEl = document.getElementById("detailMedia");
  if (product.image) {
    mediaEl.classList.remove("img-fallback");
    mediaEl.innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.parentElement.classList.add('img-fallback'); this.remove();" />`;
  } else {
    mediaEl.classList.add("img-fallback");
    mediaEl.innerHTML = "";
  }

  document.getElementById("detailCatChip").textContent = catLabel(src.categories, product.cat);
  const ulEl = document.getElementById("detailUlBadge");
  if (ulEl) ulEl.innerHTML = product.ulListed ? UL_BADGE_HTML : "";
  document.getElementById("detailSupplier").textContent = product.supplier;
  document.getElementById("detailName").textContent = product.name;
  document.getElementById("detailDesc").textContent = product.desc;
  document.getElementById("detailOfficialLink").href = product.url;
  document.getElementById("detailWhatsappLink").href = whatsappLink(product.name, product.supplier);

  const featuresSection = document.getElementById("esyboxFeaturesSection");
  if (featuresSection) {
    featuresSection.hidden = product.id !== "esybox-line";
    if (product.id === "esybox-line") initEsyboxFeatureBadges();
  }

  const subsSection = document.getElementById("subproductsSection");
  const subsGrid = document.getElementById("subproductsGrid");
  if (product.subProducts && product.subProducts.length) {
    subsSection.hidden = false;
    subsSection.classList.toggle("has-bg", product.id === "esybox-line");
    subsGrid.innerHTML = product.subProducts.map(sp => subProductCardHTML(sp, subId)).join("");
    if (subId) {
      const target = document.getElementById(`sub-${subId}`);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
    }
  } else {
    subsSection.hidden = true;
    subsGrid.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initEsyboxSlideshow();
  initProductsPage();
  initProductDetailPage();
  // Only auto-populate on the homepage; product.html handles this itself
  // once it knows whether the viewed product is the EsyBox Line.
  if (!document.getElementById("esyboxFeaturesSection")) {
    initEsyboxFeatureBadges();
  }
});
