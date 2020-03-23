import React from 'react'
import firebase from 'firebase'

export default function contactForm() {
  function handleContributor(){
    firebase
  }
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
        <input
          className="bg-white text-gray-400 focus:text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-1"
          type="text"
          placeholder="Qual é o seu instagram? "
          id="instagram"
        />
      </div>
    </div>
  )
}
