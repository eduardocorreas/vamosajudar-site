import React from 'react'

import ContributorList from './contributorList'

export default function contributors() {
  return (
    <div className="text-justify p-5 pl-10 pr-10">
      <h1 className="text-2xl text-red-500 text-center uppercase mb-5">
        Veja quem <span className="font-bold">já faz parte!</span>
      </h1>
      <ContributorList />
    </div>
  )
}
