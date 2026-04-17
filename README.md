<div align="center">

# 🚀 Bharat Dixit — Developer Portfolio

**An immersive 3D portfolio website with scroll-driven animations, floating geometric shapes, and a futuristic glassmorphism UI.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-00f5ff?style=for-the-badge&logoColor=black)](https://my-portfoliois.netlify.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| **3D Space Background** | Floating wireframe shapes, starfield particles, and a rotating globe powered by React Three Fiber |
| **Scroll-Driven Camera** | Camera moves through depth layers as you scroll, creating an immersive space travel effect |
| **Mouse Parallax** | 3D objects and camera react to mouse movement in real time |
| **Glassmorphism UI** | Frosted glass cards with subtle borders and backdrop blur throughout |
| **3D Tilt Cards** | Project cards rotate on hover based on cursor position using CSS perspective transforms |
| **Typing Animation** | Hero subtitle cycles through roles with a typewriter effect |
| **Animated Skill Bars** | Progress bars animate into view with scroll-triggered transitions |
| **Cursor Glow Trail** | Custom neon glow that follows your cursor with smooth interpolation |
| **Scroll Progress Bar** | Gradient indicator at the top showing page scroll position |
| **Scroll-Spy Navbar** | Active section auto-highlights as you scroll through the page |
| **Lazy Loading** | Heavy sections loaded on demand for faster initial page load |
| **Fully Responsive** | Optimized layout for desktop, tablet, and mobile viewports |

---

## 🛠️ Tech Stack

```
Frontend       →  React 19 · Tailwind CSS 4 · Framer Motion
3D Engine      →  Three.js · React Three Fiber · Drei
Build Tool     →  Vite 7
Icons          →  Lucide React · React Icons
Forms          →  Formspree
Deployment     →  Netlify
```

---

## 📁 Project Structure

```
src/
├── data/
│   └── portfolioData.js        # Centralized content & config
├── scenes/
│   ├── SpaceScene.jsx           # Main 3D canvas orchestrator
│   ├── FloatingShapes.jsx       # Wireframe geometric shapes
│   ├── ParticleField.jsx        # Starfield particle system
│   ├── GlowLights.jsx           # Dynamic neon point lights
│   └── RotatingGlobe.jsx        # Hero wireframe globe
├── components/
│   ├── Navbar.jsx               # Glassmorphism scroll-spy navbar
│   ├── Hero.jsx                 # Landing section with typing animation
│   ├── About.jsx                # Bio, stats, education timeline
│   ├── Projects.jsx             # 3D tilt project cards
│   ├── Skills.jsx               # Animated skill bars + certificates
│   ├── Contact.jsx              # Contact form + social links
│   ├── CursorGlow.jsx           # Custom cursor glow effect
│   └── ScrollProgress.jsx       # Scroll progress indicator
├── hooks/
│   ├── useMouseParallax.js      # Mouse position tracking
│   └── useScrollProgress.js     # Scroll progress (0–1)
├── App.jsx                      # Root layout
├── main.jsx                     # Entry point
└── index.css                    # Design system & styles
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Bharat-dixit-0512/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Design Philosophy

- **Dark-first aesthetic** — Deep space background with neon cyan, purple, and blue accents
- **Depth through motion** — 3D camera movement and parallax create a sense of spatial exploration
- **Glassmorphism** — Frosted glass panels with soft glows for a premium, modern feel
- **Micro-interactions** — Hover effects, animated progress bars, and cursor trails for engagement
- **Performance-conscious** — Low-poly geometries, capped particle counts, lazy loading, and optimized rendering

---

## 📬 Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Bharat-dixit-0512)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bharat-dixit-/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/BharatD263969)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dixitbt0512@gmail.com)

</div>

---

<div align="center">

**Built with ❤️ by Bharat Dixit**

*React · Three.js · Framer Motion · Tailwind CSS*

</div>
