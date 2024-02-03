import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
const Header = () => {
    const [mode, setMode] = useState("Light");

    function changeMode() {
        if (mode === "Dark")
            setMode("Light");
        else
            setMode("Dark");

    }
    return (
        <header className="flex 
        justify-around 
        items-center
       bg-slate-100
         h-14 w-full
        text-lg font-semibold"  >
            <div className=" p-2">Countries Waale</div>
            <button className="w-fit h-fit p-2 mx-2" onClick={changeMode}>{mode === "Dark" ? <FaSun />
                : <BsFillMoonStarsFill />}</button>
        </header>
    );
}

export default Header;
