import axios from 'axios';
import React from 'react';
import Pagination from '../components/Pagination';
import PokemonList from './PokemonList';

class RightNavigationPane extends React.Component {
   
    render(){
        return <>
            <div>
                <PokemonList 
                    pokemon={this.props.pokemonList}
                    openPokemonDetails = {this.props.openPokemonDetails}
                />
                <Pagination
                    gotoNextPage={this.props.gotoNextPage}
                    gotoPrevPage={this.props.gotoPrevPage}
                />
            </div>
        </>;
    }
}

export default RightNavigationPane;