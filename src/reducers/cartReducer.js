import {SAVE_TO_CART, REMOVE_FROM_CART} from "./../constants/action-types";
import {deleteObjectFromArray} from "./../utils";

const initialState = {
    productsInCart: []
}

export default (state = initialState, action) => {

   switch(action.type) {

      case SAVE_TO_CART:
          return {
              ...state,
              productsInCart: [
                  ...state.productsInCart,
                  action.payload
              ]
          };

      case REMOVE_FROM_CART:
          return {
              ...state,
              productsInCart: deleteObjectFromArray(state.productsInCart, action.payload)
          }

      default:
          return state;
   }

}
