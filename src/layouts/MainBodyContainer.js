import React from 'react'
import DetailPane from './DetailPane';
import RightNavigationPane from './RightNavigationPane';
import axios from 'axios';
import jsPDF from 'jspdf';
import { ThemeContext } from '../context/ThemeContext';

// CLASS COMPONENT

class MainBodyContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonList: [],
            currentListURL : "https://pokeapi.co/api/v2/pokemon?limit=6",
            nextPageUrl: "",
            prevPageUrl: ""
        }
        this.gotoNextPage = this.gotoNextPage.bind(this);
        this.gotoPrevPage = this.gotoPrevPage.bind(this);
        this.openPokemonDetails = this.openPokemonDetails.bind(this);
        this.pdfDownload = this.pdfDownload.bind(this);

    }

    componentDidMount(){
        console.log("----Component Did Mount----");
        axios.get(this.state.currentListURL).then(response => {
            //console.log(response.data);
            this.setState({
                pokemonList: response.data.results,
                nextPageUrl: response.data.next,
                prevPageUrl: response.data.previous,
                selectedPokemonURL: ""
            });
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log("----Component Did Update----");
        //console.log("PrevState-",prevState);
        if(prevState.currentListURL){
            //console.log(prevState.currentListURL, this.state.currentListURL);
            if (prevState.currentListURL !== this.state.currentListURL) {
                
                axios.get(this.state.currentListURL).then(response => {
                    //console.log(response.data);
                    this.setState({
                        pokemonList: response.data.results,
                        nextPageUrl: response.data.next,
                        prevPageUrl: response.data.previous
                    });
                });
            }
        }
    }

    gotoNextPage() {
        //console.log(this.state.nextPageUrl);
        this.setState({currentListURL: this.state.nextPageUrl});
        console.log("Go to next page list");
    }

    gotoPrevPage() {
        this.setState({currentListURL: this.state.prevPageUrl});
        console.log("Go to prev page list");
    }

    openPokemonDetails(url){
        this.setState({selectedPokemonURL: url});
        console.log("URL", url);
    }

    static styles = {
        width: "100%",
        border: "solid 2px green",
        display: "flex"
    };

    static contextType = ThemeContext;

    pdfDownload(){
        const doc = new jsPDF();
        doc.text(10, 10, "Jiten");
        doc.save("label.pdf");
    }

    render(){
        return <>
            <div style={{...MainBodyContainer.styles, backgroundColor: this.context.isDarkMode ? "black":"white"}}>
                <div style={{width:"74%"}}>
                    <DetailPane currentPokemonUrl={this.state.selectedPokemonURL}/>
                </div>
                {/* <button onClick={pdfDownload}>Click</button> */}
                <div style={{width:"20%"}}>
                    <RightNavigationPane 
                        pokemonList = {this.state.pokemonList}
                        gotoPrevPage = {this.gotoPrevPage}
                        gotoNextPage = {this.gotoNextPage}
                        openPokemonDetails = {this.openPokemonDetails}
                    />
                </div>  
            </div>
        </>;
    }
}

export default MainBodyContainer;

// FUNCTION COMPONENT

// export default function MainBodyContainer() {
    
//     const styles = {
//         width: "100%",
//         border: "solid 2px green",

//         display: "flex"
//     };

//     return (
//         <>
//             <div style={styles}>
                
//                 <div style={{width:"74%"}}>
//                     <DetailPane/>
//                 </div>
//                 <div style={{width:"20%"}}>
//                     <RightNavigationPane/>
//                 </div>  
//             </div>
//         </>
//     );
// }