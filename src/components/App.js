import React, {useState, useEffect} from 'react';
import '../styles/global.scss';
import HeadingBar from './HeadingBar/HeadingBar';
import Table from './Table/Table';
import Pagination from './Pagination/Pagination';

function App() {
  const [allCompanies, setAllCompanies] = useState([]);
  const [error, setError] = useState(false);
  const [searchedItem, setSearchedItem] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  //fetch all companies and their income details
  useEffect(() => {
    const fetchedCompanies = [];
    const fetchedCompaniesWithIncomes = [];

    const fetchCompanies = () => {
      fetch('https://recruitment.hal.skygate.io/companies')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          fetchedCompanies.push(
            ...data.sort((a, b) => a.id - b.id).slice(0, 15)
          );
          fetchIncomes();
        })
        .catch(() => {
          setError(true);
        });
    };

    const fetchIncomes = async () => {
      for (const company of fetchedCompanies) {
        await fetch(`https://recruitment.hal.skygate.io/incomes/${company.id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const incomes = data.incomes.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );

            const totalIncome = incomes
              .map((income) => +income.value)
              .reduce((prev, cur) => prev + cur)
              .toFixed(2);

            const avgIncome = (totalIncome / incomes.length).toFixed(2);

            const lastMonthIncome = incomes
              .map((income) => ({
                ...income,
                date: {
                  year: new Date(income.date).getFullYear(),
                  month: new Date(income.date).getMonth() + 1,
                },
              }))
              .filter(
                (income, i, arro) =>
                  income.date.year === arro[0].date.year &&
                  income.date.month === arro[0].date.month
              )
              .map((income) => +income.value)
              .reduce((prev, cur) => prev + cur)
              .toFixed(2);

            fetchedCompaniesWithIncomes.push({
              ...company,
              // incomes // uncomment, if needed
              totalIncome,
              avgIncome,
              lastMonthIncome,
            });
          })
          .catch(() => {
            setError(true);
          });
      }
      setAllCompanies(fetchedCompaniesWithIncomes);
    };
    fetchCompanies();
  }, []);

  //companies per page calculation
  const indexOfLastRecord = itemsPerPage * currentPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const companiesPerPage = allCompanies.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <div className="App">
      <div className="wraper">
        <HeadingBar
          searchedItem={searchedItem}
          setSearchedItem={setSearchedItem}
        />

        <Table
          allCompanies={allCompanies}
          companiesPerPage={companiesPerPage}
          setAllCompanies={setAllCompanies}
          searchedItem={searchedItem}
          itemsPerPage={itemsPerPage}
        />

        <Pagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          recordsAmount={allCompanies.length}
        />
      </div>
    </div>
  );
}

export default App;
