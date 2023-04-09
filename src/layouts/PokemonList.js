import React from 'react';
import ListNode from '../components/ListNode';


// CLASS COMPONENT

class PokemonList extends React.Component {
    constructor(props){
        super(props);
        this.getPokemonID = this.getPokemonID.bind(this);
    }

    getPokemonID(url){
        let pokeID = url.split("pokemon/"); 
        let lengthofID = pokeID[1].length-1;
        return pokeID[1].substring(0, lengthofID);
    }

    render(){
        return <>
            {this.props.pokemon.map((pokemonInfo)=>{
                return  <ListNode 
                            key = {pokemonInfo.name} 
                            pokemonID = {this.getPokemonID(pokemonInfo.url)}
                            pokemonURL = {pokemonInfo.url}
                            pokemonName = {pokemonInfo.name}
                            pokemonDetails = {this.props.openPokemonDetails}
                        />
            })}
        </>;
    }
}

export default PokemonList;


// FUNCTION COMPONENT


// export default function PokemonList({ pokemon, openPokemonDetails }) {


//     const getPokemonID = function (url){
//         let pokeID = url.split("pokemon/"); 
//         let lengthofID = pokeID[1].length-1;
//         return pokeID[1].substring(0, lengthofID);
//     }

//     return (
//         <div>
//             {pokemon.map((pokemonInfo) => {
//                 // <div key={p.name} onClick={() =>openPokemonDetails(p.url)}>{p.name}</div>
//                 return <ListNode 
//                             key = {pokemonInfo.name} 
//                             pokemonID = {getPokemonID(pokemonInfo.url)} 
//                             pokemonURL = {pokemonInfo.url} 
//                             pokemonName = {pokemonInfo.name} 
//                             pokemonDetails={openPokemonDetails}
//                         />
//             })}
//         </div>
//     );
// }