// ─────────────────────────────────────────────────────────────
//  data/portfolio.js  ·  Data analytics case studies & projects
//  Add new entries at the TOP (most recent first)
// ─────────────────────────────────────────────────────────────

window.DATA_PORTFOLIO = [
  {
    label: "Curriculum Analysis",
    title: "Do university math courses deliver what they promise?",
    description: "Gap analysis of 74 courses and 469 learning outcomes at PUC-Chile. Coded against Bloom's taxonomy and modelling cycle phases to surface the distance between graduate profiles and actual curricular delivery.",
    url: "https://carlosrojasbruna.github.io/curriculum-gap-analysis/",
    stats: [
      { value: "74",   label: "courses" },
      { value: "469",  label: "ILOs coded" },
      { value: "0",    label: "\"validate\" uses" }
    ],
    tools: ["Python", "Content Coding", "Bloom's Taxonomy", "Data Visualisation"]
  },
  {
    label: "STEM Professionalism",
    title: "Diagnosing the Professional Readiness Gap in STEM Curricula",
    description: "86.9% of hiring managers rank professionalism as fundamental — yet only 44.2% consider STEM graduates adequately prepared. Audit instrument applied to all 74 mathematics courses across six Human-Centred Professionalism dimensions.",
    url: "https://carlosrojasbruna.github.io/hcp-gap/",
    stats: [
      { value: "2.1%",   label: "HCP index E2" },
      { value: "42.7pp", label: "readiness gap" },
      { value: "6",      label: "dimensions" }
    ],
    tools: ["Google Data Analytics Cert.", "Content Coding", "Custom Index Design", "Chart.js"]
  }
  // Add new case studies here:
  // {
  //   label: "...",
  //   title: "...",
  //   description: "...",
  //   url: "https://...",
  //   stats: [],
  //   tools: []
  // }
];
