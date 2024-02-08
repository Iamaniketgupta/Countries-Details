
import Switcher from "./Switcher";
import { FcGlobe } from "react-icons/fc";

const Header = () => {
    
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
            <div className=" p-2 flex w-fit 
            flex-nowrap 
            items-center gap-2" >
              <FcGlobe size={30}/> Desh Videsh 
            </div>
              <Switcher/>
        </header>
    );
}

export default Header;
