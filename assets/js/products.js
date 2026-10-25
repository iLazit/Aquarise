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

/* Category tiles on the products page, in display order. `img` is the tile/banner photo
   (a DAB image name, or a full URL). */
const DAB_CATEGORIES = [
  { id: "electronic-booster", label: "Electronic Pressure Booster Systems", img: "esybox_line_dab_family",
    intro: "The DAB EsyBox line: compact, inverter-driven pressure boosters that keep water pressure constant in homes and buildings." },
  { id: "conventional-booster", label: "Conventional Booster Sets",
    // DAB's "Pressurisation Group" photo, cropped to the pump set (the original is mostly white space).
    img: IMG_BASE + "gruppo_pressurizzazione?crop=195,250,330,410&wid=480&fmt=jpg&bgcolor=FFFFFF",
    intro: "Factory-assembled pressurisation groups and booster pumps: NKV vertical multistage sets, KVC booster sets, self-priming JET pumps and K centrifugal pumps." },
  { id: "end-suction", label: "Standard End Suction Pumps", img: "kdn_dab_family",
    intro: "End suction centrifugal pumps for water supply, HVAC, irrigation and fire-fighting duty." },
  { id: "inline", label: "Inline Pumps", img: "klm_klp_dab_family",
    intro: "In-line pumps for heating, cooling and water circulation in plant rooms and larger buildings." },
  { id: "submersible", label: "Submersible Pumps", img: "feka_dab_family",
    intro: "Submersible drainage and wastewater pumps for basements, sumps, sewage and dewatering." },
  { id: "lifting", label: "Lifting Stations", img: "genix_dab_family",
    intro: "Packaged wastewater lifting stations for drainage below sewer level in homes and commercial buildings." },
  { id: "borewell", label: "Submersible Borewell Pumps", img: "s4_borehole_dab_family",
    intro: "Submersible pumps and motors for borewells and deep wells, for domestic, agricultural and municipal water supply." },
  { id: "close-coupled", label: "Close-coupled Pumps", img: "kc_kcv_dab_family-1",
    intro: "Compact close-coupled centrifugal and peripheral pumps for domestic and light commercial water supply." },
  { id: "pool", label: "Swimming Pool and Saltwater Pumps", img: "euroswim_dab_family",
    intro: "Self-priming filtration pumps for swimming pools, including saltwater pools, and pool cover drainage." },
  { id: "circulator", label: "Circulator Pumps", img: "evosta_dab_family",
    intro: "Energy-efficient circulators for domestic heating, cooling and hot water recirculation." },
  { id: "self-priming", label: "Self-Priming Pumps", img: "euro_dab_family",
    intro: "Self-priming pumps that lift water from wells, tanks and reservoirs, for pressurisation, gardening and irrigation." },
  { id: "tank", label: "Submersible Pumps for Tanks", img: "divertron_dab_family",
    intro: "Submersible pumps with built-in controls for water storage tanks, rainwater harvesting and wells." },
  { id: "controls", label: "Pump Control Devices", img: "pump_controller_dab_family",
    intro: "Controllers, variable frequency drives and DConnect monitoring for automatic, energy-saving pump operation." },
  { id: "fire-fighting", label: "Fire-Fighting Pumps (UNI EN 12845)", img: "1_2_nkv_en_12845_dab_image_fml_web",
    intro: "DAB fire-fighting pump units built to UNI EN 12845 for sprinkler and hydrant systems." },
];

/* ---------------- EsyBox Line — Electronic Pressure Booster Systems ----------------
   Listed individually in the catalogue and featured on the homepage slideshow. */

const ESYBOX_PRODUCTS = [
  { id: "esybox-pop", name: "EsyBox Pop", url: DAB_BASE + "esybox-line/esybox_pop",
    img: "esybox_pop_dab_family_fml",
    desc: "Small residential: maximum pressure, minimum size for homes without space for bulky equipment. The latest addition to the range, with integrated H2D connectivity." },
  { id: "esybox-mini3", name: "EsyBox Mini³", url: DAB_BASE + "esybox-line/esybox-mini-3",
    img: "esybox_mini_dab_family_fml",
    desc: "Residential: a small, energy-efficient booster packed with advanced technology, with quiet operation for home and garden pressure management." },
  { id: "esybox", name: "EsyBox", url: DAB_BASE + "esybox-line/esybox",
    img: "esybox_dab_family_fml",
    desc: "Residential & building water boosting. The pioneering electronic pressure vessel system with a fully integrated inverter, for maximum water and energy savings." },
  { id: "esybox-diver", name: "EsyBox Diver", url: DAB_BASE + "esybox-line/esybox-diver",
    img: "esybox__diver_dab_family_fml_",
    desc: "Submersible applications. The first submersible pump with a built-in inverter and remote control, for wells, tanks and outdoor use." },
  { id: "esybox-max", name: "EsyBox Max", url: DAB_BASE + "esybox-line/esybox-max",
    img: "esybox__max_dab_family_fml",
    desc: "Larger residential & commercial: a modular pressure-boosting system with integrated connectivity, expandable to multi-unit sets for buildings up to 120 apartments." },
].map(p => ({ ...p, image: IMG_BASE + p.img + IMG_PARAMS }));

/* ---------------- Conventional Booster Sets — NKV, KVC, JET, K families ----------------
   Each family lists every model from its DAB catalogue page. `path` is relative to DAB_BASE;
   models DAB lists without their own page link to the family page instead. */

