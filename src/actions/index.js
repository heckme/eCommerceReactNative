import {
    SAVE_TO_CART,
    REMOVE_FROM_CART,
    HANDLE_CHANGE,
    INIT_ADDRESS_FORM,
    RESET_ADDRESS_FORM,
    SET_ADDRESS,
    AUTHENTICATE,
    LOGOUT
} from "./../constants/action-types";

import {redirectTo} from "./../utils";
import {api} from "./../services/api";
import {LOGIN_URL, LOGOUT_URL} from "./../constants/urls";

export const saveToCart = payload => ({type: SAVE_TO_CART, payload})

export const removeFromCart = payload => ({type: REMOVE_FROM_CART, payload})

export const handleChange = payload => ({type: HANDLE_CHANGE, payload})

export const initAddressFrom = payload => ({type: INIT_ADDRESS_FORM, payload})

export const resetAddressForm = () => ({type: RESET_ADDRESS_FORM})

export const setAddress = payload => ({type: SET_ADDRESS, payload})

export const loginUser = payload => {
    return async dispatch => {
        try {
            const response = await api(LOGIN_URL, "POST", payload);
            if(response.status === 200 && response.headers.get("x-auth")) {
                const token = response.headers.get("x-auth");
                const user = await response.json();
                if(user) {
                    redirectTo("app");
                    dispatch({
                        type: AUTHENTICATE,
                        user,
                        token
                    });
                } else {
                    throw new Error("Error. Please try again");
                }
            } else {
                throw new Error("Invalid User");
            }
        } catch (e) {
            alert(e);
            dispatch({
                type: LOGOUT
            });
        }
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
            console.log(token);
            const response = await api(LOGOUT_URL, "DELETE", {}, headers);
            redirectTo("auth");
            dispatch({
                type: LOGOUT
            });
        } catch (e) {
            alert(e.message)
        }
    }
}
