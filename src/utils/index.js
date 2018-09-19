import {Actions, ActionConst} from "react-native-router-flux";
import _ from "lodash";

import {RUPEE} from "./../constants/currency";

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
