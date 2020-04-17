import React from 'react';
import styles from './Table.module.scss';
import TableHead from './TableHead';
import TableBody from './TableBody';
import LoadingModal from '../LoadingModal/LoadingModal';

const Table = ({
  allCompanies,
  companiesPerPage,
  setAllCompanies,
  searchedItem,
  loading,
  itemsPerPage,
}) => {
  return (
    <div className={styles.wraper}>
      <table className={styles.table}>
        <LoadingModal condition={loading} />

        <TableHead allCompanies={allCompanies} setter={setAllCompanies} />

        <TableBody
          companiesPerPage={companiesPerPage}
          searchedItem={searchedItem}
          itemsPerPage={itemsPerPage}
        />
      </table>
    </div>
  );
};

export default Table;
