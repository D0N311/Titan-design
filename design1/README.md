# Titan Freight - Logistics Website

A modern, responsive website for Titan Freight - Sydney's trusted logistics partner specializing in container transport, sideloader services, and live unloads.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessible**: Built with accessibility best practices
- **SEO Ready**: Structured for search engine optimization

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Install dependencies**

   ```bash
   npm i
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components
│   │   ├── figma/          # Figma-imported components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── Footer.tsx      # Site footer
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── AboutPage.tsx   # About us page
│   │   ├── ServicesPage.tsx # Services page
│   │   └── ContactPage.tsx # Contact page
│   ├── routes.ts          # Route configuration
│   └── App.tsx           # Main app component
├── assets/               # Static assets
├── styles/              # Global styles
└── types/               # TypeScript definitions
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#0A2463` - Main brand color
- **Accent Orange**: `#FB8B24` - Call-to-action and highlights
- **Gray Tones**: Various shades for text and backgrounds

### Typography

- **Headings**: Bold, clean sans-serif
- **Body Text**: Readable, accessible font sizes
- **Brand**: Custom styled "TITAN FREIGHT" logo

## 📱 Pages

- **Home**: Hero, services, stats, testimonials
- **About**: Company story, mission, values, timeline
- **Services**: Container transport, sideloaders, live unloads
- **Contact**: Contact form and business information

## 🚀 Deployment

Configured for Netlify deployment:

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Automatic deployments from main branch

## 🔧 Configuration

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS setup
- `tsconfig.json` - TypeScript configuration
- `netlify.toml` - Deployment configuration

---

**Built for Titan Freight - Sydney's Premier Logistics Partner**
