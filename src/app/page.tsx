import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl">

            <p className="text-green-400 font-medium">
              AI Cost Optimization Platform
            </p>

            <h1 className="text-7xl font-bold mt-6 leading-tight">
              Stop Overspending on AI Tools
            </h1>

            <p className="text-gray-400 text-xl mt-8 leading-relaxed">
              Analyze your AI stack, detect wasteful subscriptions,
              and discover cost-saving opportunities in under 60 seconds.
            </p>

            <div className="flex gap-4 mt-10">

              <Link href="/audit">
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90">
                  Start Free Audit
                </button>
              </Link>

              <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900">
                View Demo
              </button>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-24">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

              <h2 className="text-4xl font-bold">
                32%
              </h2>

              <p className="text-gray-400 mt-4">
                Average AI spend reduction after optimization recommendations.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

              <h2 className="text-4xl font-bold">
                10k+
              </h2>

              <p className="text-gray-400 mt-4">
                AI subscriptions analyzed across engineering and product teams.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

              <h2 className="text-4xl font-bold">
                $2.4M
              </h2>

              <p className="text-gray-400 mt-4">
                Estimated annual software savings identified through audits.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}