import CartActionTypes from './cart.types';

export const toggleShowCart = () => ({
    type: CartActionTypes.SHOW_CART,
});

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART,
    payload: item,
});

export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
});

export const deleteItemFromCart = (item) => ({
    type: CartActionTypes.DELETE_ITEM_FROM_CART,
    payload: item,
});