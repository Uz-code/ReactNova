import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  
  const onNext = () => {
    if (currentPage === lastPage) { return; }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) { return; }
    onPageChange(currentPage - 1);
  };


  let lastPage = paginationRange[paginationRange.length - 1];
  
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return (
      <ul
        className={classnames('pagination no-select', { [className]: className })}
      >
         {/* Left navigation arrow */}
        <li
          className={classnames('"page-item', {
            disabled: currentPage === 1
          })}
        >
          <a className="page-link text-muted arrow left" > Anterior </a>
        </li>
       
            <li
              className={classnames('page-item', { [className]: className })}
              onClick={() => onPageChange(1)}
            >
              <a className={classnames('page-link ', {
                'text-muted': 1 === currentPage
              },
              {
                'text-muted': 1 !== currentPage
              }
              )} >  1 </a>
            </li>
        {/*  Right Navigation arrow */}
        <li
          className={classnames('page-item', {
            disabled: currentPage === lastPage
          })}
        >
          <a className="page-link text-muted arrow right"> Siguiente </a>
        </li>
      </ul>
    );
  }

  return (
    <ul
      className={classnames('pagination no-select', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('"page-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <a className="page-link text-muted arrow left" > Anterior </a>
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key= {pageNumber} className="page-item"><a className="page-link text-muted dots" > &#8230; </a></li>;
        }
		
        // Render our Page Pills
        return (
          <li key= {pageNumber}
            className={classnames('page-item', { [className]: className })}
            onClick={() => onPageChange(pageNumber)}
          >
            <a className={classnames('page-link ', {
              'selected': pageNumber === currentPage
            },
            {
              'text-muted': pageNumber !== currentPage
            }
            )} >  {pageNumber} </a>
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('page-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <a className="page-link text-muted arrow right"> Siguiente </a>
      </li>
    </ul>
  );
};

export default Pagination;