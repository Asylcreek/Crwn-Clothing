export const addItemToCart = (cartItems, newCartItem) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === newCartItem.id
    );

    if (existingCartItem)
        return cartItems.map((cartItem) =>
            cartItem.id === newCartItem.id ?
            {...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        );

    return [...cartItems, {...newCartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) =>
    cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);

export const deleteItemFromCart = (cartItems, itemToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToDelete.id
    );

    if (existingCartItem.quantity > 1)
        return cartItems.map((cartItem) => {
            if (cartItem.id === itemToDelete.id) {
                return {...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });

    return removeItemFromCart(cartItems, existingCartItem);
};