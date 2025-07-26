import React from 'react'

export default function Products_section() {
  return (
    <section className="bg-white px-4 py-10 animate-fade-in">
        <h3 className="text-xl font-semibold mb-6 text-center">Our products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Run safely.",
              subtitle: "Apura Iaas.",
              desc: "Apura Iaas is our service allowing customers to develop applications on our sovereign cloud platform.",
              cta1: "Read more",
              cta2: "Book a demo",
              bg: "bg-[#f4ff52]",
            },
            {
              title: "Work privately.",
              subtitle: "Apura Workspace.",
              desc: "Apura Workspace is our alternative to Google Workspace or Teams.",
              cta1: "Read more",
              cta2: null,
              bg: "bg-gray-100",
            },
            {
              title: "Share confidently.",
              subtitle: "Apura Socials.",
              desc: "Our introduction to social media infrastructure for essential online life.",
              cta1: "Read more",
              cta2: null,
              bg: "bg-gray-100",
            },
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-lg ${item.bg} hover:shadow-xl transition-shadow`}>
              <h4 className="font-bold text-lg mb-2">{item.title}<br />{item.subtitle}</h4>
              <p className="mb-4 text-sm">{item.desc}</p>
              <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition">
                {item.cta1}
              </button>
              {item.cta2 && (
                <button className="block mt-2 border border-black px-4 py-2 text-sm rounded hover:bg-black hover:text-white transition">
                  {item.cta2}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
  )
}
