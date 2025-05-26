# Juneteenth Landing Page

![Juneteenth Celebration](https://images.unsplash.com/photo-1594736797933-d0f39b7d3adf?q=80&w=400&auto=format&fit=crop)

## Project Overview

This repository contains a beautifully crafted Juneteenth celebration landing page that honors the rich history and cultural significance of Juneteenth. The website features an immersive experience with authentic African cultural elements, interactive RSVP functionality, and a modern responsive design that celebrates freedom, heritage, and community.

### 🎉 Live Demo

**Production URL**: [https://juneteenth-landing-page-b6beel9m1-styners-projects-0b587fe0.vercel.app](https://juneteenth-landing-page-b6beel9m1-styners-projects-0b587fe0.vercel.app)

### ✨ Features

- **Cultural Heritage Design**: Authentic African mask imagery and traditional design elements
- **Interactive RSVP System**: Complete event registration with Google Apps Script backend
- **Responsive Layout**: Fully optimized for all devices with elegant mobile experience
- **Rich Visual Elements**: High-quality imagery showcasing Juneteenth celebrations
- **Modern UI Components**: Beautiful animations, cards, and interactive elements
- **Accessibility First**: WCAG compliant design ensuring inclusivity for all users
- **Fast Performance**: Optimized Next.js build with excellent Core Web Vitals
- **Confetti Celebrations**: Interactive celebration effects for enhanced user engagement

## 🛠️ Technology Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom theming
- **Icons**: Lucide React
- **Animations**: Canvas Confetti & CSS animations
- **Forms**: React Hook Form with Zod validation
- **Backend Integration**: Google Apps Script for RSVP handling
- **Deployment**: Vercel with automatic CI/CD
- **Development**: TypeScript for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- pnpm, npm, or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/stynerdev225/juneteenth-landing-page.git
cd juneteenth-landing-page
```

2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run Development Server**
   ```bash
   pnpm dev
   ```

4. **Open Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

3. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
juneteenth-landing-page/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind configuration
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main landing page component
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components (Radix UI)
│   ├── client-wrapper.tsx       # Client-side component wrapper
│   ├── rsvp-form.tsx           # RSVP form component
│   ├── rsvp-modal.tsx          # RSVP modal dialog
│   └── theme-provider.tsx       # Theme context provider
├── google-apps-script/           # Backend integration scripts
│   ├── RSVP-Handler.js          # Google Apps Script for RSVP processing
│   └── RSVP-Handler-NEW.js      # Updated RSVP handler
├── hooks/                       # Custom React hooks
│   ├── use-confetti.ts          # Confetti animation hook
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                         # Utility functions
│   └── utils.ts                 # General utilities and helpers
├── public/                      # Static assets
│   └── images/                  # Juneteenth celebration imagery
│       ├── african-mask-*.png   # African cultural elements
│       ├── juneteenth-*.png     # Juneteenth specific graphics
│       └── portal-writing-group.png
└── styles/                      # Additional styling
    └── globals.css              # Extended global styles
```

## 🎨 Features in Detail

### Cultural Design Elements
- **African Mask Integration**: Authentic cultural imagery with respectful presentation
- **Traditional Color Palette**: Colors that honor African heritage and Juneteenth symbolism
- **Typography**: Elegant font choices that enhance readability and cultural respect

### RSVP System
- **Google Apps Script Backend**: Serverless form processing with Google Sheets integration
- **Form Validation**: Comprehensive validation using Zod schemas
- **Success Animations**: Celebratory confetti effects upon successful registration
- **Error Handling**: Graceful error states with helpful user feedback

### Mobile Experience
- **Responsive Design**: Fluid layouts that work perfectly on all screen sizes
- **Touch Optimized**: Interactive elements sized appropriately for mobile interaction
- **Performance**: Optimized images and lazy loading for fast mobile performance

### Accessibility
- **ARIA Labels**: Comprehensive screen reader support
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Clear focus indicators and logical tab order

## 🌐 Deployment

This project is configured for seamless deployment on Vercel:

### Automatic Deployment
- Connected to GitHub repository for automatic deployments
- Production builds triggered on push to main branch
- Preview deployments for all pull requests

### Manual Deployment
```bash
# Build for production
pnpm build

# Deploy to Vercel
vercel --prod
```

## 🤝 Contributing

We welcome contributions that help celebrate and honor Juneteenth! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add culturally respectful feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Ensure all cultural elements are presented respectfully and accurately
- Maintain accessibility standards in all new features
- Test responsive design across multiple devices
- Follow the existing code style and TypeScript patterns

## 📝 Developer Information

```javascript
// Developed with ❤️ to honor Juneteenth and African American heritage
// Professional Web Development by stynerdev225
// Date: May 24, 2025
// Framework: Next.js + React + Tailwind CSS + Radix UI

// Cultural Note: This application was created with deep respect for
// Juneteenth's historical significance and African American culture.
// Every design element honors the struggle for freedom and the
// celebration of emancipation.
```

## 📄 License

© 2025 Juneteenth Landing Page. All rights reserved.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Support & Community

For questions, issues, or feature requests:
- Open an issue in this repository
- Contact: stynerdev2025@aol.com
- Follow the project for updates

## 🏛️ Historical Context

Juneteenth commemorates the announcement of the abolition of slavery in Texas on June 19, 1865, and more broadly the emancipation of enslaved African Americans throughout the former Confederate States. This landing page serves as a digital celebration of freedom, heritage, and the ongoing journey toward equality and justice.

---

*This project was created with profound respect for the historical significance of Juneteenth and the ongoing struggle for equality and justice. We honor the ancestors and celebrate the resilience of the African American community.*

## 🙏 Acknowledgments

- **Historical Significance**: Honoring the legacy of Juneteenth and its importance in American history
- **Cultural Elements**: African imagery used with respect and appreciation for African heritage
- **Community**: Built for and inspired by the African American community's celebration of freedom
- **Open Source**: Built with gratitude for the open-source community and modern web technologies

---

**Event Details:**
- **Date**: June 19th
- **Host**: Portal Writing Group
- **Contact**: portalwriting@gmail.com
