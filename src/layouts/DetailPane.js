import React, { useEffect, useState } from 'react';

// CLASS COMPONENT

class DetailPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){

    }

    render(){
        return <>
            <img src={this.props.currentPokemonImageUrl}/>
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