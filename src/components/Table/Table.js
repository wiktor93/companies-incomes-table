import React from 'react';
import {useState, useEffect} from 'react';
import styles from './Table.module.scss';
import TableHead from './TableHead/TableHead';

const Table = ({companies}) => {
  const [companiesPerPage, setCompaniesPerPage] = useState(companies);
  // const [updated, setUpdated] = useState([]);

  useEffect(() => {
    const companiesIncomesUpdate = [];
    const fetchIncomes = async () => {
      for (const el of companiesPerPage) {
        await fetch(`https://recruitment.hal.skygate.io/incomes/${el.id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const incomes = data.incomes.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );

            const totalIncome = incomes
              .map((el) => +el.value)
              .reduce((prev, cur) => prev + cur)
              .toFixed(2);

            const avgIncome = (totalIncome / incomes.length).toFixed(2);

            const lastMonthIncome = incomes
              .map((el) => ({
                ...el,
                date: {
                  year: new Date(el.date).getFullYear(),
                  month: new Date(el.date).getMonth() + 1,
                },
              }))
              .filter(
                (el, i, arro) =>
                  el.date.year === arro[0].date.year &&
                  el.date.month === arro[0].date.month
              )
              .map((el) => +el.value)
              .reduce((prev, cur) => prev + cur)
              .toFixed(2);

            companiesIncomesUpdate.push({
              ...el,
              incomes,
              totalIncome,
              avgIncome,
              lastMonthIncome,
            });
          });
        // .catch((error) => {
        //   setError(true);
        // });
      }
      setCompaniesPerPage(companiesIncomesUpdate);
    };
    fetchIncomes();
  }, []);

  return (
    <table className={styles.table}>
      {/* <h1>Company incomes</h1> */}

      <TableHead array={companiesPerPage} setter={setCompaniesPerPage} />

      <tbody>
        {companiesPerPage.map((el, i) => (
          <tr key={el.id}>
            <td>{i + 1}</td>
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
      </tbody>
    </table>
  );
};

export default Table;
