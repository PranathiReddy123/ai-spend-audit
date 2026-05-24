export default function ResultsPage() {

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold">
          Audit Results
        </h1>

        <p className="text-gray-400 mt-4">
          Here's a breakdown of your AI tooling spend and optimization opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">
              Current Monthly Spend
            </p>

            <h2 className="text-4xl font-bold mt-2">
              $60
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">
              Potential Savings
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              $20
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">
              Annual Savings
            </p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              $240
            </h2>
          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-10">

          <h2 className="text-2xl font-bold">
            Recommendation
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Your current setup appears to be over-provisioned for your team size.
            Switching from ChatGPT Team to ChatGPT Plus for smaller teams could
            reduce monthly costs while maintaining similar productivity benefits.
          </p>

        </div>

      </div>

    </main>
  );
}