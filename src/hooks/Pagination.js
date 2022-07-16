import React from 'react';

// Hooks
import { usePagination, DOTS } from './usePagination';

// Style
import '../styles/pagination.css';

function Pagination(props) {

    const {
        onPageChange,
        currentPage,
        totalCount,
        pageSize,
        siblingCount = 1,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    })
    // console.log(paginationRange);
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    let lastPage = paginationRange[paginationRange.length - 1]

    const onNext = () => {
        onPageChange(currentPage + 1)
    }
    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }

    return (
        <ul className='pagination-container pagination-bar'>
            <li className={`pagination-item ${currentPage === 1 && 'disabled'}`} onClick={onPrevious}>
                <div className='arrow left' />
            </li>

            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return <li key={i} className='pagination-item dots'> &#8230; </li>
                }
                return (
                    <li key={i} className={`pagination-item ${pageNumber === currentPage && 'selected'}`} onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </li>
                )
            })
            }

            <li className={`pagination-item ${currentPage === lastPage && 'disabled'}`} onClick={onNext}>
                <div className='arrow right' />
            </li>
        </ul>
    );
}

export default Pagination;