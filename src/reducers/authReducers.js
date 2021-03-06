import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/auth";

const initialState = {
  isLogin: false,
  LoggingIn: false,
  failed: false,
  errorMessage: "",
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        failed: false,
        errorMessage: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.payload.data.user,
        errorMessage: "",
        failed: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
        errorMessage: action.payload.data.message,
        user: {},
        failed: true
      };
    default:
      return state;
  }
};
