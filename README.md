# NEXUS — DIGITAL TOOLS
### Personal Browser Extension Portfolio
**Creator:** DHEERAJ REDDY  
**Brand Philosophy:** *"The internet, a little more useful."*

---

## ⚡ Overview

**NEXUS** is a high-performance, dark-futuristic portfolio engineered to showcase the browser extensions and digital tools created by **Dheeraj Reddy**. Built with React, Vite, and custom SVG artwork, it embodies a refined obsidian aesthetic with electric lime and emerald lighting accents.

### Verified Chrome Extensions Featured:
1. **NewTab** (`gdgppdacjgonfmegeddkngiamknpjajp`) — Futuristic immersive new tab featuring an Arc Reactor HUD, customizable bookmarks, system telemetry, and network monitoring.
2. **Student Dashboard** (`mepoocgdbmabfnchijljhcolidnjmeah`) — Academic productivity dashboard for managing timetables, attendance, courses, tasks, reminders, and academic progress.
3. **Aether — Animated QR Generator** (`makpdmolpagflkfaejanlgabacdfcekh`) — Futuristic dark-premium animated QR code generator featuring custom themes and cinematic motion.
4. **Shortcut** (`pknekpeagcihieofbpdijcipokhcceho`) — Quick-access companion extension for university students using the ERP portal for attendance, timetables, and marks.

---

## 🚀 Key Features

- **Geometric Visual Identity:** Custom vector brand mark and original SVG vector artwork for every extension.
- **Interactive Constellation Hero:** Visual orbital graphic with tool nodes that reveal interactive tooltips and navigate directly to extensions.
- **The Toolkit (Extension Catalog):** Filterable, searchable grid with live keyword search, category filters (Productivity, Education, Utilities), status badges, and verified capabilities.
- **Signature Feature: NEXUS Tool Explorer:** Hands-on interactive testbed simulating live telemetry, attendance monitoring, real-time QR customization, and ERP shortcut triggers.
- **Featured Product Showcase:** Deep spotlight on *Student Dashboard* with an illustrative interface composition.
- **Accessible Detail Experience:** Fully accessible modal dialog with keyboard navigation (Esc to close), focus trap, and verified Chrome Web Store links.
- **Beyond Extensions (Projects Section):** Data-driven roadmap ready to accept future software projects in `src/data/projects.js`.
- **Direct Contact Channels:** Direct email dispatch, tactile clipboard copy, and social profile links without fake forms.
- **Deployment-Ready:** Configured with relative paths (`base: './'`) for seamless deployment to GitHub Pages, Vercel, or Netlify.

---

## 🛠️ Project Structure

```
├── public/
│   └── nexus-og.svg             # Social share & OpenGraph banner
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx     # Creator introduction & philosophy
│   │   ├── ContactSection.jsx   # Direct communication channels
│   │   ├── ExtensionCard.jsx    # Individual extension card
│   │   ├── ExtensionIcon.jsx    # Custom SVG artwork & brand marks
│   │   ├── ExtensionModal.jsx   # Accessible detail modal
│   │   ├── ExtensionSection.jsx # Toolkit catalog with search & filters
│   │   ├── FeaturedExtension.jsx# Student Dashboard spotlight
│   │   ├── Footer.jsx           # Global footer with dynamic year
│   │   ├── Hero.jsx             # Constellation hero & orbital nodes
│   │   ├── Navbar.jsx           # Sticky header with active scroll spy
│   │   ├── ProjectsSection.jsx  # Future software projects roadmap
│   │   └── ToolExplorer.jsx     # Signature interactive preview stage
│   ├── data/
│   │   ├── extensions.js        # Verified extension registry
│   │   └── projects.js          # Reusable projects & creator info
│   ├── styles/
│   │   └── global.css           # Design system tokens & animations
│   ├── App.jsx                  # Main application composition
│   └── main.jsx                 # React root entry point
├── dist/                        # Production build output
├── index.html                   # HTML template with SEO & fonts
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite configuration (base: './')
└── README.md
```

---

## 💻 Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 🌐 Deployment to GitHub Pages

The project is pre-configured with relative asset paths (`base: './'` in `vite.config.js`), making deployment to GitHub Pages straightforward:

### Method A: Deploy via GitHub Actions (Recommended)
1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, choose **GitHub Actions**.
4. GitHub will automatically detect Vite/Static HTML and deploy the `dist/` directory.

### Method B: Deploy via `gh-pages` branch
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

---

## 🎨 Customizing Content

- **Update Extension Data:** Edit `src/data/extensions.js` to modify descriptions, features, or store links.
- **Add Future Projects:** Edit `src/data/projects.js` and add project objects to `PROJECTS_DATA`.
- **Update Contact Info:** Update `CREATOR_INFO.socialLinks` in `src/data/projects.js`.
