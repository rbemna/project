import axios from "axios"
import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL,CURRENT_USER,LOGOUT,
    GET_CLIENT,GET_CLIENT_FAIL,GET_PROVIDERS,GET_PROVIDERS_FAIL,
    DELETE_USER,DELETE_USER_FAIL} from "../actionsTypes/userActionTypes"


    export const login = (user, history) => async (dispatch) => {
    
        try {
      
            const result = await axios.post("/api/user/login", user);
            
    
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: result.data,
            });
    
            if(result.data.user.role === 'admin'){
                history.push("/user/admin");
            }
            if(result.data.user.role === 'Client'){
                    history.push("/user/client")
            }
           if(result.data.user.role === 'Fournisseur'){
                    history.push("/user/provider")
                }
            
          
            
            
        } catch (error) {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: error.response.data.errors,
            });
        }
    };
export const register = (newUser,history) => async (dispatch) => {
    
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        const result = await axios.post("/api/user/register", newUser); 

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: result.data

        });
       
    
        if(result.data.user.role === 'admin'){
            history.push("/user/admin");
        }
        if(result.data.user.role === 'Client'){
                history.push("/user/client")
        }
       if(result.data.user.role === 'Fournisseur'){
                history.push("/user/provider")
            }
      
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.errors,
        });
    }
};



export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("/api/user/current", config);

        dispatch({ type: CURRENT_USER, payload: result.data.user });
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response.data,
        });
    }
};
export const logout = () => ({
    type: LOGOUT,
});




export const editUser = (newUser) => async (dispatch) => {
    try {

        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.put("/api/user/edit",newUser, config);

        dispatch({ type: UPDATE_USER_SUCCESS, payload: result.data.user });
        dispatch(current());
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data,
        });
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {

        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        await axios.delete(`/api/user/${id}`, config);

        dispatch({ type: DELETE_USER, payload:id});
        dispatch(getAllProviders());
        dispatch(getAllClients());
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data,
        });
    }
};


export const getAllClients = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("/api/user/clients",config);
        dispatch({
            type: GET_CLIENT,
            payload: result.data.clients,
        });
    } catch (error) {
        dispatch({
            type: GET_CLIENT_FAIL,
            payload: error.response.data,
        });
        console.log("error from action:", error);
    }
};
export const getAllProviders = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("/api/user/providers",config);
        dispatch({
            type: GET_PROVIDERS,
            payload: result.data.providers,
        });
    } catch (error) {
        dispatch({
            type: GET_PROVIDERS_FAIL,
            payload: error.response.data,
        });
    }
};