import { FaSearch } from "react-icons/fa";

const SearchBox = (prop) => {
    return (
        <div className='w-[300px] h-11 m-5 shadow-lg rounded-md flex items-center'>
        <FaSearch className='w-[20px] mx-2' />
        <input type="search" onChange={prop.searchByName} className='focus:outline-none px-3 w-[100%] h-[100%]' placeholder='Search for any country...' />
      </div>

    );
}

export default SearchBox;
