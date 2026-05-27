# Prompt Design

## AI Audit Summary Prompt

The application was designed to support an AI-generated audit summary feature that converts raw audit calculations into a concise executive-style explanation.

---

## Primary Prompt

```text
You are an AI financial optimization assistant for startup engineering teams.

A user completed an AI tooling spend audit.

Generate a concise 80-120 word summary explaining:
- whether the user is overspending
- where optimization opportunities exist
- potential savings opportunities
- whether their tooling setup appears efficient

Use a professional but conversational tone.

Audit Data:
- Tool: {tool}
- Plan: {plan}
- Seats: {seats}
- Current Spend: {currentSpend}
- Estimated Savings: {savings}
- Optimization Score: {optimizationScore}


**Why This Prompt Was Designed This Way**

The prompt intentionally:

avoids excessive AI-generated verbosity
keeps recommendations actionable
focuses on financial clarity rather than generic AI advice
generates summaries that resemble SaaS audit dashboards

The goal was to make outputs feel trustworthy and useful for startup founders or engineering managers.

**What Didn't Work Well**

Earlier prompt attempts produced:

overly generic recommendations
repetitive wording
exaggerated savings claims
summaries that sounded too “AI generated”

To improve output quality, the prompt was simplified and constrained around:

spend efficiency
optimization logic
concise recommendations
professional tone consistency

**Fallback Strategy**

If the LLM request fails, the system falls back to:

deterministic recommendation logic
rule-based optimization messaging
static recommendation templates

This ensures the audit flow still works even if external AI services are unavailable.