const DAB_SUBPRODUCTS = {
  "nkv": [
    { name: "1 NKV EN 12845 - Elettrica", path: "nkv", img: "1_2_nkv_en_12845_dab_image_fml_web",
      desc: "Fire-fighting vertical pump unit complying with UNI EN 12845 and UNI 10799, for sprinkler and hydrant systems." },
    { name: "2 NKV 10, 15, 20 - EBox", path: "nkv/2-nkv-10-15-20---ebox", img: "2_nkv_dab_image_fml_web",
      desc: "Stainless-steel two-pump booster set with an EBox control panel, for pressurisation and heating circulation in commercial buildings." },
    { name: "2 NKV 1-20", path: "nkv/2-nkv-1-20", img: "2_nkv_dab_image_fml_web-1",
      desc: "Two-pump booster set with multi-impeller vertical pumps, for commercial pressurisation and heating circulation." },
    { name: "2 NKV 32, 45, 65, 95", path: "nkv", img: "2_nkv_dab_image_fml_web-1",
      desc: "Higher-capacity two-pump booster set with multi-impeller vertical pumps, for commercial pressurisation and heating circulation." },
    { name: "2 NKVE 10, 15, 20 - MCE-P DConnect", path: "nkv/2-nkve-10-15-20---mce-p-dconnect", img: "2_nkve_dab_image_fml_web",
      desc: "Constant-pressure two-pump set with MCE-P variable frequency drives, ready for DConnect remote control." },
    { name: "2 NKVE 10, 15, 20, 32, 45 - MCE-P", path: "nkv/2-nkve-10-15-20-32-45---mce-p", img: "2_nkve_dab_image_fml_web-1",
      desc: "Constant-pressure two-pump set with MCE-P variable frequency drives, for residential and commercial buildings." },
    { name: "2 NKVE 1-20 MCE-P", path: "nkv/2-nkve-1-20-mce-p", img: "2_nkve_dab_image_fml_web-1",
      desc: "Constant-pressure two-pump set with MCE-P variable frequency drives, for residential and commercial buildings." },
    { name: "2 NKVE 32, 45 - MCE-P DConnect", path: "nkv/2-nkve-32-45---mce-p-dconnect", img: "2_nkve_dab_image_fml_web",
      desc: "Constant-pressure two-pump set with MCE-P variable frequency drives, ready for DConnect remote control." },
    { name: "3 NKV 1-20", path: "nkv/3-nkv-1-20", img: "2_nkv_dab_image_fml_web-1",
      desc: "Three-pump booster set with multi-impeller vertical pumps, for commercial pressurisation and heating circulation." },
    { name: "3 NKVE 10, 15, 20 - MCE-P DConnect", path: "nkv/3-nkve-10-15-20---mce-p-dconnect", img: "2_nkve_dab_image_fml_web",
      desc: "Constant-pressure three-pump set with MCE-P variable frequency drives, ready for DConnect remote control." },
    { name: "3 NKVE 1-20 MCE-P", path: "nkv/3-nkve-1-20-mce-p", img: "2_nkve_dab_image_fml_web-1",
      desc: "Constant-pressure three-pump set with MCE-P variable frequency drives, for residential and commercial buildings." },
    { name: "3 NKVE 32-95 MCE-P", path: "nkv/3-nkve-32-95-mce-p", img: "2_nkve_dab_image_fml_web",
      desc: "Constant-pressure three-pump set with MCE-P variable frequency drives, for larger residential and commercial systems." },
    { name: "4 NKV 1-20", path: "nkv/4-nkv-1-20", img: "2_nkv_dab_image_fml_web-1",
      desc: "Four-pump booster set with multi-impeller vertical pumps, for commercial pressurisation and heating circulation." },
    { name: "4 NKVE 1-20 MCE-P", path: "nkv/4-nkve-1-20-mce-p", img: "2_nkve_dab_image_fml_web-1",
      desc: "Constant-pressure four-pump set with MCE-P variable frequency drives, for residential and commercial buildings." },
    { name: "NKV 1, 3, 6, 10, 15, 20 - S", path: "nkv/nkv-1-3-6-10-15-20---s", img: "nkv_1_3_6_10_15_20_s_dab_image_fml_web",
      desc: "Stainless-steel multi-impeller vertical centrifugal pumps for pressurisation, heating, agriculture and irrigation." },
    { name: "NKVE 1, 3, 6, 10, 15, 20 - S MCE-P", path: "nkv/nkve-1-3-6-10-15-20---s-mce-p", img: "nkve_1_3_6_10_15_20_s_mce_p_dab_image_fml_web",
      desc: "Stainless-steel vertical pumps with an MCE-P drive that holds constant pressure, with DConnect remote control." },
    { name: "NKVE 32, 45, 65, 95 - MCE-P", path: "nkv/nkve-32-45-65-95---mce-p", img: "nkve_32_45_65_95_mce_p_dab_image_fml_web",
      desc: "Cast-iron vertical pumps with an MCE-P drive for constant-pressure commercial pressurisation, with DConnect remote control." },
  ],
  "kvc-booster-pumps-set-with-fixed-speed": [
    { name: "2 KVC", path: "kvc-booster-pumps-set-with-fixed-speed/2-kvc", img: "kvc_dab_family",
      desc: "Two-pump vertical multi-impeller booster set for pressurisation, rainwater reuse and irrigation." },
    { name: "2 KVC Active Driver Plus", path: "kvc-booster-pumps-set-with-fixed-speed/2-kvc-active-driver-plus", img: "2_kvc_ad_plus_dab_image_fml_web",
      desc: "Two-pump booster set with Active Driver Plus variable frequency drives that match output to demand to save energy." },
    { name: "2 KVCXE MCE-P DConnect", path: "kvc-booster-pumps-set-with-fixed-speed/2-kvcxe-mce-p-dconnect", img: "2_3_kvcxe_dab_image_fml_web-1",
      desc: "Two-pump booster set with MCE-P drives and DConnect remote monitoring, for commercial buildings and agriculture." },
    { name: "3 KVC Active Driver Plus", path: "kvc-booster-pumps-set-with-fixed-speed/3-kvc-active-driver-plus", img: "2_kvc_ad_plus_dab_image_fml_web",
      desc: "Three-pump booster set with Active Driver Plus variable frequency drives, for pressurisation, gardening and irrigation." },
    { name: "3 KVCXE MCE-P DConnect", path: "kvc-booster-pumps-set-with-fixed-speed/3-kvcxe-mce-p", img: "2_3_kvcxe_dab_image_fml_web-1",
      desc: "Three-pump booster set with MCE-P drives and DConnect remote monitoring, for commercial and agricultural pressurisation." },
  ],
  "jet": [
    { name: "AquaJet", path: "jet/aquajet", img: "aquajet_dab_image_fml_web",
      desc: "Self-priming pressurisation kit with a cast iron pump body, for gardening and irrigation." },
    { name: "AquaJet Inox", path: "jet/aquajet-inox", img: "aquajet_inox_dab_image_fml_web",
      desc: "Self-priming pressurisation kit with a stainless steel pump body, for gardening and irrigation." },
    { name: "DP", path: "jet/dp", img: "dp_102_dab_image_fml_web",
      desc: "Self-priming cast iron pump that can draw well water from up to 27 m with an optional ejector." },
    { name: "Garden Com", path: "jet/garden-com", img: "garden_com_dab_image_fml_web",
      desc: "Portable self-priming garden pump with a technopolymer body." },
    { name: "Garden Inox", path: "jet/garden-inox", img: "garden_inox_dab_mage_fml_web",
      desc: "Portable self-priming garden pump with a stainless steel body." },
    { name: "Garden Jet", path: "jet/garden-jet", img: "garden_jet_dab_image_fml_web",
      desc: "Portable self-priming garden pump with a cast iron body." },
    { name: "Jet", path: "jet/jet", img: "jet_dab_image_fml_web",
      desc: "Self-priming centrifugal pump with a cast iron body, for pressurisation, gardening, and well or rainwater use." },
    { name: "Jet 151, Jet 251", path: "jet/jet-151-jet-251", img: "jet_151_dab_image_fml_web",
      desc: "Self-priming centrifugal pumps for pressurisation, gardening and irrigation." },
    { name: "Jet 200, Jet 300", path: "jet/jet-200-jet-300", img: "jet_200_dab_image_fml_web",
      desc: "Self-priming centrifugal pumps for pressurisation, gardening and irrigation." },
    { name: "Jet Com", path: "jet/jet-com", img: "jet_com_dab_image_fml_web",
      desc: "Self-priming Jet pump with a technopolymer body." },
    { name: "Jet Control-D", path: "jet/jet-control-d", img: "jet_with_control_d_dab_image_fml_web",
      desc: "Self-priming Jet pump with a Control-D electronic controller for automatic on/off and dry-running protection." },
    { name: "Jet Inox", path: "jet/jet-inox", img: "jet_inox_dab_image_fml_web",
      desc: "Self-priming Jet pump with a stainless steel body." },
    { name: "Jet Inox Control-D", path: "jet/jet-inox-control-d", img: "jet_inox_with_control_d_dab_image_fml_web",
      desc: "Stainless steel Jet pump with a Control-D controller for automatic operation and dry-running protection." },
    { name: "2 Jet Active Driver Plus", path: "jet/2-jet-active-driver-plus", img: "2_jet_2_euroinox_2_jetinox_ad_plus_dab_image_fml_web",
      desc: "Two-pump booster set with a variable frequency drive on each pump, for residential, commercial and agricultural use." },
    { name: "Jet Com SP", path: "jet/jet-com-sp", img: "jet_com_sp_euro_com_sp_dab_image_fml_web",
      desc: "Self-priming technopolymer pump for swimming pool water and hydraulic pool cleaners." },
  ],
  "k": [
    { name: "K Single Impeller", path: "k/k-single-impeller", img: "k_single_impeller_dab_image_fml_web",
      desc: "Single-impeller centrifugal pump for pressurisation, gardening and irrigation." },
    { name: "K Twin Impellers", path: "k/k-twin-impellers", img: "k_twin_impellers_35_40_m_dab_image_fml_web",
      desc: "Twin-impeller centrifugal pump for pressurisation, gardening and irrigation." },
    { name: "2 K", path: "k/2-k", img: "3_nkp_g_k_dab_image_fml_web",
      desc: "Factory-assembled booster set with two K twin-impeller pumps, expansion tanks and an EBox Plus control panel." },
    { name: "3 K", path: "k/3-k", img: "3_nkp_g_k_dab_image_fml_web",
      desc: "Factory-assembled booster set with three K twin-impeller pumps, expansion tanks and an EBox Plus control panel." },
  ],
};

