import { PiSunDimFill,PiMoonFill } from "react-icons/pi";
import useDarkMode from "../hooks/userDarkMode";


export default function Switcher() {
    const [colorTheme, setTheme] = useDarkMode();

    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };

    return (
        <>
            {
            colorTheme === "dark" ? <PiMoonFill 
            onClick={toggleDarkMode}
            size={30}
            className="cursor-pointer"
            title="Dark Mode"
            />
            : <PiSunDimFill onClick={toggleDarkMode}
            size={30}
            className="cursor-pointer"
            title="Light Mode"
            />
            }


        </>
    );
}