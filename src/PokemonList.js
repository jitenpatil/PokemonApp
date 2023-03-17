import React from 'react';

export default function PokemonList({ pokemon, openPokemonDetails }) {

    return (
        <div>
            {pokemon.map(p => (
                <div key={p.name} onClick={() =>openPokemonDetails(p.url)}>{p.name}</div>
            ))}
        </div>
    );
}