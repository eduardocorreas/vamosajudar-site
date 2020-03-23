import React from 'react'
import { useSelector } from 'react-redux'

function ContributorList() {
  const contributors = useSelector(state => state.data)

  return (
    <ul className="flex justify-around flex-wrap">
      {contributors.map(contributor => (
        <div className="text-center" key={contributor}>
          <span>🧡</span>
          <li className="text-sm text-red-500 ">{contributor}</li>
        </div>
      ))}
    </ul>
  )
}

export default ContributorList
