import {combineReducers} from "redux";

import app from "./appReducer";
import cart from "./cartReducer";

export default combineReducers({
    app, cart
});
