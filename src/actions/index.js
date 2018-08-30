import {
    SAVE_TO_CART,
    REMOVE_FROM_CART,
    HANDLE_CHANGE,
    INIT_ADDRESS_FORM,
    RESET_ADDRESS_FORM
} from "./../constants/action-types";

export const saveToCart = payload => ({type: SAVE_TO_CART, payload})

export const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload})

export const handleChange = payload => ({type: HANDLE_CHANGE, payload})

export const initAddressFrom = payload => ({type: INIT_ADDRESS_FORM, payload})

export const resetAddressForm = () => ({type: RESET_ADDRESS_FORM})
