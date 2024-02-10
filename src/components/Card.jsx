import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = (prop) => {
 
    return (

        <div className="dark:bg-slate-700 dark:border-gray-600 rounded-lg m-7 border-2 shadow-lg overflow-hidden max-h-[500px] w-[300px] hover:-translate-y-2 hover:transition ease-in cursor-pointer">

           <Link to={`/${prop.country.name.common}`} state={prop.country}> 
           <div className=" w-[100%] h-[180px] bg-contain overflow-clip">
                <img className="w-full h-full" src={prop.country.flags.png} alt={prop.country.flags.alt} />
                </div>
                <div className="p-5 leading-8 ">
                    <h2 className=" font-bold text-2xl my-2">{prop.country.name.common.length>=15?prop.country.name.common.slice(0,15)+".....":prop.name}</h2>
                    <div className="w-full h-[1px] bg-slate-300 dark:bg-slate-600"></div>
                    <p><b>Region : </b>{prop.country.region}</p>
                    <p><b>Population : </b>{prop.country.population.toLocaleString("en-IN")}</p>
                    <p><b>Capital : </b> {prop.country.capital}</p>
                </div>
                <div className="h-5 mx-3 mb-4 float-end px-3 text-2xl  hover:text-blue-600 ">
                <MdReadMore title="Read more" />
                </div>
                </Link>
        </div>
    );
}

export default Card;
