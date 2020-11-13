import React from 'react';

const Dropdown = ( props ) => {
    const style = {
        padding: '5px',
        marginBottom: '5px'
    };
    const items = props.items.map((el) => (<option value={el} key={el}>{el}</option>))
    return (
        <div>
             <select style={style} onChange={props.changeHandler}>
                {items}
            </select>
        </div>
    );
};

export default Dropdown;