
import './App.css'
import { FaSearch } from "react-icons/fa";
import Card from './components/Card';
import Header from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get("https://restcountries.com/v3.1/all");
          console.log("Success", response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);

  return (
    <div className='relative *:box-border'>
      <Header></Header>
      <main className='absolute w-full flex flex-wrap justify-center items-center'>

        <section className='flex justify-evenly w-full flex-wrap mx-10 items-center'>

          <div className='w-[300px] h-11 m-5 shadow-lg rounded-md flex items-center'>
          <FaSearch className='w-[20px] mx-2'/>
          <input type="search" className='focus:outline-none px-3 w-[100%] h-[100%]' placeholder='Search for any country...'/>
          </div>

          <div className='w-[250px] h-11 m-5 shadow-lg rounded-md overflow-hidden'>
            <select name="region" className='w-[100%] h-[100%] px-3 bg-inherit focus:outline-none cursor-pointer'>
              <option hidden>Filter By Region</option>
              <option >India</option>
              <option >India</option>
              <option >India</option>
            </select>
          </div>

        </section>
        <Card></Card>
      </main>
    </div>
  )
}

export default App;
