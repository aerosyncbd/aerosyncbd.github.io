// AeroSync Product Data — managed via admin.html
// This file is auto-generated. Edit via admin panel only.

const AEROSYNC_PRODUCTS = [
  {
    id: "google-ai-pro-18m",
    name: "Gemini Pro",
    subtitle: "18 Months",
    category: "google-ai",
    price: 750,
    originalPrice: 1499,
    image: "products/google-ai-pro-18m.png",
    badge: "Best Value",
    badgeType: "gold",
    priority: 1,
    features: ["Gemini 1.5 Pro", "1M+ Context Window", "Deep Research AI", "Gemini Live Voice", "Advanced Coding Canvas", "Deep Think Reasoning"],
    totalSales: null, // computed dynamically
    available: true
  },
  {
    id: "google-ai-pro-1y",
    name: "Google Gemini",
    subtitle: "1 Year",
    category: "google-ai",
    price: 650,
    originalPrice: 1299,
    image: "products/google-ai-pro-1y.png",
    badge: "Popular",
    badgeType: "blue",
    priority: 2,
    features: ["Gemini 1.5 Pro", "1M+ Context Window", "Deep Research AI", "Gemini Live Voice", "Advanced Coding Canvas", "Deep Think Reasoning"],
    totalSales: null,
    available: true
  },
  {
    id: "google-ai-pro-4m",
    name: "Gemini Pro",
    subtitle: "4 Months",
    category: "google-ai",
    price: 450,
    originalPrice: 899,
    image: "products/google-ai-pro-4m.png",
    badge: "Starter",
    badgeType: "green",
    priority: 3,
    features: ["Gemini 1.5 Pro", "1M+ Context Window", "Deep Research AI", "Gemini Live Voice", "Advanced Coding Canvas", "Deep Think Reasoning"],
    totalSales: null,
    available: true
  },
  {
    id: "chatgpt-shared",
    name: "ChatGPT Plus",
    subtitle: "1 Month Share Account (HW)",
    category: "chatgpt",
    price: 290,
    originalPrice: 599,
    image: "products/chatgpt-shared.png",
    badge: "Budget Pick",
    badgeType: "green",
    priority: 4,
    features: ["GPT-5 Architecture", "Codex Programming", "DALL-E 3 Ultra", "Advanced Data Analytics", "Real-time Web Search", "Vision Multimodal"],
    totalSales: null,
    available: false
  },
  {
    id: "chatgpt-ownmail",
    name: "ChatGPT Plus",
    subtitle: "Own Mail Account",
    category: "chatgpt",
    price: 899,
    originalPrice: 1199,
    image: "products/chatgpt-ownmail.png",
    badge: "Recommended",
    badgeType: "blue",
    priority: 5,
    features: ["GPT-5 Architecture", "Codex Programming", "DALL-E 3 Ultra", "Advanced Data Analytics", "Real-time Web Search", "Vision Multimodal"],
    totalSales: null,
    available: false
  },
  {
    id: "chatgpt-personal",
    name: "ChatGPT Plus",
    subtitle: "1 Month Readymade Personal (HW)",
    category: "chatgpt",
    price: 790,
    originalPrice: 1599,
    image: "products/chatgpt-personal.png",
    badge: "Premium",
    badgeType: "gold",
    priority: 6,
    features: ["GPT-5 Architecture", "Codex Programming", "DALL-E 3 Ultra", "Advanced Data Analytics", "Real-time Web Search", "Vision Multimodal"],
    totalSales: null,
    available: false
  },
  {
    id: "capcut-purple",
    name: "CapCut Premium",
    subtitle: "Pro Access (Purple)",
    category: "capcut",
    price: 349,
    originalPrice: 699,
    image: "products/capcut-purple.png",
    badge: "Hot",
    badgeType: "red",
    priority: 7,
    features: ["Advanced AI Editing", "Pro Visual Effects", "Auto Captions Pro", "Cloud Storage 100GB", "No Watermark", "4K 60FPS Export"],
    totalSales: null,
    available: true
  },
  {
    id: "capcut-blue",
    name: "CapCut Premium",
    subtitle: "Pro Access (Blue)",
    category: "capcut",
    price: 349,
    originalPrice: 699,
    image: "products/capcut-blue.png",
    badge: "New",
    badgeType: "blue",
    priority: 8,
    features: ["Advanced AI Editing", "Pro Visual Effects", "Auto Captions Pro", "Cloud Storage 100GB", "No Watermark", "4K 60FPS Export"],
    totalSales: null,
    available: true
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    subtitle: "Premium Access",
    category: "canva",
    price: 399,
    originalPrice: 799,
    image: "products/canva-pro.png",
    badge: "Creative",
    badgeType: "purple",
    priority: 9,
    features: ["Magic Studio AI", "100M+ Premium Assets", "Brand Kit Pro", "Background Remover", "Magic Animate Remover", "Content Planner"],
    totalSales: null,
    available: true
  }
];

const AEROSYNC_CATEGORIES = [
  { id: "all", name: "All Products", icon: "🌐", priority: 0 },
  { id: "google-ai", name: "Google AI", icon: "✨", priority: 1 },
  { id: "chatgpt", name: "ChatGPT Plus", icon: "🤖", priority: 2 },
  { id: "capcut", name: "CapCut Premium", icon: "🎬", priority: 3 },
  { id: "canva", name: "Canva Pro", icon: "🎨", priority: 4 }
];

// Sales engine — deterministic random based on product seed + day offset
function getSalesData(productId, startDate = new Date('2026-06-10')) {
  const now = new Date();
  const daysPassed = Math.max(0, Math.floor((now - startDate) / (1000 * 60 * 60 * 24)));

  // Seed from product id string
  let seed = 0;
  for (let i = 0; i < productId.length; i++) seed += productId.charCodeAt(i);

  function seededRand(s) {
    let x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  }

  let total = 1;
  for (let d = 1; d <= daysPassed; d++) {
    const dailyAdd = Math.floor(seededRand(seed + d * 137) * 18) + 1; // 1–18 per day
    total += dailyAdd;
  }

  // Last sale: random minutes ago (0–120)
  const minutesAgo = Math.floor(seededRand(seed + daysPassed * 7 + 99) * 120);

  return { total, minutesAgo };
}

if (typeof module !== 'undefined') module.exports = { AEROSYNC_PRODUCTS, AEROSYNC_CATEGORIES, getSalesData };
