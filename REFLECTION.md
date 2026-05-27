# Reflection

## 1. The hardest bug I hit this week

One of the hardest issues I encountered was handling client-side state persistence correctly between the audit form and results dashboard. Initially, the results page sometimes rendered empty values because localStorage data was not available immediately during component rendering.

My first hypothesis was that the audit form was failing to store the data correctly. I verified localStorage values manually in the browser developer tools and confirmed the data existed.

Next, I realized the issue was related to React rendering timing and client-side hydration. I solved it by moving the localStorage logic into a useEffect hook and adding conditional rendering for loading and empty states.

This debugging process taught me the importance of understanding rendering behavior in Next.js client components rather than assuming the issue was with the data itself.

---

## 2. A decision I reversed mid-week

Initially, I planned to make the project highly backend-heavy with authentication, database persistence, and full audit history support.

Midway through development, I realized the assignment emphasized shipping a polished, working product quickly rather than building unnecessary infrastructure complexity.

I reversed the decision and focused instead on:
- UX polish
- dashboard quality
- recommendation clarity
- responsiveness
- analytics presentation

This allowed me to move faster while improving the overall product experience significantly.

---

## 3. What I would build in week 2

If given another week, I would focus on:
- real backend persistence using Supabase
- email capture workflows
- shareable public audit URLs
- AI-generated executive summaries
- authentication and saved audit history
- benchmark comparisons between companies
- PDF export support

I would also improve the recommendation engine by introducing more detailed usage analysis and real-world optimization scenarios for engineering teams.

---

## 4. How I used AI tools

I used ChatGPT heavily throughout the project for:
- UI brainstorming
- debugging assistance
- architecture discussions
- improving UX wording
- generating documentation structure
- refining recommendation logic

However, I intentionally avoided blindly copying generated code without understanding it. I frequently modified outputs to fit the project architecture and debugged issues manually.

One example where AI was wrong was during navigation handling for delayed redirects. An earlier implementation caused the loading state to persist without navigating properly. I identified the issue during testing and corrected the redirect logic manually.

I also chose not to use AI for core audit calculations because deterministic rule-based logic produced more reliable and explainable financial recommendations.

---

## 5. Self-rating

### Discipline — 8/10
I maintained steady progress across multiple days and consistently improved the project incrementally.

### Code Quality — 7/10
The codebase is reasonably organized and readable, though backend architecture and testing coverage could still improve.

### Design Sense — 8/10
I focused heavily on building a polished SaaS-style experience with responsive layouts, dashboards, and interaction polish.

### Problem Solving — 8/10
I encountered multiple frontend state and rendering issues and resolved them through debugging and iteration.

### Entrepreneurial Thinking — 7/10
I approached the assignment as a real product rather than a coding exercise, though I would further strengthen the lead-generation and growth mechanics with more time.