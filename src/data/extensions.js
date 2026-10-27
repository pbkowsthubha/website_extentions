/**
 * NEXUS — Extension Data Registry
 * Creator: DHEERAJ REDDY
 * 
 * Central verified registry for all Chrome extensions published by Dheeraj Reddy.
 * All store links match official Chrome Web Store listings.
 */

export const EXTENSIONS_DATA = [
  {
    id: "ext-1",
    index: "01",
    slug: "newtab",
    name: "NewTab",
    subtitle: "Arc Reactor HUD & Telemetry Interface",
    category: "Productivity",
    tagline: "Futuristic immersive new tab with Arc Reactor telemetry and bookmarks.",
    description: "A futuristic immersive new tab extension featuring an Arc Reactor interface, customizable bookmarks, system telemetry, network monitoring, and a cinematic animated HUD.",
    features: [
      "Arc Reactor core animated telemetry display",
      "Network status monitor & latency indicator",
      "Organized customizable bookmark hub & quick links",
      "Live time, date, and futuristic digital chronometer",
      "Cinematic sci-fi HUD theme with minimal footprint"
    ],
    status: "Active on Chrome Web Store",
    version: "1.0.1",
    storeUrl: "https://chromewebstore.google.com/detail/newtab/gdgppdacjgonfmegeddkngiamknpjajp?utm_source=item-share-cb",
    accentColor: "#36D98A",
    highlightColor: "#B7FF72",
    badge: "Futuristic HUD",
    techStack: ["Chrome Extension Manifest V3", "Canvas Animations", "Telemetry APIs"],
    iconType: "arc-reactor"
  },
  {
    id: "ext-2",
    index: "02",
    slug: "student-dashboard",
    name: "Student Dashboard",
    subtitle: "Complete Academic Workflow & ERP Sync",
    category: "Education",
    tagline: "Manage timetables, attendance, courses, tasks, and academic progress in one unified view.",
    description: "A student dashboard for managing timetables, attendance, courses, tasks, reminders, and academic progress.",
    features: [
      "Dynamic timetable planner with daily & weekly views",
      "Real-time attendance tracking & target calculation",
      "Course registry with syllabus & subject progress",
      "Prioritized assignment tasks & reminder engine",
      "Fast academic progress overview & CGPA telemetry"
    ],
    status: "Active on Chrome Web Store",
    version: "1.0.0",
    storeUrl: "https://chromewebstore.google.com/detail/student-dashboard/mepoocgdbmabfnchijljhcolidnjmeah?utm_source=item-share-cb",
    accentColor: "#B7FF72",
    highlightColor: "#36D98A",
    badge: "Featured Product",
    techStack: ["Chrome Extension Manifest V3", "Local Storage", "Academic UI Matrix"],
    iconType: "dashboard"
  },
  {
    id: "ext-3",
    index: "03",
    slug: "aether",
    name: "Aether — Animated QR Generator",
    subtitle: "Cinematic Motion QR Code Creation",
    category: "Utilities",
    tagline: "Generate futuristic dark-premium animated QR codes with custom themes.",
    description: "A futuristic dark-premium animated QR code generator featuring custom themes, high-contrast matrix patterns, and cinematic motion.",
    features: [
      "Dynamic animated matrix pulse QR rendering",
      "Dark-premium aesthetic presets & colorways",
      "High-contrast scanner compatibility with zero lag",
      "Real-time text/URL generation with preview mode",
      "Export capabilities for digital presentations & cards"
    ],
    status: "Active on Chrome Web Store",
    version: "1.0.0",
    storeUrl: "https://chromewebstore.google.com/detail/aether-%E2%80%94-animated-qr-gene/makpdmolpagflkfaejanlgabacdfcekh?utm_source=item-share-cb",
    accentColor: "#36D98A",
    highlightColor: "#B7FF72",
    badge: "Creative Utility",
    techStack: ["Chrome Extension Manifest V3", "SVG Matrix Shaders", "QR Algorithm"],
    iconType: "qr-motion"
  },
  {
    id: "ext-4",
    index: "04",
    slug: "shortcut",
    name: "Shortcut",
    subtitle: "Fast ERP Companion & Utility Bar",
    category: "Productivity",
    tagline: "Instant navigation for student ERP portal: attendance, timetables, and marks.",
    description: "A quick-access companion extension for university students using the ERP portal for attendance, timetables, marks, and seating arrangements.",
    features: [
      "One-click ERP portal shortcuts to critical sections",
      "Quick attendance check without multiple login hops",
      "Instant exam seating and venue arrangement finder",
      "Direct marks and internal evaluation viewer",
      "Lightweight floating overlay that respects browsing"
    ],
    status: "Active on Chrome Web Store",
    version: "1.0.0",
    storeUrl: "https://chromewebstore.google.com/detail/shortcut/pknekpeagcihieofbpdijcipokhcceho?utm_source=item-share-cb",
    accentColor: "#B7FF72",
    highlightColor: "#36D98A",
    badge: "Quick Access",
    techStack: ["Chrome Extension Manifest V3", "Content Scripts", "Portal Hooks"],
    iconType: "shortcut-bolt"
  }
];

export const CATEGORIES = ["All", "Productivity", "Education", "Utilities"];
