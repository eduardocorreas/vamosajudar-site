import React from 'react'

// import { Container } from './styles';

export default function about() {
  return (
    <div className="text-justify p-5 pl-10 pr-10">
      <h1 className="text-2xl text-red-500 text-center uppercase mb-5">
        Sobre <span className="font-bold">nós</span>
      </h1>
      <p>
        Iniciado em Março de 2020, o projeto{' '}
        <span className="text-red-500 font-bold">Vamos Ajudar</span> tem o
        intuito de unir as instituições de caridade e Centros de Atendimento com
        a população.
      </p>
      <br />
      <p>
        Veja a necessidade de cada instituição e, com um simples clique, entre
        em contato para fazer sua doação.
      </p>
    </div>
  )
}
