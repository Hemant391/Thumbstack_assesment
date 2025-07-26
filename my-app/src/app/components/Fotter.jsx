import React from 'react'

export default function Fotter() {
  return (
    <footer className="bg-[#f4ff52] text-black  pt-10 animate-fade-in">
        <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
        <p className="mb-4 text-sm">
          Follow our progress on building for Europeans, by Europeans.
        </p>
        <div className="flex flex-wrap gap-2 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 border rounded w-full sm:w-auto flex-grow"
          />
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

        <div className="bg-black p-6 text-white mt-10  grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-bold mb-2">Products</h4>
            <ul className="space-y-1">
              <li className="hover:underline">Apura IaaS</li>
              <li className="hover:underline">Apura Workspace</li>
              <li className="hover:underline">Apura Socials</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Roadmap</h4>
            <ul className="space-y-1">
              <li>Stage 1</li>
              <li>Stage 2</li>
              <li>Stage 3</li>
              <li>Stage 4</li>
              <li>Stage 5</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Info</h4>
            <ul className="space-y-1">
              <li className="hover:underline">Help us on our journey</li>
              <li className="hover:underline">Terms & Conditions</li>
              <li className="hover:underline">Privacy Policy</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Europe_blank_laea_location_map.svg/1024px-Europe_blank_laea_location_map.svg.png"
              alt="EU Map"
              className="w-24 opacity-60"
            />
          </div>
        </div>
      </footer>
  )
}
