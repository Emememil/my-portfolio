cat << 'EOF' > README.md
# 🚀 Emil William | Software Developer Portfolio

A curated showcase of my journey in building high-performance web and desktop applications. This portfolio reflects my philosophy that **software is a craft**, blending creative logic with technical precision.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎨 My Philosophy
> "Great software isn't just about writing code; it's about shaping an experience."

As a developer, I focus on building tools that are robust, intuitive, and genuinely helpful. My work bridges the gap between feature-rich web applications and high-performance desktop environments.

---

## 🛠️ Technical Arsenal

- **Frontend:** React, JavaScript (ES6+), Modern CSS (Custom Modules)
- **Desktop/Systems:** Rust, Tauri (High-performance desktop apps)
- **Tooling & State:** Vite, React Hooks, State Management
- **Design:** UI/UX Centric Design, Framer Motion / Custom Animations
- **Integrations:** RESTful APIs, Spotify Web API

---

## 📂 Featured Projects

### 🎬 Cinera App
**Tech:** `React` | `Rust` | `Desktop App Development`
- A modern movie discovery application that combines a sleek React frontend with a high-performance backend.
- **Key Focus:** User-friendly interface and fast data retrieval for films and TV shows.
- [Video Demo](https://vimeo.com/1118518277)

### 📊 Spotify Dashboard
**Tech:** `React` | `Data Visualization` | `Spotify API`
- A data-driven dashboard that visualizes personal listening habits using the Spotify API.
- **Key Focus:** Transforming raw JSON data into meaningful, aesthetic analytics.
- [Live Demo](https://spotify-ai-dashboard.vercel.app/) | [GitHub](https://github.com/Emememil/spotify-ai-dashboard)

### 💸 Expense Splitter Pro
**Tech:** `React` | `State Management` | `PWA`
- A progressive web app (PWA) designed for real-time bill splitting and expense tracking.
- **Key Focus:** Complex state management and clear visual hierarchy for group finances.
- [Live Demo](https://emememil.github.io/expense-splitter-app/) | [GitHub](https://github.com/Emememil/expense-splitter-app)

---

## 🏗️ Project Architecture
The project is built with a modular, component-based architecture for maximum reusability:

```text
├── src/
│   ├── components/
│   │   ├── common/         # High-level Reusable Animations (AnimatedTitle, etc.)
│   │   ├── ProjectSection/ # Dynamic project mapping from projects.js
│   │   └── Modal/          # Focused view for Case Studies
│   ├── assets/             # Optimized project imagery
│   └── App.jsx             # Root application logic
