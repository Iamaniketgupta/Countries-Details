
import './App.css'
import Card from './components/Card';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import CountriesListShimmer from './components/CountriesListShimmer';

function App() {
  const API_URL = "https://restcountries.com/v3.1";

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      try {
        const response = await axios.get(API_URL+"/all");

        setData(response.data);
        setFilteredData(response.data);
        setLoader(false);

      } catch (error) {
        // console.error("Error fetching data:", error);
        setLoader(false);
      }
    }

    fetchData();

  }, []);


  // filter by region

  function filterByRegion(e) {
    const region = e.target.value.toLowerCase();
    if (region === 'all') {
      setFilteredData(data);
    } else {
      const filteredCountries = data.filter(country =>
        country.region.toLowerCase().includes(region)
      );
      setFilteredData(filteredCountries);
    }
  }


  // search by name feature

  const [countryName, setCountryName] = useState('');
  function searchByName(e) {

    setCountryName(e.target.value.toLowerCase())

    setFilteredData(() =>
      data.filter((country) =>
        country.name.common.toLowerCase().includes(countryName)
      ))
  }

  return (
    <div className='relative *:box-border'>
      <Header></Header>
      <main className='absolute w-full flex flex-wrap justify-center items-center'>
        <section className='flex justify-evenly w-full flex-wrap mx-10 items-center'>
          <SearchBox searchByName={searchByName}></SearchBox>
           <FilterBox 
           filterByRegion={filterByRegion}
           data={data}
           loader={loader}
           ></FilterBox>
        </section>
        {
          loader ? 
          (
            new Array(20).fill().map((_, idx) => <CountriesListShimmer key={idx} />)
          )
           :

            filteredData.map((country, index) => (
              <Card
                key={index}
                country={country}
              />
            ))
        }

      </main>
    </div>
  )
}

export default App;
