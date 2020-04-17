import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './HeadingBar.module.scss';

const HeadingBar = ({searchedItem, setSearchedItem}) => {
  return (
    <section className={styles.wraper}>
      <h1>Companies incomes</h1>
      <SearchBar
        searchedItem={searchedItem}
        setSearchedItem={setSearchedItem}
      />
    </section>
  );
};

export default HeadingBar;
