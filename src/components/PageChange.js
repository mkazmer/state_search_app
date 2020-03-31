import React from 'react'

export default function PageChange({ changePage, page, length, itemsPerPage }) {
  return (
    <div className="PageChange">
      <button
        className="dec-button"
        onClick={() => changePage('dec')}
        disabled={page <= itemsPerPage}
      >
        <img src="./icons/chevron_left.png" alt="Back" />
      </button>
      <div className="page-num">
        {page / itemsPerPage}/{Math.ceil(length / itemsPerPage)}
      </div>
      <button className="inc-button" onClick={() => changePage('inc')} disabled={page >= length}>
        <img src="./icons/chevron_right.png" alt="Forward" />
      </button>
    </div>
  )
}
