# Architecture

## Stack Choice

I chose Next.js with TypeScript and Tailwind CSS because the assignment required fast product iteration, responsive UI development, and a scalable frontend architecture.

Reasons:
- Next.js provides clean routing and deployment simplicity with Vercel
- TypeScript improves maintainability and reduces runtime bugs
- Tailwind CSS enables rapid UI iteration and consistent design
- Recharts simplified analytics visualization for the audit dashboard

---

# System Flow

```mermaid
flowchart TD

A[Landing Page] --> B[Audit Form]

B --> C[User Inputs AI Tools]
C --> D[Pricing Engine]

D --> E[Audit Calculation Logic]

E --> F[Optimization Recommendations]

F --> G[Results Dashboard]

G --> H[Analytics Charts]
G --> I[Optimization Score]
G --> J[Savings Estimates]


Data Flow 
1.User enters AI tooling information:
   -selected tools
   -pricing plans
   -seat counts
2.Audit form stores the state in localStorage for persistence.
3.The pricing engine maps tools and plans to pricing values.
4.Audit logic evaluates:
    -current monthly spend
    -potential savings
    -optimization opportunities
5.Results page dynamically renders:
    -savings estimates
    -charts
    -recommendation summaries
    -optimization scores


Key Engineering Decisions
**Centralized Pricing Engine**

Pricing data is separated into a reusable pricing.ts file to improve scalability and maintainability.

Client-side State Persistence

localStorage was used to persist audit data without requiring backend authentication for the MVP.

Dashboard-first UX

The results page was designed to prioritize readability and shareability using large metrics, charts, and concise recommendations.


**Scaling Considerations**

If this product handled 10k+ audits/day:

Move audit persistence to a backend database
Add caching for pricing data
Introduce authentication and saved audit history
Add queueing for AI-generated summaries
Use server-side analytics aggregation
Add rate limiting and abuse protection