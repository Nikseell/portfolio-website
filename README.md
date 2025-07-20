# Portfolio Website

A modern, animated portfolio website built with React, TypeScript, Vite, and Three.js.

## Project Structure

```
portfolio-website/
├── public/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── documents/
│           └── cv.pdf
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx          # Reusable button component
│   │   │   ├── Navigation.tsx      # Main navigation bar
│   │   │   ├── Footer.tsx          # Footer component
│   │   │   ├── ScrollIndicator.tsx # Scroll down arrows
│   │   │   └── LoadingSpinner.tsx  # Loading component
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section with animated background
│   │   │   ├── About.tsx           # About section
│   │   │   ├── Projects.tsx        # Projects showcase section
│   │   │   ├── Skills.tsx          # Skills/technologies section
│   │   │   └── Contact.tsx         # Contact form section
│   │   ├── ui/
│   │   │   ├── Card.tsx            # Project cards
│   │   │   ├── Modal.tsx           # Modal for project details
│   │   │   ├── ContactForm.tsx     # Contact form
│   │   │   └── SkillsGrid.tsx      # Skills display grid
│   │   └── animations/
│   │       ├── Beam.tsx            # 3D animated beams background
│   │       ├── ParticleEffect.tsx  # Particle animations
│   │       └── ScrollAnimations.tsx # Scroll-triggered animations
│   ├── pages/
│   │   ├── Home.tsx                # Main landing page (one-page scroll)
│   │   ├── About.tsx               # Dedicated about page
│   │   ├── Projects.tsx            # Dedicated projects page
│   │   └── Contact.tsx             # Dedicated contact page
│   ├── hooks/
│   │   ├── useScrollPosition.ts    # Custom hook for scroll position
│   │   ├── useIntersectionObserver.ts # Hook for scroll animations
│   │   └── useWindowSize.ts        # Hook for responsive design
│   ├── utils/
│   │   ├── constants.ts            # App constants
│   │   ├── animations.ts           # Animation configurations
│   │   └── helpers.ts              # Utility functions
│   ├── styles/
│   │   ├── globals.css             # Global styles
│   │   └── components.css          # Component-specific styles
│   ├── types/
│   │   ├── index.ts                # Type definitions
│   │   └── api.ts                  # API type definitions
│   ├── data/
│   │   ├── projects.ts             # Project data
│   │   ├── skills.ts               # Skills data
│   │   └── personal.ts             # Personal information
│   ├── App.tsx                     # Main app component with routing
│   ├── main.tsx                    # App entry point
│   ├── index.css                   # Main styles
│   └── vite-env.d.ts              # Vite type definitions
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Page Structure

### 1. Home Page (One-Page Scroll)

The main landing page combines all sections in a scrollable format:

- **Hero Section**: Animated background with introduction
- **About Section**: Brief overview with skills
- **Projects Section**: Featured projects showcase
- **Contact Section**: Contact form and information

### 2. About Page

Dedicated page with detailed information:

- Personal story and background
- Detailed skills and technologies
- Experience timeline
- Education and certifications

### 3. Projects Page

Comprehensive projects showcase:

- All projects with filtering options
- Detailed project cards with live demos
- Technology stack for each project
- GitHub links and case studies

### 4. Contact Page

Contact information and form:

- Contact form with validation
- Social media links
- Location and availability
- Download CV option

## Component Architecture

### Section Components

Each section is a reusable component that can be used in both the one-page home layout and dedicated pages:

```typescript
// Example: sections/Hero.tsx
interface HeroProps {
  isFullPage?: boolean;
  showScrollIndicator?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  isFullPage = false,
  showScrollIndicator = true,
}) => {
  // Component logic
};
```

### Navigation Structure

```typescript
// Navigation links configuration
const navigationLinks = [
  { name: "Home", href: "/", section: "hero" },
  { name: "About", href: "/about", section: "about" },
  { name: "Projects", href: "/projects", section: "projects" },
  { name: "Contact", href: "/contact", section: "contact" },
];
```

## Data Management

### Project Data Structure

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  imageUrl: string;
  featured: boolean;
  category: "web" | "mobile" | "desktop" | "game";
}
```

### Skills Data Structure

```typescript
interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  proficiency: number; // 1-100
  icon?: string;
}
```

## Development Guidelines

### File Naming Conventions

- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Pages: PascalCase (e.g., `About.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useScrollPosition.ts`)
- Utilities: camelCase (e.g., `constants.ts`)
- Types: camelCase (e.g., `index.ts`)

### Component Structure

```typescript
import { type FC } from "react";

interface ComponentProps {
  // Props interface
}

const Component: FC<ComponentProps> = ({ ...props }) => {
  // Hooks
  // State
  // Effects
  // Handlers
  // Render
  return <div>{/* JSX */}</div>;
};

export default Component;
```

## Responsive Design

- Mobile-first approach using Tailwind CSS
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Flexible grid system for all components
- Touch-friendly navigation on mobile

## Animation Strategy

- **Beams Background**: 3D animated beams using Three.js
- **Scroll Animations**: Intersection Observer API for reveal animations
- **Micro-interactions**: Hover effects and button animations
- **Page Transitions**: Smooth transitions between routes

## Performance Optimizations

- **Code Splitting**: Lazy loading for pages and heavy components
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Regular bundle size monitoring
- **Caching Strategy**: Service worker for static assets

## Technologies Used

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Routing**: React Router DOM
- **Animations**: Framer Motion (optional)
- **Form Handling**: React Hook Form with validation

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

- **Hosting**: Vercel/Netlify
- **Domain**: Custom domain configuration
- **CI/CD**: Automatic deployments from main branch
- **Analytics**: Google Analytics integration

This structure provides a scalable, maintainable codebase that can grow with your portfolio needs while maintaining clean separation of concerns and reusable components.
