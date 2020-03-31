import React from 'react'

export default function SortBar({ changeSortOrder, sortBy, ascOrder }) {
  return (
    <div className="SortBar">
      <div className="sort-name">
        <div className="sort-option abbr">
          <button onClick={() => changeSortOrder('abbreviation')}>
            Abbr
            <img
              className={`arrow sort-by-name ${sortBy === 'abbreviation' ? 'show' : ''} ${
                ascOrder ? 'down' : 'up'
              }`}
              src="./icons/arrow.png"
              alt="sort arrow"
            />
          </button>
        </div>
        <div className="sort-option name">
          <button onClick={() => changeSortOrder('name')}>
            Name
            <img
              className={`arrow sort-by-name ${sortBy === 'name' ? 'show' : ''} ${
                ascOrder ? 'down' : 'up'
              }`}
              src="./icons/arrow.png"
              alt="sort arrow"
            />
          </button>
        </div>
      </div>
      <div className="sort-details">
        <div className="sort-option capital">
          <button onClick={() => changeSortOrder('capital')}>
            Capital
            <img
              className={`arrow sort-by-name ${sortBy === 'capital' ? 'show' : ''} ${
                ascOrder ? 'down' : 'up'
              }`}
              src="./icons/arrow.png"
              alt="sort arrow"
            />
          </button>
        </div>
        <div className="sort-option order">
          <button onClick={() => changeSortOrder('order')}>
            Order
            <img
              className={`arrow sort-by-name ${sortBy === 'order' ? 'show' : ''} ${
                ascOrder ? 'down' : 'up'
              }`}
              src="./icons/arrow.png"
              alt="sort arrow"
            />
          </button>
        </div>
        <div className="sort-option date">
          <button onClick={() => changeSortOrder('statehood_date')}>
            Statehood
            <img
              className={`arrow sort-by-date ${sortBy === 'statehood_date' ? 'show' : ''} ${
                ascOrder ? 'down' : 'up'
              }`}
              src="./icons/arrow.png"
              alt="sort arrow"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
