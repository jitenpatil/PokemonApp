import React from 'react'

export default function ListNode({pokemonID, pokemonName, pokemonURL, pokemonDetails}) {
    
    const nodeStyle = {
        padding: "15px",
        width: "100%",
        margin: "5px",
        borderRadius: "10px",
        backgroundColor: "#f3f3f3",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContents: "center",
        gap: "10px"
    };

    const fixName = (name) => {
        return name.substring(0,1).toUpperCase() + name.substring(1);
    }
    
    return (
        <>
            <div style= {nodeStyle} onClick={() =>pokemonDetails(pokemonURL)}>
                <img 
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+pokemonID+".svg"} 
                    height="25px"
                />
                {" "}
                {fixName(pokemonName)}    
            </div>
        </>
    );
}