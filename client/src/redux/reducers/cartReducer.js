const initialState={ cartItems: [],cartDetails:[], shippingAddress: {} ,totalPrice:0 }


export const cartReducer = (state = initialState,
 {type,payload}
)=> {
  switch (type) {
    case "CART_ADD_ITEM":
      const item = payload
     
      const existItem = state.cartItems.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems
        }
      } else {
        return {
          ...state,
          cartDetails: [...state.cartDetails,{product:item.product,name:item.name,price:item.price,qty:1,image:item.image
          ,provider:item.provider}],
          cartItems: [...state.cartItems, item],
        }
      }
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
        cartDetails: state.cartDetails.filter((x) => x.product !== payload)
      }
    case "CART_CLEAR_ITEMS":
      return {
        ...state,
        cartItems: [],
        cartDetails:[]
      }
      case "UPDATE_PRICE":
        return {
          ...state,
          totalPrice: state.cartDetails
            .reduce((acc, val) => acc + val.qty * val.price, 0)
        };
        case "DECREMENT_QTY":
      return {
        ...state,
        cartDetails: state.cartDetails.map(
          item =>
            item.product === payload && item.qty>1 ? { ...item, qty: --item.qty } : item
        )
      };
      case "INCREMENT_QTY":
        return {
          ...state,
          cartDetails: state.cartDetails.map(
            item =>
              item.product === payload ? { ...item, qty: ++item.qty } : item
          )
        };
        case "ADD_SHIPPING":
          return {
            ...state,shippingAddress:payload
          }
    default:
      return state
  }
}