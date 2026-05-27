# AI Spend Audit

AI Spend Audit is a SaaS-style web application designed to help startups and engineering teams analyze AI tooling costs, identify inefficient subscriptions, and optimize software spending.

The platform provides dynamic spend analysis, optimization recommendations, analytics dashboards, and estimated annual savings opportunities.

---

## Live Demo

Deployed on Vercel:
https://ai-spend-audit-plum-omega.vercel.app

---

## Features

- Dynamic AI spend audit workflow
- Pricing engine abstraction
- Optimization score indicators
- Personalized recommendation engine
- Interactive analytics dashboard
- Spend comparison charts
- Responsive SaaS UI
- Local storage persistence
- Loading-state UX flow
- Enterprise-style dashboard experience

---

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- Vercel
- GitHub

---

## Product Workflow

1. User selects AI tools and pricing plans
2. Audit engine analyzes subscription efficiency
3. Dashboard generates spend analytics
4. Optimization recommendations are displayed
5. Estimated annual savings opportunities are calculated

---

## Current Status

MVP implementation completed with:
- responsive layouts
- dashboard analytics
- UX polish
- pricing abstraction
- recommendation logic
- deployment pipeline

---

## Future Improvements

- PDF export support
- AI-generated executive summaries
- Team collaboration features
- Real backend integration
- Authentication and saved audits

---

## Screenshots

### Landing Page
Modern SaaS-style homepage with trust indicators and workflow explanation.

### Audit Flow
Interactive audit experience with loading-state transitions.

### Results Dashboard
Dynamic spend analytics, optimization scoring, and recommendation engine.

---

## Author

Built as part of a product engineering internship assignment focused on:
- product thinking
- frontend engineering
- UX quality
- SaaS dashboard design
- deployment workflows


---

# Decisions & Trade-offs

## 1. Client-side Persistence Instead of Backend Storage

For the MVP, I chose localStorage persistence instead of full backend storage to prioritize rapid iteration and a frictionless no-login experience.

Trade-off:
- simpler architecture
- less infrastructure complexity
- no permanent audit history

---

## 2. Rule-based Audit Logic Instead of Full AI Reasoning

The audit calculations use deterministic pricing and recommendation rules rather than relying entirely on LLM-generated reasoning.

Trade-off:
- more predictable outputs
- easier debugging
- less flexible personalization

---

## 3. Dashboard-first UX Design

I prioritized dashboard clarity and large visual metrics over dense financial reporting.

Trade-off:
- easier readability
- better shareability
- reduced depth for advanced enterprise analysis

---

## 4. Frontend-focused MVP Scope

I intentionally focused more heavily on frontend UX polish and product presentation before implementing advanced backend systems.

Trade-off:
- stronger product feel
- faster iteration
- limited persistence and collaboration features

---

## 5. Simplified Pricing Model

The pricing engine currently uses simplified pricing assumptions for some enterprise plans where exact public pricing is unavailable.

Trade-off:
- easier MVP implementation
- realistic approximation behavior
- less precision for enterprise-scale audits