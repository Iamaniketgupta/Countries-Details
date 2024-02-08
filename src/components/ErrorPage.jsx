

import { useRouteError } from 'react-router-dom';
import BackButton from './BackButton';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='absolute w-full h-full flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-9xl my-5 font-bold'>{error.status}</h2> <p className='text-2xl font-semibold my-5 text-center w-[100%]'>{error.statusText}</p>
            </div>
            <BackButton></BackButton>
        </div>
    );
}

export default Error;
