import React from 'react'

export default function Roadmap_Section() {
  return (
    <section className="bg-black text-white px-4 py-10 animate-slide-in-up">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#f4ff52]">By Europeans, for Europeans</h2>
          <p className="mt-2 max-w-xl mx-auto">
            Empowering governments, organizations and individuals in the online realm.
          </p>
          <button className="bg-[#f4ff52] text-black mt-6 px-4 py-2 text-sm font-semibold rounded hover:scale-105 transition-transform">
            Read more about us →
          </button>
        </div>

        <h3 className="text-center mt-16 text-2xl font-bold">
          Our Road to Creating Data Ownership and Security
        </h3>

        <div className="mt-10 space-y-6">
          <div className="flex justify-between items-center border-b pb-2 flex-col sm:flex-row">
            <div>
              <span className="font-bold">Stage 1</span>
              <p>Cloud infrastructure</p>
            </div>
            <button className="border px-3 py-1 text-sm mt-2 sm:mt-0 hover:bg-white hover:text-black transition">
              Book a demo →
            </button>
          </div>

          <div className="flex justify-between items-center bg-[#f4ff52] text-black px-4 py-2 rounded flex-col sm:flex-row">
            <div>
              <span className="font-bold">Stage 2</span>
              <p>Collaboration</p>
              <small>EU alternative to Google Workspace</small>
            </div>
            <button className="border border-black px-3 py-1 text-sm font-medium mt-2 sm:mt-0 hover:bg-black hover:text-white transition">
              Try it →
            </button>
          </div>

          {["Stage 3", "Stage 4", "Stage 5"].map((stage, index) => (
            <div key={index} className="text-gray-400">
              <span className="font-bold">{stage}</span>
              <p>
                {stage === "Stage 3" && "Communication"}
                {stage === "Stage 4" && "Connectivity"}
                {stage === "Stage 5" && "Entertainment"}
              </p>
              <p className="text-xs">Coming soon</p>
            </div>
          ))}
        </div>
      </section>
  )
}
