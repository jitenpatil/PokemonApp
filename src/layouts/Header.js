import { useContext } from 'react'; 
import React from 'react';
import pokemonLogo from '../images/PokemonLogo.png';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
    
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div style={{textAlign:"start", margin:"15px", backgroundColor: isDarkMode? "black":"white"}}>
                <img src={pokemonLogo} alt="A" height="80px"/>
                <button onClick={toggleTheme}>{isDarkMode? "Dark" : "Light"}</button>
            </div>
        </>
    );
}