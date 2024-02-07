
const FilterBox = (prop) => {
    return (
        <div className='dark:bg-slate-700 dark:text-white w-[250px] h-11 m-5 shadow-lg rounded-md overflow-hidden text-slate-800'>
        <select onChange={prop.filterByRegion} name="region" className='w-[100%] h-[100%] px-3 bg-inherit focus:outline-none cursor-pointer'>
        <option hidden>Filter By Region</option>
            <option value="all" >All</option>
          {
            prop.loader ? (<option hidden>Loading...</option>)
             :
              prop.data.map(country => country.region)
                .filter((region, index, selfarr) => selfarr.indexOf(region) === index)
                .map((region, index) => (
                  <option key={index} value={region} >
                    {region}
                  </option>
                ))
          } 

        </select>
      </div>
    );
}

export default FilterBox;
