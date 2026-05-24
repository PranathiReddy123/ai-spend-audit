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
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
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

        <h1 className="text-5xl font-bold">
          Audit Results
        </h1>

        <p className="text-gray-400 mt-4">
          Personalized analysis for your AI stack.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">
              Current Monthly Spend
            </p>

            <h2 className="text-4xl font-bold mt-2">
              ${currentSpend}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">
              Potential Savings
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              ${savings}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">
              Annual Savings
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              ${savings * 12}
            </h2>
          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-10">

          <h2 className="text-2xl font-bold">
            Recommendation
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">

            {savings > 0

             ? `Your ${data.tool} configuration appears over-provisioned for your current seat count. Downgrading plans or consolidating licenses could reduce spend significantly.`
             : `Your ${data.tool} setup currently appears reasonably optimized based on your selected usage pattern.`
            }

          </p>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-10">

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