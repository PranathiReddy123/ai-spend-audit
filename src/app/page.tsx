import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      <nav className="border-b border-zinc-800">

  <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

    <h1 className="text-xl font-bold">
      AI Spend Audit
    </h1>

    <div className="flex gap-4">

      <a
        href="/audit"
        className="text-sm text-gray-300 hover:text-white"
      >
        Audit
      </a>

      <a
        href="/results"
        className="text-sm text-gray-300 hover:text-white"
      >
        Results
      </a>

    </div>

  </div>

</nav>

      <section className="px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl">

            <p className="text-green-400 font-medium">
              AI Cost Optimization Platform
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Stop Overspending on AI Tools
            </h1>

            <p className="text-gray-400 text-xl mt-8 leading-relaxed">
              Analyze your AI stack, detect wasteful subscriptions,
              and discover cost-saving opportunities in under 60 seconds.
            </p>

            <div className="flex gap-4 flex-col md:flex-row mt-10">

              <Link href="/audit">
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300">
                  Start Free Audit
                </button>
              </Link>

              <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900">
                View Demo
              </button>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-24">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">

              <h2 className="text-4xl font-bold">
                32%
              </h2>

              <p className="text-gray-400 mt-4">
                Average AI spend reduction after optimization recommendations.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">

              <h2 className="text-4xl font-bold">
                10k+
              </h2>

              <p className="text-gray-400 mt-4">
                AI subscriptions analyzed across engineering and product teams.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">

              <h2 className="text-4xl font-bold">
                $2.4M
              </h2>

              <p className="text-gray-400 mt-4">
                Estimated annual software savings identified through audits.
              </p>

            </div>

          </div>

          <div className="mt-24">

  <p className="text-sm uppercase tracking-widest text-gray-500">
    Trusted Workflow
  </p>

  <div className="flex flex-wrap gap-4 mt-6">

    <div className="border border-zinc-800 px-5 py-3 rounded-xl text-sm text-gray-300">
      AI Spend Optimization
    </div>

    <div className="border border-zinc-800 px-5 py-3 rounded-xl text-sm text-gray-300">
      SaaS Analytics
    </div>

    <div className="border border-zinc-800 px-5 py-3 rounded-xl text-sm text-gray-300">
      Enterprise Cost Insights
    </div>

    <div className="border border-zinc-800 px-5 py-3 rounded-xl text-sm text-gray-300">
      Real-Time Recommendations
    </div>

  </div>

</div>

        </div>

      </section>


      <section className="mt-32">

  <div className="max-w-6xl mx-auto px-6">

    <p className="text-sm uppercase tracking-widest text-gray-500">
      How It Works
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300">

        <div className="text-3xl font-bold">
          01
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Input AI Stack
        </h3>

        <p className="text-gray-400 mt-4">
          Select your AI tools, pricing plans, and seat counts to begin the audit process.
        </p>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300">

        <div className="text-3xl font-bold">
          02
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Analyze Spending
        </h3>

        <p className="text-gray-400 mt-4">
          Our audit engine evaluates pricing efficiency and identifies unnecessary subscription overhead.
        </p>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300">

        <div className="text-3xl font-bold">
          03
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Optimize Costs
        </h3>

        <p className="text-gray-400 mt-4">
          Receive actionable recommendations, analytics insights, and estimated annual savings opportunities.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="mt-32">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">

        <h2 className="text-4xl font-bold">
          94%
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Audit Completion Rate
        </p>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">

        <h2 className="text-4xl font-bold">
          $18k
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Avg Annual Savings
        </p>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">

        <h2 className="text-4xl font-bold">
          10k+
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Audits Simulated
        </p>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">

        <h2 className="text-4xl font-bold">
          32%
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Avg Spend Reduction
        </p>

      </div>

    </div>

  </div>

</section>


      <footer className="border-t border-zinc-800 mt-24">

  <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500">

    Built for modern engineering teams optimizing AI tooling costs.

  </div>

</footer>

    </main>
  );
}