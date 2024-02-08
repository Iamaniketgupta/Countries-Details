

const CountriesDetailsShimmer = () => {


    return (
        <div className="w-full h-full flex flex-wrap items-center justify-center">
            <div className="flex-1 max-w-[700px] min-w-[300px] h-[400px] mx-5 bg-gray-400 dark:bg-slate-600 rounded-lg"></div>
            <div className=" flex-1 flex flex-col m-3 p-3 max-w-[600px] h-[400px] rounded-lg bg-gray-200 dark:bg-slate-300 justify-center">
                <div className="h-12 w-[85%] rounded-md m-3 bg-gray-600 dark:bg-slate-600"></div>
                <div className="w-[90%]">
                    <hr />
                    <div className="h-6 rounded-sm bg-gray-600 m-5 dark:bg-slate-600"></div>
                    <div className="rounded-sm h-6 m-5 bg-gray-600 dark:bg-slate-600"></div>
                    <div className="rounded-sm h-6 m-5 bg-gray-600 dark:bg-slate-600"></div>
                </div>
                <div className="flex mt-7 gap-3 mx-3">
                    <div className="w-10 h-5 rounded-sm bg-gray-600 dark:bg-slate-600"></div>
                    <div className="w-10 h-5 rounded-sm bg-gray-600 dark:bg-slate-600"></div>
                    <div className="w-10 h-5 rounded-sm bg-gray-600 dark:bg-slate-600"></div>
                    <div className="w-10 h-5 rounded-sm bg-gray-600 dark:bg-slate-600"></div>
                </div>
            </div>



        </div>
    );
}

export default CountriesDetailsShimmer;
