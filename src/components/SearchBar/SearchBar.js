import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({searchedItem, setSearchedItem}) => {
  const handleChange = (e) => {
    setSearchedItem(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={searchedItem}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
