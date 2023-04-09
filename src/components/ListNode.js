import React from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function ListNode({pokemonID, pokemonName, pokemonURL, pokemonDetails}) {
    
    const nodeStyle = {
        padding: "15px",
        margin: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContents: "center",
        gap: "10px",
        opacity: 0.5,
        borderRadius: "5px"
    };

    const fixName = (name) => {
        return name.substring(0,1).toUpperCase() + name.substring(1);
    }
    
    return (
        <>
            <ThemeContext.Consumer>
                {(theme) => (
                    <div style= {{...nodeStyle, backgroundColor: theme.isDarkMode ? "grey":"white"}} onClick={() =>pokemonDetails(pokemonURL)}>
                        <img 
                            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+pokemonID+".svg"} 
                            height="25px"
                        />
                        {" "}
                        {fixName(pokemonName)}    
                    </div>
                )}
            </ThemeContext.Consumer>
        </>
    );
}