
import { ImSad2 } from "react-icons/im";
import { useRouteError } from 'react-router-dom';
import BackButton from './BackButton';

const Error = () => {
    const error = useRouteError();
    return (
        <div className='absolute w-full h-full flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-9xl my-5 font-bold '>{error.status? (error.status ): <ImSad2 className="m-auto text-yellow-300 bg-slate-800 dark:bg-slate-700 rounded-full"/>
}</h2> <p className='text-2xl font-semibold my-5 text-center w-[100%]'>{error.statusText? (error.statusText ): "Might be some issue"}</p>
            </div>
            <BackButton></BackButton>
        </div>
    );
}

export default Error;
