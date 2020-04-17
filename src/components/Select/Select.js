import React from 'react';
import styles from './Select.module.scss';

const Select = ({setItemsPerPage, setCurrentPage}) => {
  return (
    <select
      className={styles.select}
      onChange={(e) => {
        setCurrentPage(1);
        setItemsPerPage(e.target.value);
      }}
    >
      {selectOptions.map((el, i) => (
        <option key={i} value={el.value}>
          {el.label}
        </option>
      ))}
    </select>
  );
};

const selectOptions = [
  {value: 10, label: '10'},
  {value: 25, label: '25'},
  {value: 50, label: '50'},
  {value: 100, label: '100'},
];

export default Select;
