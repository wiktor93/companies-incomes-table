import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
  return <input className={styles.input} type="text" placeholder="Search..." />;
};

export default SearchBar;
