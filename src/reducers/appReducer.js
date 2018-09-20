import {AUTHENTICATE, LOGOUT} from "./../constants/action-types";

const initialState = {
    user: {},
    isLoggedin: false,
    token: ""
}
export default (state = initialState, action) => {

   switch(action.type) {

      case AUTHENTICATE:
          return {
              ...state,
              user: action.user,
              isLoggedin: true,
              token: action.token
          };

      case LOGOUT:
          return {
            ...state,
            user: {},
            isLoggedin: false,
            token: ""
          }

      default:
          return state;
   }

}
