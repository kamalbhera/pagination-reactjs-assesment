import React from 'react'

const Pagination = ({ totalPages, products, page, setPage }) => {
  const arr = [...Array(totalPages)]

  const selectPage = i => {
    if (i >= 1 && i <= totalPages && i !== page) {
      setPage(i)
    }
  }
  return (
    <div className='pagination'>
      <span
        className={page === 1 ? 'disabled' : ''}
        onClick={() => selectPage(page - 1)}
      >
        ◀️
      </span>
      {arr.map((_, i) => (
        <span
          className={page === i + 1 ? 'selected' : ''}
          key={i}
          onClick={() => selectPage(i + 1)}
        >
          {i + 1}
        </span>
      ))}
      <span
        className={page === totalPages ? 'disabled' : ''}
        onClick={() => selectPage(page + 1)}
      >
        ▶️
      </span>
    </div>
  )
}

export default Pagination
