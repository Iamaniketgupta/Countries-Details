import { useEffect, useState } from "react";
import Header from "./Header";
import BackButton from "./BackButton";
import { useLocation } from "react-router-dom";
import CountriesDetailsShimmer from "./CountriesDetailsShimmer";

const CardDetails = () => {
    const [response, setResponse] = useState([]);
    const [loader, setLoader] = useState(true);

    const {state}= useLocation();
    
    useEffect(() => {
        function fetchData() {
            try {
                setLoader(true);                
                setResponse(state);
                setLoader(false);
                
            } catch (error) {
                setLoader(false); 
            }
        }
        if(state)
        fetchData();
}, []);

    return (
        <>
          
            <main className="w-full absolute"> 
            <Header />
            <div className="w-[100px] h-fit m-10">
                <BackButton />
            </div>

            {
                loader? <CountriesDetailsShimmer/> :
           
                <div className="flex w-[full] h-[full] items-center justify-center flex-wrap p-5 m-auto gap-10">
                    <div className="max-w-[600px] bg-cover rounded-md overflow-clip">
                        <img src={`${response.flags.svg}`} alt={`${response.flags.alt}`} />
                    </div>
                    <div className="p-3 mx-5 max-w-[600px] min-w-[300px] leading-10 text-xl font-medium flex-1 flex flex-col justify-center items-center">
                        <h1 className="font-bold text-4xl my-5 px-3 text-left w-full ">{response.name.common}</h1>
                        <div className="flex flex-wrap justify-between w-[100%] p-3">
                            <div className="max-w-[100%]">
                                <hr />
                                <p><b>Official Name :</b> {response.name.official}</p>
                                {/* <p><b>Population :</b> {response.population.toLocaleString("en-IN")}</p> */}
                                <p><b>Region :</b> {response.region}</p>
                                <p><b>Sub Region :</b> {response.subregion}</p>
                                <p><b>Capital :</b> {response.capital}</p>
                                <hr />
                            </div>
                            <div className="max-w-[100%] ">
                                <p><b>Top Level Domain :</b> {response.tld}</p>
                                <p><b>Currency :</b> {response.currencies[Object.keys(response.currencies)[0]].name}</p>
                                <p><b>Language :</b> {response.languages[Object.keys(response.languages)[0]]}</p>
                                {/* <p><b>Border Countries :</b> {response.borders.toLocaleString("IN")}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                 }
            </main>
        </>
    );
}

export default CardDetails;
