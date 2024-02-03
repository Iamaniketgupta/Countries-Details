import { useState } from "react";

const Header = () => {
    const [mode, setMode] = useState("Dark");

    function changeMode() {
       mode === "Dark"? setMode("Light"):setMode("Dark");
    }
    return (
        <header className="flex 
        justify-around 
        items-center
         bg-slate-200
         h-14 w-full
           text-lg font-semibold"  >
            <div>Countries Waale</div>
            <div><button onClick={changeMode}>{mode}</button></div>
        </header>
    );
}

export default Header;
