# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React (v16.13.0) using Create React App. The site features a unique approach avoiding conventional UI frameworks, using only pure CSS for responsive design across mobile to desktop. Key features include a carousel with animations, stoic quote generator, multi-function navigation button, and an analogue clock component.

## Common Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (use with caution)
npm run eject
```

## Architecture & Structure

### Routing Structure
- Uses React Router v5 with lazy loading for performance
- Main routes: `/` (home), `/about`, `/projects`, `/blog`, `/play`, `/contact`
- All routes use Suspense with a custom Spinner component for loading states

### Component Architecture
- **App.js**: Main app component with routing setup and lazy-loaded pages
- **pages/**: Contains page components (Default.js, About.js, Work.js, Blog.js, Play.js, Contact.js)
- **components/**: Reusable components including:
  - Navbar.js: Navigation with scroll-based background changes
  - Carousel.js: Main homepage carousel using pure-react-carousel
  - Stoic.js: Quote generator with React Spring animations
  - Clock.js: Analogue clock component using pure JavaScript Date object
  - Footer.js, Spinner.js: Layout components

### Key Dependencies & Patterns
- **Styling**: Uses styled-components for some components, pure CSS for responsive design
- **Animations**: React Spring for complex animations (multi-function button, quote generator)
- **Icons**: FontAwesome React components
- **Carousel**: pure-react-carousel library
- **Email**: emailjs-com for contact form functionality
- **Responsive Design**: react-media-hook for media queries in JavaScript

### Navigation Pattern
The Default.js page features a unique multi-function animated button that expands to show navigation options. The button uses React Spring's useChain and useTransition hooks for complex animation sequences, with different sizes for small screens vs desktop.

### Node Version
Project requires Node.js version >=16.0.0 <17.0.0 as specified in package.json engines field.

## Important Implementation Notes

- The project uses React 16.x with hooks patterns throughout
- Custom CSS animations are preferred over framework solutions
- The Navbar component conditionally renders based on current route (hidden on homepage)
- Carousel component integrates multiple features: project showcases, clock, and stoic quotes
- Image assets are stored in src/img/ with organized subdirectories (e.g., clock/ for clock component assets)