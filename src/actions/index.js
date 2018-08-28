import {SAVE_TO_CART, REMOVE_FROM_CART} from "./../constants/action-types";

export const saveToCart = (payload) => {
    return {
        type: SAVE_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}
