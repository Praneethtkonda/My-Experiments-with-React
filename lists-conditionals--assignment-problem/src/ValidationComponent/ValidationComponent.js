import React, { Component } from 'react';

class ValidationComponent extends Component {
    displayComponent = "";
    validateLength() {
        if (this.props.inputLength < 5) {
            this.displayComponent = (<p>Too short</p>);
        }
        else if (this.props.inputLength > 20) {
            this.displayComponent = (<p>Too long</p>);
        }
        else {
            this.displayComponent = (<p>Ok length</p>);
        }
    }
    render() {
        this.validateLength();
        return (
            <div>
                {this.displayComponent}
            </div>
        );
    }
}

export default ValidationComponent;