const DAB_PRODUCTS = [
  ...ESYBOX_PRODUCTS.map(p => ({ ...p, slug: p.id, cat: "electronic-booster" })),

  { name: "NKV", slug: "nkv", cat: "conventional-booster", img: "nkv_dab_family",
    desc: "Vertical multistage pumps and NKV/NKVE booster sets with one to four pumps, fixed speed or MCE-P variable speed, for building pressurisation, heating and fire fighting." },
  { name: "KVC", slug: "kvc-booster-pumps-set-with-fixed-speed", cat: "conventional-booster", img: "kvc_dab_family",
    desc: "Vertical multi-impeller booster sets with two or three pumps, at fixed speed or with Active Driver Plus and MCE-P DConnect drives." },
  { name: "JET", slug: "jet", cat: "conventional-booster", alsoIn: ["self-priming"], img: "jet_dab_family",
    desc: "Self-priming jet pumps and pressurisation kits for homes, gardens and irrigation, including Control-D and Active Driver Plus versions." },
  { name: "K", slug: "k", cat: "conventional-booster", img: "k_dab_family",
    desc: "Single and twin impeller centrifugal pumps, plus factory-assembled 2 K and 3 K booster sets." },

  { name: "KDN", slug: "kdn", cat: "end-suction", img: "kdn_dab_family",
    desc: "End suction centrifugal pumps, including the KDN Oversize range, for water supply, HVAC and fire-fighting duty." },
  { name: "NKP, NKP-G", slug: "nkp-nkp-g", cat: "end-suction", img: "nkp_g_dab_family",
    desc: "End suction centrifugal pumps for water supply, irrigation and pressure boosting." },

  { name: "ALM, ALP", slug: "alm-alp", cat: "inline", img: "alm_alp_dab_family",
    desc: "In-line, fixed-speed pumps built for compact plant rooms and residential heating loops." },
  { name: "BPH, BMH, DPH, DMH", slug: "bph-bmh-dph-dmh", cat: "inline", img: "bph_bmh_dph_dmh_dab_family",
    desc: "Single and twin-head in-line pumps for heating and conditioning circuits in larger buildings." },
  { name: "CM / CP / DCM / DCP (and G variants)", slug: "cm-cm-g-cm2-cm2-g-cp-cp-g-cp2-cp2-g-dcm-dcm-g-dcm2-dcm2-g-dcp-dcp-g-dcp2-dcp2-g", cat: "inline",
    img: "CM_CM-G_CM2_CM2-G_CP_CP-G_CP2_CP2-G_DCM_DCM-G_DCM2_DCM2-G_DCP_DCP-G_DCP2_DCP2-G_dab_family",
    desc: "Fixed-speed in-line pump range covering single and twin-pump configurations for heating and conditioning." },
  { name: "CME / CPE / DCME / DCPE (and GE variants)", slug: "cme-cm-ge-cpe-cp-ge-dcme-dcm-ge-dcpe-dcp-ge", cat: "inline",
    img: "CME_CM-GE_CM2E_CM2-GE_CPE_CP-GE_CP2E_CP2-GE_dab_family%20copia",
    desc: "Electronic, variable-speed in-line pumps that trim energy use to match real system demand." },
  { name: "K-HA", slug: "k-ha", cat: "inline", img: "k_ha_dab_family",
    desc: "Fixed-speed in-line pump built for high-availability heating and cooling plant." },
  { name: "KLM, KLP", slug: "klm-klp", cat: "inline", img: "klm_klp_dab_family",
    desc: "In-line pumps for medium-to-large heating and conditioning distribution networks." },

  { name: "Drenag", slug: "drenag", cat: "submersible", img: "drenag_dab_family",
    desc: "Submersible drainage pumps for clear-to-slightly-soiled water in basements and civil works." },
  { name: "Feka", slug: "feka", cat: "submersible", img: "feka_dab_family",
    desc: "Submersible pumps for effluent and wastewater containing solids, for domestic and civil use." },
  { name: "FK", slug: "fk", cat: "submersible", img: "fk_dab_family",
    desc: "Submersible sewage pumps built to handle raw wastewater with a free-passage impeller." },
  { name: "FX", slug: "fx", cat: "submersible", img: "fx_dab_family",
    desc: "Submersible drainage pumps for construction sites, flooded areas and general dewatering." },
  { name: "Nova", slug: "nova", cat: "submersible", img: "nova_dab_family",
    desc: "Submersible drainage pumps for clean and lightly loaded water in homes and gardens." },

  { name: "FekaBox station", slug: "fekabox-station", cat: "lifting", img: "dels_dab_family",
    desc: "Compact pre-assembled lifting station for collecting and pumping domestic wastewater." },
  { name: "Fekafos, Fekabox", slug: "fekafos-fekabox", cat: "lifting", img: "fekafos_fekabox_dab_family",
    desc: "Wastewater lifting stations with submersible pumps for below-sewer-level drainage." },
  { name: "Genix stations", slug: "genix-stations", cat: "lifting", img: "genix_dab_family",
    desc: "Packaged lifting stations for residential and small commercial wastewater collection." },
  { name: "NovaBox station", slug: "novabox-station", cat: "lifting", img: "novabox_station_dab_family",
    desc: "Ready-to-install lifting station pairing Nova drainage pumps with a collection tank." },

  { name: "4-inch motors", slug: "4-inch-motors", cat: "borewell", img: "4_inch_motors_dab_family",
    desc: "Submersible motors sized for 4-inch borewells, paired with DAB submersible pump ends." },
  { name: "6 inch motors", slug: "6-inch-motors", cat: "borewell", img: "6_inch_motors_dab_family",
    desc: "Heavy-duty submersible motors for 6-inch borewells serving high-yield water supply and irrigation." },
  { name: "Micra", slug: "micra", cat: "borewell", img: "micra_dab_family",
    desc: "Compact submersible pump for small-diameter wells and domestic water supply." },
  { name: "Pulsar", slug: "pulsar", cat: "borewell", img: "pulsar_dab_family",
    desc: "Submersible borewell pumps engineered for reliable groundwater abstraction and farm water supply." },
  { name: "Rewindable borehole motor", slug: "rewindable-borehole-motor", cat: "borewell", img: "rewindable_borehole_motors_dab_family",
    desc: "Rewindable submersible motor platform for long-service-life borewell installations." },
  { name: "S4 borehole", slug: "s4-borehole", cat: "borewell", img: "s4_borehole_dab_family",
    desc: "Slim submersible pump range for narrow borewells and residential groundwater wells." },
  { name: "SMC borehole", slug: "smc-borehole", cat: "borewell", img: "smc_dab_family",
    desc: "Submersible multistage borewell pumps for domestic and agricultural water lifting." },
  { name: "SMN borehole", slug: "smn-borehole", cat: "borewell", img: "smn_dab_family",
    desc: "Submersible borewell pump series built for continuous duty in water supply schemes." },
  { name: "SS borehole", slug: "ss-borehole", cat: "borewell", img: "ss_borehole_dab_family",
    desc: "Stainless-steel submersible borewell pumps for corrosion resistance in aggressive groundwater." },
  { name: "VA", slug: "va", cat: "borewell", img: "va_dab_family",
    desc: "Submersible pump range for vertical installation in wells and borewells." },

  { name: "KC", slug: "kc", cat: "close-coupled", img: "kc_kcv_dab_family-1",
    desc: "Close-coupled centrifugal pumps for domestic and light commercial water supply." },
  { name: "KI (Single / Twin Impeller)", slug: "ki", cat: "close-coupled", img: "ki_dab_family",
    desc: "Close-coupled centrifugal pumps with single or twin impellers, for booster and circulation duties." },
  { name: "KPF, KPS", slug: "kpf-kps", cat: "close-coupled", img: "kpf_dab_family",
    desc: "Close-coupled peripheral pumps for low-flow, high-head domestic water supply." },

  { name: "EPro", slug: "epro", cat: "pool", img: "epro_dab_family",
    desc: "Self-priming filtration pumps for residential and light commercial swimming pools." },
  { name: "ESwim", slug: "eswim", cat: "pool", img: "eswim_dab_family",
    desc: "Self-priming pool pumps designed for reliable filtration circulation in private pools." },
  { name: "Eurocover", slug: "eurocover", cat: "pool", img: "eurocover_dab_family",
    desc: "Dedicated pump for pool-cover water removal, keeping automatic covers running freely." },
  { name: "EuroPro High Flow", slug: "europro", cat: "pool", img: "europro_hf_dab_family",
    desc: "Robust self-priming centrifugal pumps for pool filtration, including saltwater pools." },
  { name: "EuroSwim", slug: "euroswim", cat: "pool", img: "euroswim_dab_family",
    desc: "Self-priming swimming pool filtration pumps for consistent water clarity." },

  { name: "A, B, D", slug: "a-b-d", cat: "circulator", img: "a_b_d_dab_family",
    desc: "Fixed-speed circulator pumps for domestic heating and hot water recirculation systems." },
  { name: "Evoplus circulator", slug: "evoplus-circulator", cat: "circulator", img: "evoplus_dab_family",
    desc: "High-efficiency electronic circulator with automatic self-adapting function for heating systems." },
  { name: "Evosta circulator", slug: "evosta-circulator", cat: "circulator", img: "evosta_dab_family",
    desc: "Compact, energy-saving electronic circulator designed as a drop-in upgrade for older fixed-speed units." },

  { name: "Euro", slug: "euro", cat: "self-priming", img: "euro_dab_family",
    desc: "Horizontal multistage pumps for water supply, irrigation and pressure boosting." },

  { name: "Divertron", slug: "divertron", cat: "tank", img: "divertron_dab_family",
    desc: "Submersible pump with integrated electronics that starts and stops automatically with water demand, for tanks and wells." },
  { name: "DTron", slug: "dtron", cat: "tank", img: "dtron_dab_family",
    desc: "Submersible pump combining pump, controller and sensor in one unit, for storage tanks and rainwater harvesting." },
  { name: "Divertek", slug: "divertek", cat: "tank", img: "divertek_dab_family",
    desc: "Submersible multistage pumps for tanks, wells and pressure-boosting applications." },

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

  { name: "1 NKV EN 12845 - Elettrica", slug: "nkv-en-12845", url: DAB_BASE + "nkv", cat: "fire-fighting", img: "1_2_nkv_en_12845_dab_image_fml_web",
    desc: "Electric fire-fighting vertical pump unit complying with UNI EN 12845 and UNI 10799, for sprinkler and hydrant systems." },
].map(p => ({
  ...p,
  id: p.slug,
  supplier: "DAB Pumps",
  supplierKey: "dab",
  url: p.url || DAB_BASE + p.slug,
  image: p.img ? IMG_BASE + p.img + IMG_PARAMS : null,
  subProducts: (DAB_SUBPRODUCTS[p.slug] || []).map(sp => ({
    ...sp,
    id: sp.path.split("/").pop() + "-" + sp.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase(),
    url: DAB_BASE + sp.path,
    image: IMG_BASE + sp.img + IMG_PARAMS,
    supplier: "DAB Pumps",
  })),
}));

