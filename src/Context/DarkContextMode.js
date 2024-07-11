import { createContext, useEffect, useState } from "react";


export const DarkContextMode = createContext()

export const DarkContextModeProvider = ({children}) =>{    
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
        );

        const toggle = () => {
            setDarkMode(!darkMode) 
        } 
        
        useEffect(() => {
            localStorage.setItem("darkMode" , darkMode)
        },[darkMode]);
        
        return(
            <DarkContextMode.Provider value={{darkMode, toggle}}>
                {children}
            </DarkContextMode.Provider>
        )
}