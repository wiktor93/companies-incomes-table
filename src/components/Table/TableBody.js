import React from 'react';
import styles from './TableBody.module.scss';
import tableColumns from '../../assets/tableColumns';

const TableBody = ({companiesPerPage, searchedItem, itemsPerPage}) => {
  return (
    <tbody className={styles.tbody}>
      {companiesPerPage &&
        companiesPerPage
          .filter((company) => {
            let isElementPresent = false;
            for (const i of tableColumns) {
              if (
                company[i.columnKey]
                  .toString()
                  .toLowerCase()
                  .includes(searchedItem.toLowerCase())
              ) {
                isElementPresent = true;
                break; //if element is present in a row, check next one
              }
            }
            return isElementPresent;
          })
          .map((el, i) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.city}</td>
              <td>
                {el.totalIncome
                  ? new Intl.NumberFormat('en-US').format(el.totalIncome)
                  : null}
              </td>
              <td>
                {el.avgIncome
                  ? new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                    }).format(el.avgIncome)
                  : null}
              </td>
              <td>
                {el.lastMonthIncome
                  ? new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                    }).format(el.lastMonthIncome)
                  : null}
              </td>
            </tr>
          ))}
      {console.log(itemsPerPage, companiesPerPage.length)}
      {itemsPerPage > companiesPerPage.length &&
        new Array(itemsPerPage - companiesPerPage.length)
          .fill(1)
          .map((el, i) => <tr className={styles.fillers} key={-i}></tr>)}
    </tbody>
  );
};

export default TableBody;
