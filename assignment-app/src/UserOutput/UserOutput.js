import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput" onClick={props.clickOn}>
            <p className="apple">Box Name: {props.message}</p>
            <p className="apple">{props.userName}</p>
        </div>
    );
}

export default UserOutput;