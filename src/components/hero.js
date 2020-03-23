import React from 'react'

export default function Hero() {
  return (
    <div className="p-10 text-white section-hero">
      <h1 className="text-center text-2xl mb-10">
        A sua contribuição alegra <br />
        <span className="font-bold"> o coração de muitas pessoas</span>
      </h1>
      <div className="text-center">
        <a
          href="/#"
          className="p-3 pr-10 pl-10  bg-gray-200 shadow-lg text-gray-900 rounded-full"
        >
          Quero colaborar agora
        </a>
      </div>
    </div>
  )
}
