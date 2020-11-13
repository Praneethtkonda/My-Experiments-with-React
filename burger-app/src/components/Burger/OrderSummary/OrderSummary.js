import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map((igkey) => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}
                </li>
            );
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p></p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total Price: &#8377;{props.price}</strong></p>
            <p>Continue to checkout ?</p>
            <Button clicked={props.purchaseCanceled} buttonType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} buttonType="Success">CONTINUE</Button>
        </Aux>
    );
};
export default orderSummary;