import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CURRENT_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  LOGOUT,
  GET_CLIENT,GET_CLIENT_FAIL,GET_PROVIDERS,GET_PROVIDERS_FAIL,
  DELETE_USER,
  DELETE_USER_FAIL
} from "../actionsTypes/userActionTypes";
const initialState = {
  users: [],
  providers: [],
  clients: [],
  errors: [],
  message: "",
  authenticated: false,
  load: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_REQUEST:
      return { ...state, load: true };
    case REGISTER_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        users: payload.user,
        message: payload.msg,
        authenticated: true,
        load: false,
      };
    case REGISTER_USER_FAIL:
      return { ...state, errors: payload, load: false };
    case LOGIN_USER_REQUEST:
      return { ...state, load: true };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        load: false,
        authenticated: true,
        message: payload.msg,
        users: payload.user,
      };
    case CURRENT_USER:
      return { ...state, users: payload, authenticated: true };
    case LOGIN_USER_FAIL:
      return { ...state, ...state, errors: payload, load: false };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, users: {}, authenticated: false };
    case UPDATE_USER_REQUEST:
      return { load: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, load: false, users: payload, message: "user updated" };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        errors: payload,
        load: false,
      };
      case DELETE_USER:
      return { ...state, users: payload, authenticated: true };
    case DELETE_USER_FAIL:
      return { ...state, errors: payload, load: false };
    case GET_CLIENT:
      return { ...state, clients: payload, authenticated: true };
      case GET_CLIENT_FAIL:
        return {
          ...state,
          errors: payload,
          load: false,
        };
    case GET_PROVIDERS:
      return { ...state, providers: payload, authenticated: true };
      case GET_PROVIDERS_FAIL:
        return {
          ...state,
          errors: payload,
          load: false,
        };
    default:
      return state;
  }
};
