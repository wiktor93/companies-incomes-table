import React, {useState, useEffect} from 'react';
import '../styles/global.scss';
import HeadingBar from './HeadingBar/HeadingBar';
import Table from './Table/Table';
import Pagination from './Pagination/Pagination';
import LoadingModal from './LoadingModal/LoadingModal';
import handleIncomes from '../utils/handleIncomes';
import progressUpdate from '../utils/progressUpdate';

function App() {
  const [allCompanies, setAllCompanies] = useState([]);
  const [searchedItem, setSearchedItem] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  //fetch all companies and then their income details
  useEffect(() => {
    const fetchedCompanies = [];
    const fetchedCompaniesWithIncomes = [];

    const fetchCompanies = () => {
      setIsLoading(true);
      fetch('https://recruitment.hal.skygate.io/companies')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          fetchedCompanies.push(...data.sort((a, b) => a.id - b.id));
          setAllCompanies(fetchedCompanies.slice(0, itemsPerPage));
          fetchIncomes();
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
        });
    };

    const fetchIncomes = async () => {
      setIsLoading(true);
      for (const company of fetchedCompanies) {
        await fetch(`https://recruitment.hal.skygate.io/incomes/${company.id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const [totalIncome, avgIncome, lastMonthIncome] = handleIncomes(
              data
            );

            fetchedCompaniesWithIncomes.push({
              ...company,
              totalIncome,
              avgIncome,
              lastMonthIncome,
            });

            progressUpdate(
              fetchedCompanies,
              fetchedCompaniesWithIncomes,
              setProgress
            );
          })
          .catch(() => {
            setError(true);
            setIsLoading(false);
          });

        //load first page
        if (fetchedCompaniesWithIncomes.length === itemsPerPage) {
          setAllCompanies(fetchedCompaniesWithIncomes);
        }
      }
      setAllCompanies(fetchedCompaniesWithIncomes);
      setIsLoading(false);
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
          setCurrentPage={setCurrentPage}
          error={error}
        />

        <Pagination
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          recordsAmount={allCompanies.length}
        />

        <LoadingModal
          condition={isLoading}
          text={`Loading data... ${progress}%`}
        />
      </div>
    </div>
  );
}

export default App;
