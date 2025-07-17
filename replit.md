# replit.md

## Overview

This is a painting contractor website for Western NY Painting Professionals, built as a modern full-stack web application. The application serves as a business website for a painting company that provides residential and commercial painting services across Western New York, including Batavia, Rochester, Buffalo, and Brockport.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api` prefix
- **Request Handling**: Express middleware for JSON parsing and logging

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Provider**: Neon Database (serverless PostgreSQL)
- **Migrations**: Drizzle Kit for schema management
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback

## Key Components

### Client-Side Components
- **Pages**: Home, Blog, BlogPost, and 404 error handling
- **UI Components**: Header with navigation, Hero section, Services showcase, Contact form, Footer
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Image Carousel**: Embla Carousel for project showcases

### Server-Side Components
- **Route Handlers**: Contact form submission with Zod validation
- **Storage Layer**: Abstract storage interface with memory-based implementation
- **Development Tools**: Vite integration for hot module replacement

### Shared Resources
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Safety**: Full TypeScript coverage across client and server

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Data Persistence**: Storage abstraction layer manages data operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **Client Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Technologies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **UI Framework**: Radix UI for accessible component primitives
- **Validation**: Zod for runtime type checking and form validation
- **Styling**: Tailwind CSS for utility-first styling

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript compiler with strict mode enabled
- **Development Environment**: Replit-specific plugins for cloud development

### Business-Specific Features
- **SEO**: Structured data markup for local business optimization
- **Contact Form**: Validated form submission with email validation
- **Blog System**: Static blog posts with SEO-friendly URLs
- **Service Areas**: Geographic targeting for Western NY markets

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **API Development**: Express server with request logging and error handling
- **Database Development**: Drizzle Kit for schema migrations

### Production Build
- **Client Build**: Vite builds optimized React application to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist/index.js`
- **Static Assets**: Images and other assets served from public directory

### Environment Configuration
- **Database**: Uses `DATABASE_URL` environment variable for connection
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Security**: CORS and security headers for production deployment

The application is designed to be deployed on platforms that support Node.js with PostgreSQL database connectivity, with particular optimization for the Replit cloud development environment.