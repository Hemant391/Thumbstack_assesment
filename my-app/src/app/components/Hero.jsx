import React from 'react'

export default function Hero() {
  return (
      <header className="text-center py-10 px-4 animate-fade-in">
        <nav className="flex justify-center gap-4 text-xs font-semibold underline">
          {["STAGE 1", "STAGE 2", "STAGE 3", "STAGE 4", "STAGE 5"].map((stage) => (
            <a
              key={stage}
              href="#"
              className="hover:text-gray-700 transition duration-200"
            >
              {stage}
            </a>
          ))}
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold mt-10 animate-slide-in-down">
          By Europeans, for Europeans
        </h1>
        <p className="text-sm md:text-base mt-4 max-w-xl mx-auto">
          Privacy and security that Europeans need, demand and expect. Without giving
          other nations control over our data.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-10 text-sm animate-fade-in">
          {[
            { title: "No References", desc: "No backdoors by reference" },
            { title: "No Coordination", desc: "To take down content" },
            { title: "No Unofficial Structure", desc: "No 3rd parties viewing your data" },
            { title: "Unraid Infrastructure", desc: "Cloud setups on green tech" },
          ].map((item, idx) => (
            <div key={idx} className="hover:scale-105 transition-transform">
              <p className="font-semibold">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </header>
  )
}
