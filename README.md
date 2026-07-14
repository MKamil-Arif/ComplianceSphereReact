# ComplianceSphere — FDA 21 CFR Part 11 Compliant Software Platform

ComplianceSphere is a modern, full-stack React and Node.js showcase platform for **4D Solutions**, specializing in FDA 21 CFR Part 11 compliant software systems for regulated industries (pharmaceuticals, biotechnology, and medical device manufacturing).

The platform highlights products like **Environmental Monitoring Systems** (cleanroom environmental parameters) and **Microbial Assay Zone Readers** (automated antimicrobial susceptibility testing), focusing on compliance, data integrity, and validated systems.

---

## 🚀 Key Features

*   **Environmental Monitoring System Showcase**: Demonstrates real-time tracking of cleanroom metrics (temperature, humidity, air pressure, particle count) with automated alerts, trend analysis, and compliant electronic records.
*   **Microbial Assay Zone Reader Showcase**: Showcases automated zone reading and analysis, MIC calculations, digital documentation, and audit-compliant reporting.
*   **FDA 21 CFR Part 11 Compliance Section**: In-depth explanations of electronic records, electronic signatures, audit trails, and data security mechanisms.
*   **Case Studies**: Interactive success metrics showing compliance audits and time-saving achievements (e.g., 75% audit prep reduction).
*   **Secure API Forms**:
    *   **Contact Us**: A multi-channel contact form with robust client and server validation powered by Zod and React Hook Form.
    *   **Request Demo Modal**: Instant demo request booking integrated throughout the landing pages.
*   **Regulatory Blog**: A CMS-driven blog featuring articles on industry compliance standards.

---

## 🛠️ Technology Stack

### Frontend (Client-side)
*   **Framework**: React 18 (with TypeScript)
*   **Build Tool**: Vite (optimized HMR and code-splitting)
*   **UI Primitives**: Radix UI (accessible, unstyled components)
*   **CSS / Styling**: Tailwind CSS, class-variance-authority, Framer Motion (for premium animations/transitions)
*   **Routing**: Wouter (lightweight, client-side router)
*   **State Management**: TanStack Query (React Query) for API caching and data fetching
*   **Form Management**: React Hook Form with Zod validation
*   **SEO Management**: React Helmet Async (manages titles, metadata, and accessibility tags per page)

### Backend (Server-side)
*   **Runtime**: Node.js with Express.js
*   **Language**: TypeScript compiled via `esbuild` for production
*   **Database ORM**: Drizzle ORM
*   **Database Client**: Neon Serverless PostgreSQL client (`@neondatabase/serverless` over WebSockets)
*   **Production Bundler**: `esbuild` for packaging backend files into `dist/index.js`

---

## 📁 Directory Structure

```text
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable layout and custom UI components
│   │   ├── hooks/          # React hooks (theme, query hooks)
│   │   ├── lib/            # Network libraries (Query Client, API helpers)
│   │   ├── pages/          # Page views (Home, About, Products, Contact, etc.)
│   │   ├── App.tsx         # Main router and configuration wrapper
│   │   ├── index.css       # Core design system stylesheet & Tailwind inputs
│   │   └── main.tsx        # Application entrypoint
├── server/                 # Node.js + Express API server
│   ├── db.ts               # Drizzle connection setup (safe load-time checks)
│   ├── index.ts            # Express server initialization & routing wrapper
│   ├── routes.ts           # API endpoint routing (/api/products, /api/contact, etc.)
│   ├── storage.ts          # Storage provider interface (memory or PostgreSQL fallback)
│   └── vite.ts             # Vite middleware configuration for dev hot reloading
├── shared/                 # Shared TypeScript models and database schemas
│   └── schema.ts           # Drizzle table schemas and Zod insertion validation
├── drizzle.config.ts       # Drizzle schema migrations configurator
├── package.json            # Scripts, dependencies, and metadata
└── vite.config.ts          # Vite build parameters & alias setups
```

---

## 💾 Storage Architecture

The application implements a **Dual-Mode Storage System** that provides a seamless developer and production workflow:

1.  **Development Mode (Default)**:
    If no database is configured, the server defaults to `MemStorage` (in-memory). It pre-populates dummy data so the entire site functions immediately without database infrastructure.
2.  **Production Mode (Persistent PostgreSQL)**:
    If a `DATABASE_URL` environment variable is provided, the application switches to `DatabaseStorage` using Drizzle ORM.
    *   **Auto-Seeding**: On server start, if the PostgreSQL database is empty, the application automatically seeds the tables with default products, case studies, and blog posts.

---

## ⚙️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional for Database)
If you want to test database persistence locally, create a `.env` file in the root folder or set your terminal variables:
```env
DATABASE_URL=postgresql://username:password@ep-host-name.pooler.region.neon.tech/dbname?sslmode=require
```

### 3. Sync Database Schema
If a database URL is provided, run the migration to create the tables in your database:
```bash
npm run db:push
```

### 4. Start Development Server
```bash
npm run dev
```
The server will start, hosting the client on `http://localhost:5000` (or the fallback development port) with active hot-reload.

---

## 📦 Production Build & Deployment

### 1. Build Client and Server Bundles
To compile the client (HTML/CSS/JS static bundle inside `dist/public`) and package the server (single Express bundle `dist/index.js`):
```bash
npm run build
```

### 2. Start Production Server
```bash
npm run start
```
The server binds to `0.0.0.0` and respects the port specified in `process.env.PORT` (falling back to `5000` if not set).

### Environment Variables
For production deployment, ensure the following variables are set on your hosting provider (Replit, Render, Railway, etc.):
- `DATABASE_URL`: Connection string to your PostgreSQL instance.
- `PORT`: (Injected automatically by most platforms) The port where the server listens.
- `NODE_ENV`: Should be set to `production`.
