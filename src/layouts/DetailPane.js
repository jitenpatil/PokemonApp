import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { typeTheme } from '../theme/type';

// CLASS COMPONENT

class DetailPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonURL: "https://pokeapi.co/api/v2/pokemon/1/",
            pokemonImageURL: "",
            shinyPokemonImageURL: "",
            pokemonName: "",
            pokemonTypes: [],
            isShiny: false
        }
    }

    componentDidMount(){
        console.log("Detail Pane - Component Did Mount");
        axios.get(this.state.pokemonURL).then(response => {
            //console.log(response.data);
            this.setState({
                pokemonImageURL: response.data.sprites.other['official-artwork'].front_default,
                shinyPokemonImageURL: response.data.sprites.other['official-artwork'].front_shiny,
                pokemonName: response.data.species.name,
                pokemonTypes: response.data.types
            });
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Detail Pane - Component Did Update");
        if(prevProps.currentPokemonUrl !== this.props.currentPokemonUrl){
            axios.get(this.props.currentPokemonUrl || this.state.pokemonURL).then(response => {
                console.log("POKEMON",response.data);
                this.setState({
                    pokemonImageURL: response.data.sprites.other['official-artwork'].front_default,
                    shinyPokemonImageURL: response.data.sprites.other['official-artwork'].front_shiny,
                    pokemonName: response.data.species.name,
                    pokemonTypes: response.data.types
                });
            });
        }
    }


    static typeStyle = {
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"center", 
                    height:"30px", 
                    width:"100px", 
                    borderRadius:"3px",
                    fontWeight: "bold",
                    marginRight:"10px",
                    fontFamily:"Calibri"
    };


    render(){
        return <>
            <img src={this.state.isShiny ? this.state.shinyPokemonImageURL : this.state.pokemonImageURL} height="250px"/>
            <p>{this.state.pokemonName.toUpperCase()}
                <button onClick={()=>{this.setState({isShiny: !this.state.isShiny})}}>
                    {this.state.isShiny ? "Shiny": "Normal"}
                </button>
            </p>
            <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>
                {this.state.pokemonTypes.map(type=>{
                    return <div style={{...DetailPane.typeStyle, ...typeTheme[type.type.name.toUpperCase()]}}>
                        {type.type.name.toUpperCase()}
                    </div>
                })}
            </div>
        </>;
    }
}

export default DetailPane;


// FUNCTION COMPONENT

// export default function DetailPane({currentPokemonImageUrl}) {

//     return (
//         <>
//             <div>
//                 <img src={currentPokemonImageUrl}/>
//             </div>
//         </>
//     );
// }