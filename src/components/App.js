import React, {useState, useEffect} from 'react';
import '../styles/global.scss';
import Table from './Table/Table';
import SearchBar from './SearchBar/SearchBar';
import Pagination from './Pagination/Pagination';

function App() {
  const [companies, setCompanies] = useState(dummArray);
  const [error, setError] = useState(false);
  const [itemsPerPage] = useState(5);

  // useEffect(() => {
  //   fetch('https://recruitment.hal.skygate.io/companies')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCompanies(data);
  //     })
  //     .catch((error) => {
  //       setError(true);
  //     });
  // }, []);

  return (
    <div className="App">
      <SearchBar />
      <Table companies={companies.slice(0, itemsPerPage)} />
      <Pagination />
    </div>
  );
}

const dummArray = [
  {
    id: 39,
    name: 'Robel, Nicolas and McKenzie',
    city: 'Port Heidifurt',
  },
  {
    id: 206,
    name: 'Cormier and Sons',
    city: 'Port Earlene',
  },
  {
    id: 175,
    name: 'Anderson, Champlin and Bartell',
    city: 'Jaydefurt',
  },
  {
    id: 273,
    name: 'Schmeler, Zulauf and Ruecker',
    city: 'East Melisa',
  },
  {
    id: 2,
    name: 'Franecki, Torphy and Lesch',
    city: 'Port Halle',
  },
  {
    id: 93,
    name: 'Grady - Carter',
    city: 'Wolfview',
  },
  {
    id: 21,
    name: 'Price Inc',
    city: 'Port Khalilbury',
  },
  {
    id: 138,
    name: 'Wilderman Group',
    city: 'West Einoview',
  },
  {
    id: 110,
    name: 'Bahringer - Dickinson',
    city: 'New Eduardotown',
  },
  {
    id: 38,
    name: 'Bechtelar - Nikolaus',
    city: 'Dorachester',
  },
  {
    id: 74,
    name: 'Lynch - Hamill',
    city: 'East Hesterville',
  },
  {
    id: 128,
    name: 'Hammes and Sons',
    city: 'South Samirside',
  },
  {
    id: 292,
    name: "Carroll, O'Conner and Bahringer",
    city: 'East Rose',
  },
  {
    id: 174,
    name: 'Morar Inc',
    city: 'Rippinborough',
  },
  {
    id: 293,
    name: 'Goldner - Bernhard',
    city: 'South Milo',
  },
  {
    id: 94,
    name: 'Walker LLC',
    city: 'East Donnytown',
  },
  {
    id: 137,
    name: 'Tremblay, Lockman and Auer',
    city: 'New Domingo',
  },
  {
    id: 56,
    name: 'Buckridge - Rodriguez',
    city: 'Gilbertburgh',
  },
  {
    id: 171,
    name: 'Marquardt - Kuhlman',
    city: 'South Merrittburgh',
  },
  {
    id: 114,
    name: 'Russel, Watsica and Blick',
    city: 'Strackehaven',
  },
  {
    id: 189,
    name: 'Kuvalis Inc',
    city: 'Cotymouth',
  },
  {
    id: 34,
    name: 'Kiehn - Klocko',
    city: 'East Frederikmouth',
  },
  {
    id: 211,
    name: 'Mitchell Inc',
    city: 'Hyattville',
  },
  {
    id: 57,
    name: 'Franecki and Sons',
    city: 'Satterfieldside',
  },
  {
    id: 158,
    name: 'Schuster - Nienow',
    city: 'East Dalton',
  },
  {
    id: 223,
    name: 'Stehr, Sawayn and Schimmel',
    city: 'Port Gonzaloport',
  },
  {
    id: 91,
    name: 'Schuster Inc',
    city: 'South Edmundport',
  },
  {
    id: 115,
    name: 'Larson - Yost',
    city: 'Port Hannahborough',
  },
  {
    id: 9,
    name: 'Kreiger, Trantow and Schuster',
    city: 'New Wymanport',
  },
  {
    id: 173,
    name: 'Hane, Beier and Hills',
    city: 'Bernardofort',
  },
  {
    id: 255,
    name: 'Wunsch and Sons',
    city: 'Port Darlene',
  },
  {
    id: 251,
    name: 'Goldner, Turner and Baumbach',
    city: 'South Giahaven',
  },
  {
    id: 157,
    name: 'Fisher - Nolan',
    city: 'Schoenmouth',
  },
  {
    id: 112,
    name: 'Dach - Welch',
    city: 'Johnsonfurt',
  },
  {
    id: 180,
    name: 'Tremblay - Schmitt',
    city: 'Ankundingchester',
  },
  {
    id: 233,
    name: 'Kiehn, Jerde and Cruickshank',
    city: 'Dickifort',
  },
  {
    id: 286,
    name: 'Kulas, Monahan and Kihn',
    city: 'New Lianashire',
  },
  {
    id: 113,
    name: 'Becker - White',
    city: 'Leannonside',
  },
  {
    id: 127,
    name: 'Keeling - Kub',
    city: 'Turnerville',
  },
  {
    id: 241,
    name: 'Lockman and Sons',
    city: 'North Devynborough',
  },
  {
    id: 116,
    name: 'Kunde - Crooks',
    city: 'Chesleyshire',
  },
  {
    id: 150,
    name: 'Orn, Wolff and Conroy',
    city: 'Wehnerland',
  },
  {
    id: 32,
    name: 'Brekke Inc',
    city: 'South Aniyahtown',
  },
  {
    id: 141,
    name: 'Cummings, Lockman and Schiller',
    city: 'North Juanitafurt',
  },
  {
    id: 70,
    name: 'Lemke, Champlin and Turner',
    city: 'West Terry',
  },
  {
    id: 13,
    name: 'Schneider and Sons',
    city: 'Opheliashire',
  },
  {
    id: 268,
    name: 'Fahey, Emard and Heller',
    city: 'Binsmouth',
  },
  {
    id: 124,
    name: 'Boehm, Marks and Kassulke',
    city: 'Bruenfurt',
  },
  {
    id: 123,
    name: 'Carroll - Bruen',
    city: 'Wintheiserfort',
  },
  {
    id: 106,
    name: 'Bosco, Okuneva and Spinka',
    city: 'Runolfsdottirhaven',
  },
  {
    id: 88,
    name: 'Swift Inc',
    city: 'North Silas',
  },
  {
    id: 220,
    name: 'Quigley, Conroy and Moore',
    city: 'North Esta',
  },
  {
    id: 225,
    name: "O'Hara LLC",
    city: 'Lake Margarettberg',
  },
  {
    id: 95,
    name: 'White LLC',
    city: 'Johnathonmouth',
  },
  {
    id: 76,
    name: 'Conroy - Simonis',
    city: 'South Vida',
  },
  {
    id: 192,
    name: 'Gaylord, Satterfield and Muller',
    city: 'Lake Rico',
  },
  {
    id: 23,
    name: 'Hirthe, Durgan and Aufderhar',
    city: 'South Randallfort',
  },
  {
    id: 217,
    name: 'Paucek, Prosacco and Kreiger',
    city: 'Ewaldchester',
  },
  {
    id: 109,
    name: 'Hickle, Ziemann and Klein',
    city: 'Dickensport',
  },
];

export default App;
