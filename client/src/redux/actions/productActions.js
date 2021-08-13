import axios from "axios"
import { ADD_PRODUCT_FAIL,
     ADD_PRODUCT_SUCCESS,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL,
     MY_PRODUCT_SUCCESS,
     MY_PRODUCT_FAIL,
     DELETE_PRODUCT_SUCCESS,
     DELETE_PRODUCT_FAIL,
     EDIT_PRODUCT_SUCCESS,
     EDIT_PRODUCT_FAIL,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DETAILS_FAIL } from "../actionsTypes/productActionTypes";

export const addProduct=(newProduct)=>async(dispatch)=>{
    try {
        // dispatch({type: ADD_PRODUCT_REQUEST})
       
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        const result = await axios.post("/api/product/add", newProduct, config)
        console.log("the new product is", result.data.product)
        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload:result.data
        })
        dispatch(getMyProducts())
    } catch (error) {
      console.log("l'erreuuuuurrr",error)

        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload: error.response.data,
        });
        
        
    }
}

export const getProducts = () => async (dispatch) => {
    try {
       
      const result = await axios.get("/api/product/allProducts",);
      console.log("le resultet est:    ",result);
      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: result.data.product });
    } catch (error) {
      dispatch({ type: ALL_PRODUCT_FAIL, payload: error });
      console.log(error);
    }
  };

  export const getMyProducts = () => async (dispatch) => {
    try {
       
       
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
      const result = await axios.get("/api/product/myProducts",config);
      console.log("myproducts are:    ",result);
      dispatch({ type: MY_PRODUCT_SUCCESS, payload: result.data.product });
    } catch (error) {
      dispatch({ type: MY_PRODUCT_FAIL, payload: error });
      console.log(error);
    }
  };


  export const getProductDetails = (id) => async (dispatch) => {
    try {
      console.log("the id", id)
      const result= await axios.get(`/api/product/${id}`)
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: result.data
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const editProduct = (id,newProduct) => async (dispatch) => {
    try {
        
       
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
      const result = await axios.put(`/api/product/editproduct/${id}`,newProduct,config);
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: result.data.product });
      dispatch(getMyProducts())
    } catch (error) {
      dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
      console.log(error);
    }
  };


/*****************************delete product***************************/
  export const deleteProduct = (id) => async (dispatch) => {
    try {
        
       
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
      await axios.delete(`/api/product/delete/${id}`,config);
            dispatch({ type: DELETE_PRODUCT_SUCCESS,
            payload:id });
            dispatch(getMyProducts())
  
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.response });
      console.log(error);
    }
  };