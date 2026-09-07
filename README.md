# AuraGrid Energy - Renewable Energy & C&I Website

A modern, high-performance web application built for a renewable energy company providing **Solar Panel Installation** and **Commercial & Industrial (C&I)** power solutions.

![AuraGrid Energy](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3-blue)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff)

---

## 🌟 Key Features

- ⚡ **Hero & Dynamic Analytics**: Real-time stats ticker displaying installed capacity (MWp), CO₂ offset, and client energy savings.
- 🏢 **About Us & Enterprise Pillars**: Company background, ESG commitments, Tier-1 EPC standards, and growth timeline.
- ⚙️ **C&I & Commercial Services**:
  - Turnkey Solar Panel Installation
  - Commercial & Industrial (C&I) Microgrids & Zero-CAPEX PPAs
  - Battery Energy Storage Systems (BESS)
  - Operations & Maintenance (O&M) + 24/7 Monitoring
  - Commercial EV Fleet Charging
  - Energy Audits & Carbon Offset Reporting
- 🧮 **Interactive Solar ROI Calculator**: Real-time tool allowing business owners and homeowners to estimate solar capacity (kWp), annual savings, 25-year financial ROI, and trees planted equivalent.
- 💼 **Case Studies**: Real-world industrial deployment breakdowns across logistics, heavy manufacturing, and commercial real estate.
- 📬 **Interactive Proposal / Contact Portal**: Custom quote request form with facility type selector and instant modal support.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/renewable-energy-website.git

# 2. Navigate into the project directory
cd renewable-energy-website

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
renewable-energy-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header & quick quote button
│   │   ├── Hero.jsx             # High-impact headline & stats ticker
│   │   ├── AboutUs.jsx          # Mission, ESG, & timeline
│   │   ├── Services.jsx         # C&I and Solar service portfolio
│   │   ├── SolarCalculator.jsx  # Interactive ROI & payback tool
│   │   ├── CaseStudies.jsx      # Industrial client success stories
│   │   ├── Contact.jsx          # Quote request form & office details
│   │   └── Footer.jsx           # Newsletter, sitemap, & certifications
│   ├── App.jsx                  # Main application container & modal logic
│   ├── main.jsx                 # Vite entrypoint
│   └── index.css                # Tailwind directives & glow utilities
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 📄 License

This project is licensed under the MIT License.
