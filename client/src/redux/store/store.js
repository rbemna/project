import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk"
import {userReducer} from "../reducers/userReducer"
import {productReducer} from "../reducers/productReducer"
import {cartReducer} from "../reducers/cartReducer"
import {orderReducer} from "../reducers/orderReducer"



const reducer=combineReducers({
    userReducer:userReducer,
    productReducer:productReducer,
    cart:cartReducer,
    order:orderReducer
})
const initialState={}
const middleware=[thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
