import React from 'react'

export default function Newsletter() {
  return (
    <div className="text-center px-4 py-10 animate-fade-in">
        <p className="mb-4 font-medium text-sm md:text-base">
          Join the future of data sovereignty
        </p>
        <div className="inline-flex border border-black rounded overflow-hidden w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 outline-none w-full sm:w-64"
          />
          <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition">
            Join
          </button>
        </div>
      </div>
  )
}
