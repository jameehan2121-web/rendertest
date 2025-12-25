# Dr. Celeste Chiam - Personal Website

## Overview

This is a personal portfolio and booking website for Dr. Celeste Chiam, a pianist, creative director, and educator. The site showcases her piano teaching services (Studio Widmung), creativity workshops (Playshops), and coaching offerings. It features a modern, visually rich single-page design with contact forms and external booking integration via Cal.com.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints under /api prefix
- **Development**: Vite middleware integration for HMR during development
- **Production**: esbuild bundles server code, static files served from dist/public

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Neon Serverless PostgreSQL (@neondatabase/serverless)
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Migrations**: Drizzle Kit with migrations output to /migrations folder

### Database Schema
The application defines these core tables:
- **users**: Basic authentication (id, username, password)
- **services**: Service offerings (piano lessons, coaching, etc.) with pricing
- **bookings**: Customer booking records with Stripe payment tracking
- **availabilitySlots**: Calendar slot management for scheduling

### Email Integration
- **Service**: Resend API for transactional emails
- **Handler**: Contact form submissions processed via /api/contact endpoint
- **Types**: Supports lesson inquiries, playshops, creativity coaching, teacher training, and general inquiries

## External Dependencies

### Third-Party Services
- **Booking**: Cal.com integration (https://cal.com/james-rxcvpp) for appointment scheduling
- **Email**: Resend API for contact form submissions (requires RESEND_API_KEY)
- **Database**: Neon Serverless PostgreSQL (requires DATABASE_URL)
- **Fonts**: Google Fonts (Playfair Display, Lato)

### Environment Variables Required
- `DATABASE_URL`: Neon PostgreSQL connection string
- `RESEND_API_KEY`: Resend email service API key
- `RECIPIENT_EMAIL`: Optional override for contact form recipient (defaults to celeste.pianist@gmail.com)
- `FRONTEND_URL`: Optional CORS origin configuration

### Key npm Dependencies
- React ecosystem: react, react-dom, wouter, @tanstack/react-query
- UI: @radix-ui/*, shadcn components, framer-motion, lucide-react
- Styling: tailwindcss, class-variance-authority, clsx, tailwind-merge
- Database: drizzle-orm, @neondatabase/serverless, drizzle-kit
- Forms: react-hook-form, @hookform/resolvers, zod
- Server: express, cors
