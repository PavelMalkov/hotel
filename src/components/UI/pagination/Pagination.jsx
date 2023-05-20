import React from 'react'
import { getPagesArray } from '../../../untils/pages'

export const Pagination = ({totalPages, page, chanchePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
    <div className="page__wrapper">
        {pagesArray.map(p =>
          <span
          onClick={() => chanchePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        )}
      </div>
  )
}