/* ---------------- Eifel Pump ----------------
   One category: the UL Listed EHF and ESF fire pumps, plus FDL jockey pumps
   (supplied with the fire pump sets, but not UL Listed themselves). */

const EIFEL_BASE = "https://www.eifelcn.com/category/";
const EIFEL_PRODUCTS_URL = "https://www.eifelcn.com/products";

const EIFEL_CATEGORIES = [
  { id: "fire-ul", label: "UL Listed Fire Pumps", img: "assets/images/eifel-src/ehf2.png", ul: true,
    intro: "UL Listed EHF end suction and ESF split-case fire pumps built to UL 448 for NFPA 20 systems, with FDL jockey pumps for pressure maintenance." },
];

const EIFEL_PRODUCT_BASE = "https://www.eifelcn.com/product/";
const EIFEL_IMG = "assets/images/eifel-src/";

const EIFEL_SUBPRODUCTS = {
  "ehf-series": [
    { id: "ehfc-baseplate", name: "EHFC with Integrated Baseplate", img: "ehf1.jpg",
      url: EIFEL_PRODUCT_BASE + "eifel-horizontal-end-suction-centrifugal-fire-pump-with-baseplate",
      desc: "UL 448 compliant end suction fire pump with an integrated baseplate and optimised hydraulic design." },
    { id: "ehf-cooling", name: "EHF NFPA 20 Cooling System Pump", img: "ehf2.png",
      url: EIFEL_PRODUCT_BASE + "nfpa20-end-suction-fire-pump-for-cooling-system",
      desc: "UL 448 compliant fire pump with optimised hydraulics for high efficiency and energy saving." },
    { id: "ehf-highrise", name: "EHF Heavy-Duty High-Rise Pump", img: "ehf3.jpg",
      url: EIFEL_PRODUCT_BASE + "ul-listed-heavy-duty-end-suction-fire-pump-for-high-rise-buildings",
      desc: "Heavy-duty UL Listed end suction fire pump built for high-rise buildings and industrial complexes." },
  ],
  "esf-series": [
    { id: "esf-diesel", name: "ESF Diesel Engine Variant", img: "esf1.png",
      url: EIFEL_PRODUCT_BASE + "eifel-ul-fm-diesel-engine-fire-pump-double-suction-split-casing-pump-for-fire-protection-system",
      desc: "UL/FM diesel engine driven double-suction split-case fire pump for fire protection systems." },
    { id: "esf-electric", name: "ESF Electric High-Pressure Variant", img: "esf2.png",
      url: EIFEL_PRODUCT_BASE + "horizontal-double-suction-split-for-fire-pump-electric-high-pressure-industrial-ul-firefighting-water-pump",
      desc: "UL 448 compliant electric-driven double-suction split-case fire pump for high-pressure firefighting duty." },
    { id: "esf-ductile", name: "ESF Ductile Iron Casing Variant", img: "esf3.jpg",
      url: EIFEL_PRODUCT_BASE + "eifel-ul-listed-horizontal-double-suction-split-case-fire-pump-with-ductile-iron-casing",
      desc: "UL Listed double-suction split-case fire pump with a ductile iron casing for durability." },
  ],
  "fdl-series": [
    { id: "fdl-multistage", name: "FDL / FDLF / FDLL Vertical Multistage Pump", img: "fdl1.jpg",
      url: EIFEL_PRODUCT_BASE + "mechanical-seal-vertical-multistage-centrifugal-pump",
      desc: "Non-self-priming vertical multistage centrifugal pumps with standard motors, used as jockey pumps alongside fire pump sets." },
  ],
};

