"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditPage() {

  const router = useRouter();

  const [tool, setTool] = useState("chatgpt");
  const [plan, setPlan] = useState("plus");
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold">
          AI Spend Audit
        </h1>

        <p className="text-gray-400 mt-4">
          Analyze your AI tooling costs and discover savings opportunities.
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <label className="block mb-2 text-sm">
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3"
            >
              <option value="chatgpt">ChatGPT</option>
              <option value="claude">Claude</option>
              <option value="cursor">Cursor</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Plan
            </label>

            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3"
            >
              <option value="plus">Plus</option>
              <option value="team">Team</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Number of Seats
            </label>

            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3"
            />
          </div>


          <button
  onClick={() => {

    setLoading(true);

    localStorage.setItem(
      "auditData",
      JSON.stringify({
        tool,
        plan,
        seats,
      })
    );

    setTimeout(() => {
      window.location.href = "/results";
    }, 1800);

  }}
  className="w-full bg-white text-black py-4 rounded-2xl font-semibold mt-8 hover:opacity-90 hover:scale-[1.01] transition-all duration-300"
>

  {loading
    ? "Analyzing AI Spend ⏳"
    : "Generate Audit"}

</button>

          

        </div>

      </div>

    </main>
  );
}