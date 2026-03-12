# Vishwakamal Technicals Web Application

Enterprise-grade web application built as a single Next.js deployment target:
- Frontend + API: Next.js (React, TypeScript, App Router, Route Handlers, Framer Motion)
- Containerization: Docker
- Local orchestration: Docker Compose

## Deploy on Vercel

Deploy the repository root as the Vercel project root. The contact form is handled by internal Next.js route handlers, so no separate backend deployment is required.

Required server environment variables:
- `EMAIL_PROVIDER`
- `GOOGLE_FORM_ID`
- `GOOGLE_FORM_ENTRY_NAME`
- `GOOGLE_FORM_ENTRY_COMPANY`
- `GOOGLE_FORM_ENTRY_EMAIL`
- `GOOGLE_FORM_ENTRY_BUDGET`
- `GOOGLE_FORM_ENTRY_TIMELINE`
- `GOOGLE_FORM_ENTRY_PROJECT_DESCRIPTION`

Do not expose any of the Google Form values through `NEXT_PUBLIC_*` variables.

## Run with Docker Compose

```bash
docker compose up --build
```

Frontend: `http://localhost:3000`  
App health: `http://localhost:3000/api/health`

## Local Development

### Next.js application

```bash
npm install
npm run dev
```

Production-style local run:

```bash
npm install
npm run build
npm run start
```

## Contact API

`POST /api/contact`

Payload:
- `name`
- `company`
- `email`
- `projectDescription`
- `budgetRange`
- `timeline`

Google Form submission and notification adapters run server-side only. Email delivery abstraction is prepared in `lib/server/mailService.ts` for future AWS SES or Resend integration.
