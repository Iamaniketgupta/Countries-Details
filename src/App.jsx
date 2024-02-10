
import './App.css'
import Card from './components/Card';
import Header from './components/Header';
import { useContext, useState } from 'react';
import { DataContext } from './context/DataContext';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import CountriesListShimmer from './components/CountriesListShimmer';

function App() {
  const { filteredData, loading, data ,setFilteredData, } = useContext(DataContext);

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
           ></FilterBox>
        </section>
        {
          loading ? 
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
