import {SET_ADDRESS} from "./../constants/action-types";

const initialState = {
    address: {}
}

export default (state = initialState, action) => {

   switch(action.type) {

      case SET_ADDRESS:
          return {
              ...state,
              address: action.payload
          }

      default:
          return state;
   }

}
