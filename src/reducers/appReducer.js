import {AUTHENTICATE, LOGOUT, AUTH_ERROR} from "./../constants/action-types";

const initialState = {
    user: {},
    isLoggedin: false,
    token: "",
    authError: ""
}
export default (state = initialState, action) => {

   switch(action.type) {

      case AUTHENTICATE:
          return {
              ...state,
              user: action.user,
              isLoggedin: true,
              token: action.token,
              authError: ""
          };

      case LOGOUT:
          return {
            user: {},
            isLoggedin: false,
            token: "",
            authError: ""
          };

      case AUTH_ERROR:
          return {
            ...state,
            authError: action.error
          };

      default:
          return state;
   }

}
