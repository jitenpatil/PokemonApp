import React from 'react';
import ListNode from '../components/ListNode';

export default function PokemonList({ pokemon, openPokemonDetails }) {

    return (
        <div>
            {pokemon.map((pokemonInfo) => {
                // <div key={p.name} onClick={() =>openPokemonDetails(p.url)}>{p.name}</div>
                return <ListNode key = {pokemonInfo.name} pokemonURL = {pokemonInfo.url} pokemonName = {pokemonInfo.name} pokemonDetails={openPokemonDetails}/>
            })}
        </div>
    );
}