import React from 'react'
import pokemonLogo from '../images/PokemonLogo.png'

export default function Header() {
    return (
        <>
            <div style={{textAlign:"center", margin:"15px"}}>
                <img src={pokemonLogo} alt="A" height="80px"/>
            </div>
        </>
    );
}