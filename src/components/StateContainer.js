import React from 'react'

export default function StateContainer({ state }) {
  return (
    <div className="StateContainer" key={state.name}>
      <div className="name-container">
        <div className="abbr">{state.abbreviation}</div>
        <div className="name">{state.name}</div>
      </div>
      <div className="arrow-right" />
      <div className="details-container">
        <div className="detail capital">{state.capital}</div>
        <div className="detail order">{state.order}</div>
        <div className="detail date">{state.statehood_date}</div>
      </div>
    </div>
  )
}
