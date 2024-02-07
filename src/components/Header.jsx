import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
const Header = () => {

        const [darkMode, setDarkMode] = useState(false);
        useEffect(() => {
          document.documentElement.classList.toggle('dark', darkMode);
          localStorage.setItem("darkMode", darkMode);
        }, [darkMode]);

        useEffect(() => {
          const savedDarkMode = localStorage.getItem("darkMode");
          if(savedDarkMode){
            setDarkMode(savedDarkMode);
          }
          else{
            return;
          }
            }, []);
      
      
        const changeMode = () => {
          setDarkMode(prevMode => !prevMode);
        };
    
    return (
        <header className="
        text-slate-800
        dark:text-white
        dark:bg-slate-700
        flex 
        justify-around 
        items-center
       bg-slate-50
         h-14 w-[full]
        text-lg font-bold"  >
            <div className=" p-2" >Countries Waale</div>
            <button className="w-fit h-fit p-2 mx-2" onClick={changeMode}>{darkMode ? <FaSun className="text-2xl" />
                : <BsFillMoonStarsFill className="text-2xl" />}</button>
        </header>
    );
}

export default Header;
