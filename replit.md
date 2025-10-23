# 4D Solutions - FDA 21 CFR Part 11 Compliant Software Platform

## Overview

This is a React-based web application for 4D Solutions, a company specializing in FDA 21 CFR Part 11 compliant software systems for regulated industries. The platform showcases products like Environmental Monitoring Systems and Microbial Assay Zone Readers, targeting pharmaceutical, biotech, and medical device companies that require regulatory compliance.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom 4D Solutions design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **SEO**: React Helmet Async for meta tag management
- **Animations**: Framer Motion for smooth interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot module replacement with Vite middleware

## Key Components

### Frontend Pages
- **Home**: Landing page with hero section, product highlights, and company overview
- **Products**: Product catalog with detailed product pages
- **Solutions**: Industry-specific solutions and compliance features
- **Compliance**: Detailed information about FDA 21 CFR Part 11 compliance
- **Case Studies**: Customer success stories and metrics
- **About**: Company information and team details
- **Contact**: Multi-channel contact form with validation
- **Blog**: Content management for regulatory updates and best practices

### Backend API Endpoints
- `/api/products` - Product catalog management
- `/api/case-studies` - Case study content
- `/api/blog` - Blog post management
- `/api/contact` - Contact form submissions

### UI Components
- Reusable component library based on shadcn/ui
- Custom 4D Solutions branding and color scheme
- Responsive design for mobile and desktop
- Accessibility-compliant components

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express.js routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Data flows back through the stack with proper error handling
5. **State Management**: TanStack Query caches and manages server state on the client

### Storage Architecture
The application uses a flexible storage interface that supports both in-memory development storage and PostgreSQL production storage:

- **Development**: MemStorage class for rapid development
- **Production**: PostgreSQL with Drizzle ORM for persistent data
- **Schema**: Shared TypeScript schemas for type safety across frontend and backend

## External Dependencies

### Core Technologies
- **Database**: Neon serverless PostgreSQL
- **UI Library**: Radix UI primitives
- **Authentication**: Session-based (prepared for implementation)
- **Email**: Ready for SMTP integration
- **File Storage**: Local development, cloud-ready architecture

### Development Tools
- **Package Manager**: npm with lockfile for dependency consistency
- **Type Checking**: TypeScript with strict configuration
- **Linting**: Built-in TypeScript checking
- **Building**: Vite for frontend, esbuild for backend
- **Environment**: Replit development environment support

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: esbuild bundles Node.js server code
3. **Asset Management**: Static files served from dist/public
4. **Environment Variables**: DATABASE_URL required for production

### Production Deployment
- **Frontend**: Static assets can be served by CDN or reverse proxy
- **Backend**: Node.js server handles API requests and serves frontend
- **Database**: Neon PostgreSQL with connection pooling
- **Process Management**: Single Node.js process handles both API and static serving

### Development Setup
- **Hot Reload**: Vite middleware provides instant frontend updates
- **API Development**: tsx with watch mode for backend changes
- **Database**: Drizzle push for schema migrations
- **Environment**: Development banner and debugging tools included

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```