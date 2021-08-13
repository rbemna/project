import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
 MY_PRODUCT_REQUEST,
  MY_PRODUCT_SUCCESS,
  MY_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from "../actionsTypes/productActionTypes";
const initialState = {
  products: [],
  myProducts:[],
  product:{},
  productDetails:{},
  errors: [],
  message: "",
  load: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, load: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, load: false, products: payload };
    case ADD_PRODUCT_FAIL:
      return { ...state, load: false, errors: payload };
    case ALL_PRODUCT_REQUEST:
      return { ...state, load: true };
    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case ALL_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
      };
      case MY_PRODUCT_REQUEST:
      return { ...state, load: true };
    case MY_PRODUCT_SUCCESS:
      return {
        ...state,
        myProducts: payload,
      };
    case MY_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
      };

      case DELETE_PRODUCT_REQUEST:
        return { ...state, load: true };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          products:state.products.filter(product=>product._id !==payload),
        };
      case DELETE_PRODUCT_FAIL:
        return {
          ...state,
          error: payload,
        };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: payload,
        load:false
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        load:false,
        error: payload,
      };
    default:
      return state;
  }
};
