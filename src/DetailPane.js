import React, { useEffect, useState } from 'react';

export default function DetailPane({currentPokemonImageUrl}) {

    return (
        <>
            <div>
                <img src={currentPokemonImageUrl}/>
                
            </div>
        </>
    );
}