import {Actions, ActionConst} from "react-native-router-flux";
import _ from "lodash";

import {RUPEE} from "./../constants/currency";
import {api} from "./../services/api";
import {AUTHENTICATE, LOGOUT, AUTH_ERROR} from "./../constants/action-types";

export const redirectTo = (scene) => {
    if (Actions.currentScene) Actions.reset(scene);
}

export const navigateTo = (scene, props = null) => {
    props ? Actions.push(scene, props) : Actions[scene].call();
}

export const navigateBack = () => Actions.pop();

export const deleteObjectFromArray = (array, object) => (
  array.filter((item) => (item._id !== object._id))
);

export const renderCurrency = () => (RUPEE);

export const arrayChunking = (num, arr) => {
    const newArr = [];
    let count = 0;
    arr.forEach(el => {
        if(newArr.length > 0 && count % num !== 0) {
            newArr[newArr.length - 1].push(el);
        } else {
            newArr.push([el]);
        }
        count++;
    });
    return newArr;
}

export const calculateDiscount = (p, d) => (p * d / 100);

export const renderOfferPrice = (productsInCart) => {
    const discountedPrice = productsInCart.map(product => {
        if (parseFloat(product.discount) && parseFloat(product.discount) > 0) {
            const discount = calculateDiscount(parseFloat(product.price), parseFloat(product.discount));
            return Math.floor(parseFloat(product.price) - discount);
        } else {
            return parseFloat(product.price);
        }
    });
    return discountedPrice.reduce((total, price) => {
        return total + price;
    }, 0)
}

export const renderOriginalPrice = (productsInCart) => {
    return productsInCart.reduce((total, product) => {
        return total + parseFloat(product.price)
    }, 0)
}

export const authenticateUser = async (dispatch, payload, url) => {
    try {
        const response = await api(url, "POST", payload);
        if(response.status === 200 && response.headers.get("x-auth")) {
            const token = response.headers.get("x-auth");
            const user = await response.json();
            if(user) {
                dispatch({
                    type: AUTHENTICATE,
                    user,
                    token
                });
                //redirectTo("app");
            } else {
                throw new Error("Error. Please try again");
            }
        } else {
            throw new Error("Invalid User");
        }
    } catch (e) {
        alert(e.message);
        dispatch({
            type: AUTH_ERROR,
            error: e.message
        })
    }
}
