import React from 'react';
import pokemonLogo from '../images/PokemonLogo.png';
import { ThemeContext } from '../context/ThemeContext';

class Header extends React.Component {
    
    constructor(props){
        super(props);
    }

    static contextType = ThemeContext;

    jeet(){
        console.log("Jiten sikhraha hai");
    }

    render(){
        return (
            <>
                <div style={{textAlign:"start", padding:"15px", backgroundColor: this.context.isDarkMode? "#252625":"white", opacity: 0.9}}>
                    <img src={pokemonLogo} alt="A" height="80px"/>
                    <button onClick={this.context.toggleTheme}>{this.context.isDarkMode? "Dark" : "Light"}</button>
                </div>
            </>
            );
        }
    }

export default Header;