import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import {RESET_ADDRESS_FORM} from "./../constants/action-types";

import app from "./appReducer";
import cart from "./cartReducer";

const reducers = {
    app,
    cart,
    form: formReducer.plugin({
        address: (state, action) => {
            switch(action.type) {

                case RESET_ADDRESS_FORM:
                    return undefined;

                default:
                    return state;
            }
        }
    })
}

export default combineReducers(reducers);
