import React from 'react'

export default function ContactForm() {
  return (
    <div className="bg-red-500 p-5 pl-10 pr-10 text-white">
      <div>
        <h1 className="text-2xl text-center mb-3">
          Seja um <span className="font-bold">doador!</span>
        </h1>
        <p className="text-center text-sm">
          Cadastre-se abaixo para fazer parte da nossa lista de doadores e
          receba gratuitamente nossas novidades e materiais!
        </p>
      </div>
      <div className="mt-5">
        <input
          className="bg-white text-gray-400 focus:text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-1"
          type="text"
          placeholder="Qual o seu nome?"
          id="name"
        />
        <input
          className="bg-white text-gray-400 focus:text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-1"
          type="email"
          placeholder="Insira o seu email"
          id="email"
        />
        <input
          className="bg-white text-gray-400 focus:text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-1"
          type="text"
          placeholder="Insira o seu telefone"
          id="phone"
        />
        <button
          type="submit"
          className="p-3 w-full  bg-gray-200 shadow-lg text-gray-900 rounded-md"
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}
