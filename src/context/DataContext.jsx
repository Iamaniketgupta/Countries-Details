import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/all`);
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={
        { filteredData, loading, 
    data ,setFilteredData,setData}
    }>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
