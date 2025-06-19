# 🍦 React Ice Cream Shop

A responsive, animated, multi-page ice cream shop built with **React.js**, **Framer Motion**, and **Tailwind CSS**. The application showcases different flavors of ice cream with transitions and a sleek UI optimized for both mobile and desktop.

---

## 📌 Project Overview

This project is a fictional single-page application (SPA) that displays different ice cream flavors using routes like `/`, `/ice2`, `/ice3`, `/ice4`. Each page showcases:

- A themed background
- Navbar and navigation
- A hero section with animation
- Interactive mini cones (clickable to navigate)
- Framer Motion-based transitions between routes
- Responsive design (mobile-first)
- Smooth transitions and scroll restoration

---

## 📁 Folder Structure

icecream-shop/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # All image assets (logo, icecreams, frames)
| |---common
| | |---Navbar.jsx
| |
│ ├── components/
│ │ ├── Icecream1.jsx
│ │ ├── Icecream2.jsx
│ │ ├── Icecream3.jsx
│ │ ├── Icecream4.jsx
│ │ ├── Layout.jsx # Used for wrapping routes
│ │ |
│ │ └── PageWrapper.jsx # Handles Framer Motion transitions
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json # Handles SPA route fallback for Vercel
└── README.md # Project documentation

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js ≥ v14
- npm or yarn
- Git

### 🚀 Getting Started

1. **Clone the repository**

```bash

   git clone https://github.com/your-username/icecream-shop.git
   cd icecream-shop


   2.Install dependencies

     npm install
# or
     yarn install



 🚀 Deployment (Vercel)

     {
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}




```
