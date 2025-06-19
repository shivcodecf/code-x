# 🍦 React Ice Cream Shop

A responsive, animated, multi-page ice cream shop built with **React.js**, **Framer Motion**, and **Tailwind CSS**. The application showcases different flavors of ice cream with transitions and a sleek UI optimized for both mobile and desktop.

---

## 📌 Project Overview

This is a fictional Single Page Application (SPA) that displays different ice cream flavors using routes like `/`, `/ice2`, `/ice3`, `/ice4`. Each page includes:

- A themed background
- Navbar with navigation links
- A hero section with animated images and text
- Clickable mini cones to switch between flavors
- Framer Motion-based page transitions
- Responsive design (mobile-first)
- Smooth transitions and scroll restoration

---

## 📁 Folder Structure

icecream-shop/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # All image assets (logo, cones, frames)
│ │ └── common/
│ │ └── Navbar.jsx
│ ├── components/
│ │ ├── Icecream1.jsx
│ │ ├── Icecream2.jsx
│ │ ├── Icecream3.jsx
│ │ ├── Icecream4.jsx
│ │ ├── Layout.jsx # Wraps all routes
│ │ └── PageWrapper.jsx # Handles Framer Motion transitions
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json # SPA fallback for Vercel
└── README.md


---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js ≥ v14
- npm or yarn
- Git

### 📦 Install & Run Locally

```bash
git clone https://github.com/your-username/icecream-shop.git
cd codex

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev


🚀 Deployment (Vercel)

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

```

🧠 Internal Documentation
PageWrapper.jsx
Wraps all route components to enable Framer Motion animations during route transitions.

Navbar.jsx
Responsive navigation bar that adapts using Tailwind’s responsive breakpoints.

Route Transitions
Each page uses <motion.div> with initial, animate, and transition props to create smooth animations.

🛠️ Technologies Used

React.js

React Router v6

Framer Motion

Tailwind CSS

Vite

Deployed on Vercel


🚧 Known Issues
Minor animation flicker during some fast route switches.

Scroll restoration may behave inconsistently on certain mobile browsers.



📬 Contact
For questions, suggestions, or improvements, feel free to open an issue or contact me:

📧 shivamyadav2113128@gmail.com
