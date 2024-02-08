import { useState, useEffect } from "react";
 
 function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    useEffect(() => {
        const root = window.document.documentElement; //i.e html
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme, colorTheme]);
 
    return [colorTheme, setTheme];
}

export default useDarkMode;