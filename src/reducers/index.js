import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import {RESET_ADDRESS_FORM} from "./../constants/action-types";

import app from "./appReducer";
import cart from "./cartReducer";
import deliveryAddress from "./addressReducer";
import dataList from "./dataReducer";
import utils from "./utilsReducer";

const form = formReducer.plugin({
    address: (state, action) => {

        switch(action.type) {

            case RESET_ADDRESS_FORM:
                return undefined;

            default:
                return state;
        }
    }
});

const reducers = {
    app,
    cart,
    deliveryAddress,
    dataList,
    form,
    utils
}

export default combineReducers(reducers);
