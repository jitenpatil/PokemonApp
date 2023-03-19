import axios from 'axios';
import React, { useEffect, useState } from 'react';

// CLASS COMPONENT

class DetailPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonURL: "https://pokeapi.co/api/v2/pokemon/1/",
            pokemonImageURL: ""
        }
    }

    componentDidMount(){
        console.log("Detail Pane - Component Did Mount");
        axios.get(this.state.pokemonURL).then(response => {
            //console.log(response.data);
            this.setState({
                pokemonImageURL: response.data.sprites.other.dream_world.front_default
            });
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Detail Pane - Component Did Update");
        if(prevProps.currentPokemonUrl !== this.props.currentPokemonUrl){
            axios.get(this.props.currentPokemonUrl || this.state.pokemonURL).then(response => {
                //console.log(response.data);
                this.setState({
                    pokemonImageURL: response.data.sprites.other.dream_world.front_default
                });
            });
        }
    }

    render(){
        return <>
            <img src={this.state.pokemonImageURL} height="250px"/>
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