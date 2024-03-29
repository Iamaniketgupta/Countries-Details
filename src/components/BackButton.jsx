import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
    return (
        <>
    <button onClick={()=>history.back()} className= 'dark:bg-slate-700 dark:text-white flex items-center justify-center text-xl border-2 shadow-sm px-3 py-2 rounded-lg font-semibold text-gray-700 hover:text-black '><FaArrowLeft className='mr-2 text-blue-700 hover:text-blue-950' /> Back</button>
        </>
    );
}

export default BackButton;