const EIFEL_PRODUCTS = [
  { id: "ehf-series", name: "EHF Series", url: EIFEL_BASE + "ehf-series", cat: "fire-ul", img: "eifel-src/ehf2.png",
    desc: "UL Listed heavy-duty horizontal end suction fire pumps, built with optimised hydraulics and ductile iron casings for high-rise buildings and industrial complexes." },
  { id: "esf-series", name: "ESF Series", url: EIFEL_BASE + "esf-series", cat: "fire-ul", img: "eifel-src/esf2.png",
    desc: "UL Listed horizontal double-suction split-case fire pumps, designed to process high-flow emergency volumes with stable operation and low vibration." },
  { id: "fdl-series", name: "FDL Series (Jockey Pumps)", url: EIFEL_BASE + "fdl-series", cat: "fire-ul", ulListed: false, img: "eifel-src/fdl1.jpg",
    desc: "Vertical multistage jockey pumps that maintain pressure in sprinkler mains alongside the UL Listed fire pumps. FDL pumps are not UL Listed." },
].map(p => ({
  ...p,
  supplier: "Eifel Pump",
  supplierKey: "eifel",
  ulListed: p.ulListed !== false,
  image: p.img ? "assets/images/" + p.img : null,
  subProducts: (EIFEL_SUBPRODUCTS[p.id] || []).map(sp => ({
    ...sp,
    image: EIFEL_IMG + sp.img,
    supplier: "Eifel Pump",
    ulListed: p.ulListed !== false,
  })),
}));

