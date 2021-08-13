
export const addToCart = (item)=>(dispatch)  => {
    
   
  dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        product: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        provider:item.provider
      }
  })
  dispatch(updatePrice());
}

  export const removeFromCart = (id) => (dispatch) => {
    dispatch({
      type: "CART_REMOVE_ITEM",
      payload: id,
    })
    dispatch(updatePrice());
  }
  export const removeAll=()=>(dispatch)=>{
    dispatch({
      type:"CART_CLEAR_ITEMS"
    })
    dispatch(updatePrice());
  }
  export const updatePrice = () => {
    return {
      type: "UPDATE_PRICE"
    };
  };
  export const decrement = id => dispatch => {
    dispatch({
      type: "DECREMENT_QTY",
      payload: id
    });
    dispatch(updatePrice());
  };
  export const increment = id => dispatch => {
    dispatch({
      type: "INCREMENT_QTY",
      payload: id
    });
    dispatch(updatePrice());
  };
  export const addShipping = (shippingAdress) => dispatch => {

    dispatch({
      type: "ADD_SHIPPING",
      payload: shippingAdress
    });
    dispatch(updatePrice());
  };