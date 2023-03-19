//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Header from './layouts/Header';
import MainBodyContainer from './layouts/MainBodyContainer';


class App extends React.Component {

    render(){
        return (
            <>
                <Header/>
                <MainBodyContainer/>
            </>
            
        );
    }
}



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById('app'));