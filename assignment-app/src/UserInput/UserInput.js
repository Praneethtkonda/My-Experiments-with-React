import React from 'react';
import Radium from 'radium';

const UserInput = (props) => {
    const styleOne = {
        width: "50%",
        border: "1px solid grey",
        padding: "2em",
        borderRadius: "26px",
        marginBottom: "10px",
        ":hover": {
            border: "9px solid grey"
        }
    }
    const styleTwo = {
        width: "50%",
        border: "8px solid grey",
        padding: "2em",
        borderRadius: "26px",
        marginBottom: "10px"
    }
    const style = props.isStyleNeeded ? styleOne: styleTwo;
    return (
        <div className="UserInput">
            <input style={style} onChange={props.typed} value={props.oldInput} />
        </div>
    );
}

export default Radium(UserInput);