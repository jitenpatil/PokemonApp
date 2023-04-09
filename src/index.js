//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { ThemeContext } from './context/ThemeContext';
import PokeDex from './pages/PokeDex';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isDarkMode: false
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        this.setState({isDarkMode:!this.state.isDarkMode});
    }

    render(){
        return (
            <>
                <div style={{backgroundColor:this.state.isDarkMode? "#252625":"white", height:"100vh"}}>
                    <ThemeContext.Provider value={{isDarkMode:this.state.isDarkMode, toggleTheme: this.toggleTheme}}>
                        <PokeDex/>
                    </ThemeContext.Provider>
                </div>
            </>
            
        );
    }
}



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById('app'));