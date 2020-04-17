import React from 'react';
import styles from './Table.module.scss';
import TableHead from './TableHead';
import TableBody from './TableBody';
import ErrorModal from '../ErrorModal/ErrorModal';

const Table = ({
  allCompanies,
  companiesPerPage,
  setAllCompanies,
  searchedItem,
  itemsPerPage,
  setCurrentPage,
  error,
}) => {
  return (
    <div className={styles.wraper}>
      <table>
        <TableHead
          allCompanies={allCompanies}
          setter={setAllCompanies}
          setCurrentPage={setCurrentPage}
        />

        <TableBody
          companiesPerPage={companiesPerPage}
          searchedItem={searchedItem}
          itemsPerPage={itemsPerPage}
          error={error}
        />
      </table>
      <ErrorModal condition={error} />
    </div>
  );
};

export default Table;
