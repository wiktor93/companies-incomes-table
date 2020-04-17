import React from 'react';
import {useState} from 'react';
import styles from './TableHead.module.scss';
import tableColumns from '../../assets/tableColumns';
import sortDown from '../../assets/icons/sort-down.svg';
import sortUp from '../../assets/icons/sort-up.svg';

const TableHead = ({allCompanies, setter, setCurrentPage}) => {
  const [lastSortedColumn, setLastSortedColumn] = useState(null);
  const [isASC, setIsASC] = useState(true);

  const handleClick = (columnKey) => {
    //click on the same column
    if (lastSortedColumn === columnKey) {
      setIsASC(!isASC);
      setter([...allCompanies.reverse()]);
    }
    //click on new column
    else {
      setIsASC(true);
      setter([
        ...allCompanies.sort((a, b) => {
          //this sort works only if numeric values in array are typeof 'number'
          if (a[columnKey] > b[columnKey]) return 1;
          if (b[columnKey] > a[columnKey]) return -1;
          return 0;
        }),
      ]);
    }

    setCurrentPage(1);
    setLastSortedColumn(columnKey);
  };

  return (
    <thead className={styles.thead}>
      <tr>
        {tableColumns.map((column, i) => (
          <td key={i} onClick={() => handleClick(column.columnKey)}>
            <div>
              <img
                className={
                  lastSortedColumn === column.columnKey ? styles.touched : null
                }
                src={
                  lastSortedColumn === column.columnKey
                    ? isASC
                      ? sortDown
                      : sortUp
                    : sortDown
                }
                alt="sort-icon"
              />
              <span>{column.name}</span>
            </div>
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
