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
  array.filter((item) => (item.id !== object.id))
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
        if (product.discount && product.discount > 0) {
            const discount = calculateDiscount(product.productPrice, product.discount);
            return Math.floor(product.productPrice - discount);
        } else {
            return product.productPrice;
        }
    });
    return discountedPrice.reduce((total, price) => {
        return total + price;
    }, 0)
}

export const renderOriginalPrice = (productsInCart) => {
    return productsInCart.reduce((total, product) => {
        return total + product.productPrice
    }, 0)
}
