
const initialState={ orderItems: [],orders:[] ,errors:[] ,myorders:[],totalPrice:0}
export const orderReducer= (
  state = initialState,
  {type,payload}
)=> {
  switch (type) {
    case "ORDER_CREATE_SUCCESS":
        return {...state,orderItems:payload,
            totalPrice: payload.orderItems
                .reduce((acc, val) => acc + val.qty * val.price, 0)
        }
    case "ORDER_CREATE_FAIL":
        return {...state,errors:payload}
        case "ORDER_LIST_SUCCESS":
          return {...state,orders:payload}
          case "ORDER_LIST_FAIL":
          return {...state,errors:payload}
        case "MY_ORDER_SUCCESS":
          return {...state,myorders:payload}
          case "MY_ORDER_FAIL":
          return {...state,errors:payload}
          case "PROVIDER_ORDER_SUCCESS":
            return {...state,myorders:payload}
    case "PROVIDER_ORDER_FAIL":
        return {...state,errors:payload}
   
        case "DELETE_ORDER":
          return {...state,orders:state.orders.filter(el=>el._id!==payload.id)} 
      
          case "UPDATE_ORDER":
      const existOrder = state.orders.find((el) => el._id === payload._id);
      return {
        ...state,
        order: state.order.map((el) =>
          el._id === existOrder._id ? payload : el
        ),
      }; 
      case "FAILED_ORDER":
        return {...state,errors:payload}
    default:
      return state
  }
}