//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import PokemonList from './layouts/PokemonList';
import axios from 'axios';
import Pagination from './components/Pagination';
import DetailPane from './layouts/DetailPane';
import Header from './layouts/Header';


const App = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);


    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState();
    const [currentPokemonImageUrl, setCurrentPokemonImageUrl] = useState();
    
    //API call to fetch Pokemon List
    useEffect(() => {
        setLoading(true);
        let cancel;
        axios.get(currentPageUrl+"?limit=5", {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false);
            setPokemon(res.data.results.map(p => ({name: p.name, url: p.url})))
            setNextPageUrl(res.data.next);
            setPrevPageUrl(res.data.previous);
        });

        return () => cancel();
    }, [currentPageUrl]);
      

    

    //API call to fetch Individual Pokemon Information
    useEffect(() => {
        
        let cancel;
        axios.get(selectedPokemonUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => { 
            setCurrentPokemonImageUrl(res.data.sprites.front_default);
        });

        return () => cancel();
    }, [selectedPokemonUrl]);

    function openPokemonDetails(url) {
        setSelectedPokemonUrl(url);
    }
    
    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    if (loading) return "Loading...";

    return (
        <>
            <Header/>
            <PokemonList 
                pokemon={pokemon}
                openPokemonDetails={openPokemonDetails}
            />
            <Pagination 
                gotoNextPage={gotoNextPage}
                gotoPrevPage={gotoPrevPage}
            />
            <DetailPane currentPokemonImageUrl = {currentPokemonImageUrl}/>
        </>
        
    );
}



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById('app'));