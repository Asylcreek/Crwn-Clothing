import shopData from './shop.data';

const INITIAL_STATE = {
    collections: shopData,
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return currentState;
    }
};

export default shopReducer;