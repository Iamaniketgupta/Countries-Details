import { FaSearch } from "react-icons/fa";

const SearchBox = (prop) => {
    return (
        <div className='w-[300px] text-slate-800
        dark:bg-slate-700 dark:text-white h-11 m-5 shadow-lg rounded-md flex items-center'>
        <FaSearch className='text-slate-800 w-[20px] mx-2 dark:text-white' />
        <input type="search" onChange={prop.searchByName} className='focus:outline-none dark:text-white
        dark:bg-slate-600 px-3 w-[100%] h-[100%] font-semibold' placeholder='Search for any country...' />
      </div>

    );
}

export default SearchBox;
