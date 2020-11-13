import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price is <strong>&#8377;{props.price}</strong> /-</p>
        {controls.map((control) => {
            return <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabledInfo[control.type]} />
        })}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.clicked}>Order Now</button>
    </div>
);

export default buildControls;