/* ---------------- Shared rendering helpers ---------------- */

const UL_BADGE_HTML = `<span class="ul-badge" title="UL Listed"><img src="assets/images/ul-listed.png" alt="UL Listed" /></span>`;

function catLabel(categories, id) {
  const c = categories.find(x => x.id === id);
  return c ? c.label : id;
}

function detailUrl(p) {
  return `product.html?supplier=${p.supplierKey}&id=${encodeURIComponent(p.id)}`;
}

function productCardHTML(p, categories, showChip = true) {
  const mediaInner = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback'); this.remove();" />`
    : "";
  const fallbackClass = p.image ? "" : " img-fallback";
  return `
    <article class="product-card">
      <a class="product-card-link" href="${detailUrl(p)}">
        <div class="product-media${fallbackClass}">${mediaInner}${p.ulListed ? UL_BADGE_HTML : ""}</div>
        ${showChip ? `<span class="cat-chip">${catLabel(categories, p.cat)}</span>` : ""}
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </a>
      <div class="card-foot">
        <span style="font-size:.78rem;color:var(--gray);font-weight:600;">${p.supplier}</span>
        <div class="card-foot-actions">
          <a href="${whatsappLink(p.name, p.supplier)}" target="_blank" rel="noopener" class="wa-icon-link" aria-label="Contact us on WhatsApp about ${p.name}" title="Contact us on WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5L9.2 8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
          </a>
          ${p.cat === "electronic-booster"
            ? `<a href="${p.url}" target="_blank" rel="noopener">Discover more`
            : `<a href="${detailUrl(p)}">View Details`}
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
  { img: "assets/images/feature-monitoring.png", alt: "Remote Monitoring via web portal and H2D App" },
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
      <span class="cat-chip">Electronic Pressure Booster Systems</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="hero-actions" style="margin:0;">
        <a href="product.html?supplier=dab&id=${p.id}" class="btn btn-primary btn-sm">View Details</a>
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
   Products page — supplier cards (DAB / Eifel / Browse All) + catalog panel.
   The panel opens on category tiles; "Browse all products" shows the flat list.
   Hash format: #<view>, #<view>/<category> or #<view>/all
   ========================================================================== */

function categoryImage(c) {
  if (!c.img) return null;
  return /^(https?:|assets\/)/.test(c.img) ? c.img : IMG_BASE + c.img + IMG_PARAMS;
}

function inCategory(p, catId) {
  return p.cat === catId || (p.alsoIn || []).includes(catId);
}

function categoryTileHTML(c, count) {
  const img = categoryImage(c);
  return `
    <button type="button" class="category-tile" data-cat="${c.id}">
      <span class="category-tile-media${img ? "" : " img-fallback"}">
        ${img ? `<img src="${img}" alt="${c.label}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback'); this.remove();" />` : ""}
        ${c.ul ? UL_BADGE_HTML : ""}
      </span>
      <span class="category-tile-body">
        <span class="category-tile-name">${c.label}</span>
        <span class="category-tile-count">${count} product${count === 1 ? "" : "s"} &rarr;</span>
      </span>
    </button>`;
}

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
    const view = VIEWS[card.dataset.view];
    const countEl = card.querySelector(".count");
    const n = usedCategories(view).length;
    if (countEl) countEl.textContent = `${n} categor${n === 1 ? "y" : "ies"} · ${view.products.length} products`;
  });

  let activeView = null;
  let mode = "categories";   // "categories" | "all"
  let activeCat = null;      // category id, or null for the tile overview / every product

  function usedCategories(view) {
    return view.categories.filter(c => view.products.some(p => inCategory(p, c.id)));
  }

  function setHash() {
    const suffix = activeCat ? `/${activeCat}` : mode === "all" ? "/all" : "";
    history.replaceState(null, "", `${location.pathname}#${activeView}${suffix}`);
  }

  function renderBanner(view) {
    let banner = document.getElementById("categoryBanner");
    const cat = activeCat && view.categories.find(c => c.id === activeCat);
    if (!cat) {
      if (banner) banner.remove();
      return;
    }
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "categoryBanner";
      banner.className = "category-banner";
      grid.parentNode.insertBefore(banner, grid);
    }
    const img = categoryImage(cat);
    banner.innerHTML = `
      ${img ? `<div class="category-banner-media"><img src="${img}" alt="${cat.label}" loading="lazy" />${cat.ul ? UL_BADGE_HTML : ""}</div>` : ""}
      <div>
        <h3>${cat.label}</h3>
        <p>${cat.intro || ""}</p>
      </div>`;
  }

  function renderModeToggle() {
    panelHead.querySelectorAll(".view-toggle button").forEach(b =>
      b.classList.toggle("active", b.dataset.mode === mode));
  }

  function render() {
    const view = VIEWS[activeView];
    const cats = usedCategories(view);
    renderModeToggle();
    renderBanner(view);

    if (mode === "categories" && !activeCat) {
      filterBar.hidden = true;
      filterBar.innerHTML = "";
      grid.className = "category-grid";
      grid.innerHTML = cats.map(c => categoryTileHTML(c, view.products.filter(p => inCategory(p, c.id)).length)).join("");
      noResults.style.display = "none";
      return;
    }

    filterBar.hidden = false;
    if (mode === "categories") {
      filterBar.innerHTML = `<button type="button" class="filter-btn" data-cat="">&larr; All categories</button>`;
    } else {
      filterBar.innerHTML = `<button type="button" class="filter-btn${activeCat ? "" : " active"}" data-cat="">All Products</button>` +
        cats.map(c => `<button type="button" class="filter-btn${c.id === activeCat ? " active" : ""}" data-cat="${c.id}">${c.label}</button>`).join("");
    }

    const items = activeCat ? view.products.filter(p => inCategory(p, activeCat)) : view.products;
    grid.className = "product-grid";
    grid.innerHTML = items.map(p => productCardHTML(p, view.categories, mode === "all")).join("");
    noResults.style.display = items.length ? "none" : "block";
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
           Eifel EHF and ESF fire pumps are <strong>UL Listed</strong>, meet UL 448 standards and are suitable for NFPA 20 fire protection systems. FDL jockey pumps are not UL Listed.
           Selected models are approved by the CMC Fire Department for buildings up to 30&nbsp;m in height.
           Eifel Pump (Fuzhou) Corp. Ltd holds ISO 9001:2015 certification.
         </p>`
      : "";
    const catCount = usedCategories(view).length;
    panelHead.innerHTML = `
      <span class="back-link" id="backToOptions">&larr; Back to supplier options</span>
      ${sourceHTML}
      <div class="section-head" style="text-align:left;margin:0 0 8px;max-width:680px;">
        <h2>${view.label} product catalogue</h2>
        <p>Browse <strong>${catCount}</strong> categor${catCount === 1 ? "y" : "ies"} and <strong>${view.products.length}</strong> product${view.products.length === 1 ? "" : "s"}.
           Each listing links to the manufacturer's official product page for full technical specifications.</p>
      </div>
      ${eifelNote}
      <div class="view-toggle" role="group" aria-label="Browse mode">
        <button type="button" data-mode="categories">Browse by category</button>
        <button type="button" data-mode="all">Browse all products</button>
      </div>`;
    document.getElementById("backToOptions").addEventListener("click", showOptions);
    panelHead.querySelector(".view-toggle").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-mode]");
      if (!btn) return;
      mode = btn.dataset.mode;
      activeCat = null;
      render();
      setHash();
    });
  }

  function showCatalog(key, opts = {}) {
    activeView = key;
    mode = opts.mode || "categories";
    activeCat = opts.cat && VIEWS[key].categories.some(c => c.id === opts.cat) ? opts.cat : null;
    if (activeCat && !opts.mode) mode = "categories";
    renderHead(VIEWS[key]);
    render();
    panel.hidden = false;
    document.querySelectorAll(".supplier-card").forEach(c => c.classList.toggle("active", c.dataset.view === key));
    if (opts.scroll !== false) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
      setHash();
    }
  }

  function showOptions() {
    panel.hidden = true;
    document.querySelectorAll(".supplier-card").forEach(c => c.classList.remove("active"));
    optionsWrap.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", location.pathname);
  }

  function openCategory(catId) {
    activeCat = catId || null;
    render();
    setHash();
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  optionsWrap.addEventListener("click", (e) => {
    const card = e.target.closest(".supplier-card");
    if (card) showCatalog(card.dataset.view);
  });

  grid.addEventListener("click", (e) => {
    const tile = e.target.closest(".category-tile");
    if (tile) openCategory(tile.dataset.cat);
  });

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    if (mode === "categories") openCategory(null);
    else {
      activeCat = btn.dataset.cat || null;
      render();
      setHash();
    }
  });

  // Open the category overview for every supplier by default; #view[/category|/all] deep-links.
  const [hashView, hashCat] = decodeURIComponent(location.hash.replace("#", "")).split("/");
  if (VIEWS[hashView]) {
    showCatalog(hashView, hashCat === "all" ? { mode: "all" } : { cat: hashCat });
  } else {
    showCatalog("all", { scroll: false });
  }
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

/* ---------------- Per-product SEO (title, description, canonical, social tags, schema) ---------------- */

const SITE_URL = "https://www.aquarise.lk";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function absoluteUrl(path) {
  return /^https?:\/\//.test(path) ? path : `${SITE_URL}/${path.replace(/^\//, "")}`;
}

function applyProductSeo(product, supplierLabel, supplierKey) {
  const url = `${SITE_URL}/${detailUrl({ ...product, supplierKey })}`;
  const desc = `${product.name} from ${supplierLabel}, available in Sri Lanka from Aquarise Agencies. ${product.desc}`
    .replace(/\s+/g, " ").slice(0, 300);
  const image = product.image ? absoluteUrl(product.image) : `${SITE_URL}/assets/images/og-image.jpg`;

  setMeta("name", "description", desc);
  setMeta("property", "og:type", "product");
  setMeta("property", "og:title", document.title);
  setMeta("property", "og:description", desc);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);
  setMeta("property", "og:image:alt", product.name);
  setMeta("name", "twitter:title", document.title);
  setMeta("name", "twitter:description", desc);
  setMeta("name", "twitter:image", image);
  // The 1200x630 size only applies to the default share image.
  if (product.image) {
    document.head.querySelectorAll('meta[property="og:image:width"], meta[property="og:image:height"]').forEach(m => m.remove());
  }

  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = url;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        description: product.desc,
        image: image,
        url: url,
        brand: { "@type": "Brand", name: supplierLabel },
        category: catLabel(supplierKey === "eifel" ? EIFEL_CATEGORIES : DAB_CATEGORIES, product.cat),
        manufacturer: { "@type": "Organization", name: supplierKey === "eifel" ? "Eifel Pump (Fuzhou) Corp. Ltd" : "DAB Pumps S.p.A.", url: product.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products.html` },
          { "@type": "ListItem", position: 3, name: supplierLabel, item: `${SITE_URL}/products.html#${supplierKey}` },
          { "@type": "ListItem", position: 4, name: product.name, item: url },
        ],
      },
    ],
  };
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify(schema);
  document.head.appendChild(ld);
}

