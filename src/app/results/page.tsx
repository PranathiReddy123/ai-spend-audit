"use client";

import { useEffect, useState } from "react";

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

  const currentSpend =
    data.plan === "plus"
      ? 20 * data.seats
      : data.plan === "team"
      ? 30 * data.seats
      : 60 * data.seats;

  const savings =
    data.plan === "team" && data.seats <= 2
      ? 20
      : 0;

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
              ? "You may be overspending on team plans for a smaller seat count. Consider downgrading to individual plans."
              : "Your current setup appears reasonably optimized based on your selected configuration."}

          </p>

        </div>

      </div>

    </main>
  );
}