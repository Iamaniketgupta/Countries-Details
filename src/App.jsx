
import './App.css'
import { FaSearch } from "react-icons/fa";
import Card from './components/Card';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const API_URL = "https://restcountries.com/v3.1";

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData(name, region) {
      setLoader(true);
      try {
        const response = await axios.get(`${API_URL}${name ? `/name/${name}` : region ? `/region/${region}` : `/all`}`);

        setData(response.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoader(false);
    }

    fetchData();

  }, []);


  return (
    <div className='relative *:box-border'>
      <Header></Header>
      <main className='absolute w-full flex flex-wrap justify-center items-center'>

        <section className='flex justify-evenly w-full flex-wrap mx-10 items-center'>

          <div className='w-[300px] h-11 m-5 shadow-lg rounded-md flex items-center'>
            <FaSearch className='w-[20px] mx-2' />
            <input type="search" className='focus:outline-none px-3 w-[100%] h-[100%]' placeholder='Search for any country...' />
          </div>

          <div className='w-[250px] h-11 m-5 shadow-lg rounded-md overflow-hidden'>
            <select name="region" className='w-[100%] h-[100%] px-3 bg-inherit focus:outline-none cursor-pointer'>
              <option hidden>Filter By Region</option>
              <option value="all" default>All</option>

              {
              
              data.map(country => country.region)
              .filter((region, index, self) => self.indexOf(region) === index)
                .map((region, index) => (
                  <option key={index} value={region} >
                    {region}
                  </option>
                ))
              }

            </select>
          </div>

        </section>

        {
          loader?(<div className='mt-10 text-md'>
                      Loading...
          </div>):
          data.map((country, index) => (
            <Card
              key={index}
              name={country.name.common}
              pop={country.population}
              capital={country.capital}
              flag={country.flags.svg}
              region={country.region}
            />
          ))
        }


      </main>
    </div>
  )
}

export default App;
