import {LOADER} from "../constants/action-types";

const initialState = {
    loader: false
};

export default (state = initialState, action) => {

    switch (action.type) {

        case LOADER:
            return {
                ...state,
                loader: action.payload
            };

        default:
            return state;
    }

};
