import React from 'react';
import {useState} from 'react';
import styles from './TableHead.module.scss';
import tableColumns from '../../assets/tableColumns';

const TableHead = ({allCompanies, setter}) => {
  const [lastSortedColumn, setLastSortedColumn] = useState(null);

  const handleClick = (columnKey) => {
    //click on the same column
    if (lastSortedColumn === columnKey) setter([...allCompanies.reverse()]);
    //click on new column
    else
      setter([
        ...allCompanies.sort((a, b) => {
          if (a[columnKey] > b[columnKey]) return 1;
          if (b[columnKey] > a[columnKey]) return -1;
          return 0;
        }),
      ]);

    setLastSortedColumn(columnKey);
  };

  return (
    <thead className={styles.thead}>
      <tr>
        {tableColumns.map((el, i) => (
          <td key={i} onClick={() => handleClick(el.columnKey)}>
            {el.name}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
