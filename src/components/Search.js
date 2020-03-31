import React from 'react'

export default function Search({ searchList }) {
  return (
    <div className="Search">
      <input
        className="search-bar"
        onChange={e => {
          searchList(e.target.value)
        }}
      />
      <img src="./icons/search.png" alt="Search..." />
    </div>
  )
}
