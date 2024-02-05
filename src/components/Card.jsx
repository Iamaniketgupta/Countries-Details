import { MdReadMore } from "react-icons/md";

const Card = (prop) => {
    return (

        <div className="rounded-lg m-7 border-2 shadow-lg overflow-hidden max-h-[500px] w-[300px] hover:-translate-y-2 hover:transition ease-in cursor-pointer">
            <div className="w-[100%] h-[180px] bg-cover">
                <img className="h-[100%] w-[100%]" src={prop.flag} alt="inde" />
                </div>
                <div className="p-5">
                    <h2 className=" font-bold text-2xl my-2">{prop.name.length>=15?prop.name.slice(0,15)+".....":prop.name}</h2>
                    <hr />
                    <p className="my-1"><b>Region : </b>{prop.region}</p>
                    <p className="my-1"><b>Population : </b>{prop.pop.toLocaleString("en-IN")}</p>
                    <p className="my-1"><b>Capital : </b> {prop.capital}</p>
                </div>
                <div className="h-5 mx-3 mb-4 float-end px-3 text-2xl  hover:text-blue-600 ">
                <MdReadMore title="Read more" />
                </div>
        </div>
    );
}

export default Card;
