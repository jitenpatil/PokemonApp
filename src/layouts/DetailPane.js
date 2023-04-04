import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { typeTheme } from '../theme/type';
import jsPDF from 'jspdf';
import bulbasaur from '../images/1.png';
import charmender from '../images/4.png';
import squirtle from '../images/7.png';

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
        this.pdfDownload = this.pdfDownload.bind(this);
        this.convertImageToBase64 = this.convertImageToBase64(this);
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
        if(prevProps.currentPokemonUrl !== this.props.currentPokemonUrl){
            console.log("Detail Pane - Component Did Update");
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

    convertImageToBase64(imgUrl) {
        return new Promise((resolve, reject)=>{
            const image = new Image();
            image.crossOrigin='anonymous';
            image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            ctx.drawImage(image, 0, 0);
            const dataUrl = canvas.toDataURL();
            //callback && callback(dataUrl)
            resolve(dataUrl);
            }
            image.src = imgUrl;
        });
    }

    async pdfDownload(){

        let getImage1 = this.convertImageToBase64(bulbasaur);
        console.log("Tht", this);
        const doc = new jsPDF();
        doc.text("Jiten", 5, 5);
        debugger
        let image1Url = await getImage1;
        // let image2Url = await this.convertImageToBase64(charmender);
        // let image3Url = await this.convertImageToBase64(squirtle);
        // console.log("A:",image1Url, "B:",image2Url, "C:", image3Url );
        doc.addImage(image1Url, 10, 10, 5, 5);
        // doc.addImage(image2Url, 15, 15, 5, 5);
        // doc.addImage(image3Url, 20, 20, 5, 5);
        doc.save("pokemon.pdf");
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
        let that =this;
        return <>
            {/* <button onClick={this.pdfDownload}>PDF download</button> */}
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