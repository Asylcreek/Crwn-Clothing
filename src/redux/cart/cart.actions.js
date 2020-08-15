import CartActionTypes from './cart.types';

export const toggleShowCart = () => ({
    type: CartActionTypes.SHOW_CART,
});

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEMS_TO_CART,
    payload: item,
});