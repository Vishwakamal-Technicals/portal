# Vishwakamal Technicals Web Application

Enterprise-grade full-stack web application built with:
- Frontend: Next.js (React, TypeScript, App Router, Framer Motion)
- Backend: Node.js + Express API
- Orchestration: Docker Compose

## Run with Docker Compose

```bash
docker compose up --build
```

Frontend: `http://localhost:3000`  
Backend health: `http://localhost:8080/health`

## Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
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

Email delivery abstraction is prepared in `backend/src/services/mailService.js` for future AWS SES or Resend integration.
