import React from 'react'

export default function Hero() {
  return (
    <div className="p-10 text-white section-hero">
      <h1 className="text-center text-2xl mb-10">
        A sua contribuição alegra <br />
        <span className="font-bold"> o coração de muitas pessoas</span>
      </h1>
      <div className="text-center">
        <button className="p-3 bg-white text-gray-900 rounded-full">
          Quero colaborar agora
        </button>
      </div>
    </div>
  )
}
