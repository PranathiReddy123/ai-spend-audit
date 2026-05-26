"use client";

"use client";

import { useEffect, useState } from "react";
import { pricing } from "@/lib/pricing";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ResultsPage() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const storedData = localStorage.getItem("auditData");

    if (storedData) {
      setData(JSON.parse(storedData));
    }

  }, []);

  if (!data) {

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          No Audit Data Found
        </h1>

        <p className="text-gray-400 mt-4 max-w-lg">
          Please complete an AI spend audit before viewing results.
        </p>

        <a
          href="/audit"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition-all"
        >
          Start Audit
        </a>

      </div>

    </main>

  );

}

const toolPricing =
  pricing[data.tool as keyof typeof pricing];

const monthlyPrice =
  toolPricing?.[
    data.plan as keyof typeof toolPricing
  ] || 20;

const currentSpend =
  monthlyPrice * data.seats;


  const savings =
    data.plan === "team" && data.seats <= 2
      ? 20
      : 0;


      const optimizationScore =
  savings > 0 ? 62 : 91;

const riskLevel =
  savings > 0 ? "High Waste" : "Optimized";

  let recommendation = "";

if (data.tool === "chatgpt" && data.seats <= 2) {

  recommendation =
    "Smaller teams may not fully benefit from ChatGPT Team pricing. Consolidating into Plus plans could reduce monthly spend while preserving core functionality.";

}

else if (data.tool === "cursor" && data.seats >= 10) {

  recommendation =
    "Larger engineering teams using Cursor may benefit from centralized enterprise license management and shared AI policy controls.";

}

else if (data.tool === "claude") {

  recommendation =
    "Claude usage patterns typically benefit from prompt workflow optimization and selective seat allocation for research-heavy roles.";

}

else {

  recommendation =
    "Your current AI tooling configuration appears reasonably optimized based on the selected usage profile.";

}

      const chartData = [
  {
    name: "Current",
    amount: currentSpend,
  },
  {
    name: "Optimized",
    amount: currentSpend - savings,
  },
];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold">
          Audit Results
        </h1>

        <p className="text-green-400 mt-3 text-sm">
  AI audit completed successfully</p>

        <p className="text-gray-400 mt-4">
          Personalized analysis for your AI stack.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">

  <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-gray-300">
    Tool: {data.tool}
  </div>

  <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-gray-300">
    Seats: {data.seats}
  </div>

  <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-gray-300">
    Audit Generated Successfully
  </div>

</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-400 text-sm">
              Current Monthly Spend
            </p>

            <h2 className="text-4xl font-bold mt-2">
              ${currentSpend}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-400 text-sm">
              Potential Savings
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              ${savings}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-400 text-sm">
              Annual Savings
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              ${savings * 12}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">

  <p className="text-gray-400 text-sm">
    Optimization Score
  </p>

  <h2 className="text-4xl font-bold mt-2">
    {optimizationScore}%
  </h2>

  <p
    className={`mt-3 text-sm ${
      savings > 0
        ? "text-yellow-400"
        : "text-green-400"
    }`}
  >
    {riskLevel}
  </p>

</div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-10 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">

          <h2 className="text-2xl font-bold">
            Recommendation
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">

            {recommendation}


          </p>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-10 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">

  <h2 className="text-2xl font-bold mb-6">
    Spend Comparison
  </h2>

  <div className="h-80">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart data={chartData}>

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="amount"
          fill="#22c55e"
          radius={[10, 10, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>

        </div>

      </div>

    </main>
  );
}