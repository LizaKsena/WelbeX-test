/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Pagination({ rowPerPage, totalRows, paginate }) {
  const pageNumbers = [1];

  for (let i = 1; i < Math.ceil(totalRows / rowPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div className="btn-toolbar d-flex justify-content-center mt-2 mb-2 align-items-center" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        {pageNumbers.map((elem) => (
          <button type="button" className="btn btn-outline-secondary" onClick={() => paginate(elem)}>
            {' '}
            {elem}
          </button>
        ))}
      </div>
    </div>

  );
}
