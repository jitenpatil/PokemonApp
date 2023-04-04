//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Header from './layouts/Header';
import MainBodyContainer from './layouts/MainBodyContainer';
import { ThemeContext } from './context/ThemeContext';


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
                <ThemeContext.Provider value={{isDarkMode:this.state.isDarkMode, toggleTheme: this.toggleTheme}}>
                    <Header/>
                    <MainBodyContainer/>
                </ThemeContext.Provider>
            </>
            
        );
    }
}



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById('app'));