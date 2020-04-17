import React from 'react';
import styles from './Pagination.module.scss';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import Select from '../Select/Select';

const Pagination = ({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  recordsAmount,
}) => {
  const allPaginationPages = Math.ceil(recordsAmount / itemsPerPage);
  const handleClick = (e) => {
    if (e.target.alt === 'right-arrow') setCurrentPage(currentPage + 1);
    else setCurrentPage(currentPage - 1);
  };

  return (
    <section className={styles.wraper}>
      <div>
        <p>Items per page:</p>
        <Select
          setItemsPerPage={setItemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div>
        <p>
          Page: {currentPage} of {allPaginationPages}
        </p>
        <img
          src={leftArrow}
          alt="left-arrow"
          onClick={currentPage < 2 ? null : handleClick}
          className={currentPage < 2 ? styles.disabled : null}
        />
        <img
          src={rightArrow}
          alt="right-arrow"
          onClick={currentPage === allPaginationPages ? null : handleClick}
          className={
            currentPage === allPaginationPages ? styles.disabled : null
          }
        />
      </div>
    </section>
  );
};

export default Pagination;
