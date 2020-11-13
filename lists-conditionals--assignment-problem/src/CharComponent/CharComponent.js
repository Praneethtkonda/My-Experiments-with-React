import React, { Component } from 'react';

class CharComponent extends Component {
    style = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"     
    }
    
    render() {
        // console.log(this.props);
        return (
            <div style={this.style} onClick={this.props.handler}>
                {this.props.typedValue}
            </div>
        );
    }
}

export default CharComponent