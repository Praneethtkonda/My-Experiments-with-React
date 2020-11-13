import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 15,
    bacon: 20,
    cheese: 15,
    meat: 35
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 39,
            purchasable: false,
            isOrderNowClicked: false
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngrediants = {
            ...this.state.ingredients
        };
        updateIngrediants[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ totalPrice: updatedPrice, ingredients: updateIngrediants });
        this.updatePurchaseState(updateIngrediants);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updateIngrediants = {
            ...this.state.ingredients
        };
        updateIngrediants[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({ totalPrice: updatedPrice, ingredients: updateIngrediants });
        this.updatePurchaseState(updateIngrediants);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients)
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ isOrderNowClicked: true });
    }

    cancelPurchaseHandler = () => {
        this.setState({ isOrderNowClicked: false });
    }

    purchaseContinueHandler = () => {
        console.log(`Order done`);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.isOrderNowClicked} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCanceled={this.cancelPurchaseHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    clicked={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;