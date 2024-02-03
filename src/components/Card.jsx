
const Card = () => {
    return (
        <div className="rounded-lg m-7 border-2 shadow-lg overflow-hidden max-h-[400px] w-[300px] hover:-translate-y-2 hover:transition ease-in cursor-pointer">
            <div className="w-[100%] h-[180px] bg-cover">
                <img className="h-[100%] w-[100%]" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="inde" />
                </div>
                <div className="p-5">
                    <h2 className=" font-bold text-2xl my-2">India</h2>
                    <hr />
                    <p className="my-1"><b>region:</b> South Asia</p>
                    <p className="my-1"><b>population:</b> 320000</p>
                    <p className="my-1"><b>Capital:</b> New Delhi</p>
                </div>
          
        </div>
    );
}

export default Card;
