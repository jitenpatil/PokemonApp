import React from 'react'

class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHover: false,
            buttonType: ""
        }

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    static buttonStyle = {
        borderRadius: "5px",
        backgroundColor: "#f3f3f3",
        color: "black",
        border: "none",
        height: "40px",
        width: "70px",
        margin: "3px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    };

    static buttonHoverStyle = {
        borderRadius: "5px",
        backgroundColor: "#666363",
        color: "white",
        border: "none",
        height: "40px",
        width: "70px",
        margin: "3px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    };

    mouseEnter(buttonType){
        this.setState({
            isHover:true,
            buttonType: buttonType
        });
    }    

    mouseLeave(){
        this.setState({isHover:false});
    }

    render(){
        return <>
            <button 
                style ={this.state.isHover && this.state.buttonType === 'Previous' ? Pagination.buttonHoverStyle : Pagination.buttonStyle} 
                onClick={ this.props.gotoPrevPage }
                onMouseEnter = {()=>this.mouseEnter("Previous")}
                onMouseLeave = {()=>this.mouseLeave("Previous")}
            >Previous</button>
            <button 
                style ={this.state.isHover && this.state.buttonType === 'Next' ? Pagination.buttonHoverStyle : Pagination.buttonStyle} 
                onClick={ this.props.gotoNextPage }
                onMouseEnter = {()=>this.mouseEnter("Next")}
                onMouseLeave = {()=>this.mouseLeave("Next")}
            >Next</button>
        </>;
    }
}

export default Pagination;

// export default function Pagination({ gotoNextPage, gotoPrevPage}) {
//     return (
//         <>
//             <button onClick={ gotoPrevPage }>Previos</button>
//             <button onClick={ gotoNextPage }>Next</button>
//         </>
//     );
// }