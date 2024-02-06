import { MdReadMore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Card = (prop) => {
    return (

        <div className="rounded-lg m-7 border-2 shadow-lg overflow-hidden max-h-[500px] w-[300px] hover:-translate-y-2 hover:transition ease-in cursor-pointer">

           <NavLink to={"/countrydetail?name="+`${prop.name}`}> 
           <div className="w-[100%] h-[180px] bg-contain overflow-clip">
                <img className="w-full h-full" src={prop.flag} alt={prop.alt} />
                </div>
                <div className="p-5 leading-8">
                    <h2 className=" font-bold text-2xl my-2">{prop.name.length>=15?prop.name.slice(0,15)+".....":prop.name}</h2>
                    <hr />
                    <p><b>Region : </b>{prop.region}</p>
                    <p><b>Population : </b>{prop.pop.toLocaleString("en-IN")}</p>
                    <p><b>Capital : </b> {prop.capital}</p>
                </div>
                <div className="h-5 mx-3 mb-4 float-end px-3 text-2xl  hover:text-blue-600 ">
                <MdReadMore title="Read more" />
                </div>
                </NavLink>
        </div>
    );
}

export default Card;
