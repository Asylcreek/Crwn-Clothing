import CartActionTypes from './cart.types';
import {
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SHOW_CART:
            return {...currentState, hidden: !currentState.hidden };
        case CartActionTypes.ADD_ITEMS_TO_CART:
            return {
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...currentState,
                cartItems: removeItemFromCart(currentState.cartItems, action.payload),
            };
        case CartActionTypes.DELETE_ITEM_FROM_CART:
            return {
                ...currentState,
                cartItems: deleteItemFromCart(currentState.cartItems, action.payload),
            };
        default:
            return currentState;
    }
};

export default cartReducer;