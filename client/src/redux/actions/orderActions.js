import axios from 'axios'

export const createOrder = (orderItems,shippingAddress,totalPrice) => async (dispatch) => {
    const body={orderItems,shippingAddress,status:"enregistrée",totalPrice}
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.post('/api/order', body ,config);
        dispatch({
            type: "ORDER_CREATE_SUCCESS",
            payload:result.data.order,
        });
        // dispatch(removeAll())
        
    } catch (error) {
        dispatch({
            type: "FAILED_ORDER",
            payload: error.response.data.errors,
        });
    }
  };

  export const getMyOrders = () => async (dispatch) => {
    
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get('/api/order/myorders',config);
        console.log("resultttt",result)
        dispatch({
            type: "MY_ORDER_SUCCESS",
            payload:result.data,
        });
      
    } catch (error) {
        dispatch({
            type: "MY_ORDER_FAIL",
            payload: error.response.data.errors,
        });
    }
  };

  export const getOrders = () => async (dispatch) => {
    
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get('/api/order/ordres',config);
        dispatch({
            type: "ORDER_LIST_SUCCESS",
            payload:result.data,
        });
      
    } catch (error) {
        dispatch({
            type: "ORDER_LIST_FAIL",
            payload: error.response.data.errors,
        });
    }
  };

  export const getProviderOrders = () => async (dispatch) => {
    
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get('/api/order/providerorders',config);
        dispatch({
            type: "PROVIDER_ORDER_SUCCESS",
            payload:result.data,
        });
      
    } catch (error) {
        dispatch({
            type: "PROVIDER_ORDER_FAIL",
            payload: error.response.data.errors,
        });
    }
  };
  export const updatePriceOrder = () => {
    return {
      type: "UPDATE_PRICE_ORDER"
    };
  };