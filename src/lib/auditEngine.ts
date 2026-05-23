export function generateAudit(tool: string, plan: string, seats: number) {

  if (tool === "chatgpt" && plan === "team" && seats <= 2) {
    return {
      recommendation: "Switch to ChatGPT Plus",
      monthlySavings: 20,
    };
  }

  if (tool === "cursor" && plan === "business" && seats === 1) {
    return {
      recommendation: "Downgrade to Cursor Pro",
      monthlySavings: 20,
    };
  }

  return {
    recommendation: "Your current setup looks optimized.",
    monthlySavings: 0,
  };
}