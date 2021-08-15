import "./App.css";
import React, {useEffect} from "react"
import NavBar1 from "./components/NavBar1";
import LandingPage from "./components/LandingPage"
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin"
import {useDispatch,useSelector} from "react-redux"
import {current} from "./redux/actions/userActions"
import Client from "./components/Client";
import Provider from "./components/Provider";
import Products from "./components/Products";
import ProvidersList from "./components/ProvidersList";
import Clients from "./components/Clients";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Shipping from "./components/Shipping";
import Resume from "./components/Resume";

import PrivateRoute from "./components/PrivateRoute";
import Orders from "./components/Orders";


function App() {
const products = useSelector(state => state.productReducer.products)
  console.log("appjs", products)
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
   
    }, [dispatch]);
  return (
    <div className="App">
      <NavBar1/>
      <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products}/>
        <Route exact path="/productDetails/:id" component={ProductDetails}/>
     
     
        <Route path="/user/client" component={Client}/>
        <Route path="/user/Fournisseur" component={Provider}/> 
        <Route path="/user/admin" component={Admin}/>
        <Route path="/providers" component={ProvidersList}/>
        <Route path="/clients" component={Clients}/>
        <Route path="/commandes" component={Orders}/>
        <Route exact path="/cart" component={Cart}/>

        <PrivateRoute path="/cart/shipping/resume" component={Resume}/>
        <PrivateRoute path="/cart/shipping" component={Shipping}/>
        
      
        
      </Switch>
    </div>
  );
}

export default App;
