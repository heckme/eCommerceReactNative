import {SET_PRODUCT_LIST, SET_CATEGORY_LIST} from "../constants/action-types";

const initialState = {
    categoryList: [],
    productList: []
};

export default (state = initialState, action) => {

    switch (action.type) {

      case SET_PRODUCT_LIST:
          return {
              ...state,
              productList: action.payload
          };

      case SET_CATEGORY_LIST:
          return {
              ...state,
              categoryList: action.payload
          };
      default:
          return state;
    }

};
