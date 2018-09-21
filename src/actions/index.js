import {
    SAVE_TO_CART,
    REMOVE_FROM_CART,
    HANDLE_CHANGE,
    INIT_ADDRESS_FORM,
    RESET_ADDRESS_FORM,
    SET_ADDRESS,
    AUTHENTICATE,
    LOGOUT,
    AUTH_ERROR,
    SET_PRODUCT_LIST,
    SET_CATEGORY_LIST
} from "./../constants/action-types";

import {authenticateUser, redirectTo} from "./../utils";
import {api} from "./../services/api";
import {LOGIN_URL, LOGOUT_URL, REGISTER_URL} from "./../constants/urls";

export const saveToCart = payload => ({type: SAVE_TO_CART, payload})

export const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload})

export const handleChange = payload => ({type: HANDLE_CHANGE, payload})

export const initAddressFrom = payload => ({type: INIT_ADDRESS_FORM, payload})

export const resetAddressForm = () => ({type: RESET_ADDRESS_FORM})

export const setAddress = payload => ({type: SET_ADDRESS, payload})

export const setProductList = payload => ({type: SET_PRODUCT_LIST, payload})

export const setCategoryList = payload => ({type: SET_CATEGORY_LIST, payload})

export const registerUser = payload => {
    return dispatch => {
        authenticateUser(dispatch, payload, REGISTER_URL)
    }
}

export const loginUser = payload => {
    return dispatch => {
        authenticateUser(dispatch, payload, LOGIN_URL)
    }
}

export const checkAuthentication = token => {
    console.log(token);
}

export const logoutUser = token => {
    return async dispatch => {
        try {
            const headers = {
                "x-auth": token
            }
            const response = await api(LOGOUT_URL, "DELETE", {}, headers);
            redirectTo("auth");
            dispatch({
                type: LOGOUT
            });
        } catch (e) {
            alert(e.message);
            dispatch({
                type: AUTH_ERROR,
                error: e.message
            })
        }
    }
}