function initProductDetailPage() {
  const root = document.getElementById("productDetail");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const supplierKey = params.get("supplier");
  const subId = params.get("sub");
  // Old EsyBox Line family links (id=esybox-line&sub=<model>) now point at the individual model.
  const id = params.get("id") === "esybox-line" ? (subId || "esybox") : params.get("id");

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
    setMeta("name", "robots", "noindex, follow");
    return;
  }

  notFound.hidden = true;
  found.hidden = false;

  document.title = `${product.name} | ${src.label} | Aquarise Agencies Sri Lanka`;
  applyProductSeo(product, src.label, supplierKey);

  document.getElementById("detailBreadcrumb").innerHTML =
    `<a href="products.html">Products</a> &rsaquo;
     <a href="products.html#${supplierKey}/${product.cat}">${catLabel(src.categories, product.cat)}</a> &rsaquo;
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
  const isEsybox = product.cat === "electronic-booster";
  const officialLink = document.getElementById("detailOfficialLink");
  officialLink.href = product.url;
  if (isEsybox) officialLink.innerHTML = "Discover more on DAB &nearr;";
  document.getElementById("detailWhatsappLink").href = whatsappLink(product.name, product.supplier);

  const featuresSection = document.getElementById("esyboxFeaturesSection");
  if (featuresSection) {
    featuresSection.hidden = !isEsybox;
    if (isEsybox) initEsyboxFeatureBadges();
  }

  const subsSection = document.getElementById("subproductsSection");
  const subsGrid = document.getElementById("subproductsGrid");
  if (product.subProducts && product.subProducts.length) {
    subsSection.hidden = false;
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
