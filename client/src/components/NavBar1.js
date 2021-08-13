import React from "react";
import "../style/navbar1.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { logout } from "../redux/actions/userActions";
const NavBar1 = () => {
  const authenticated = useSelector((state) => state.userReducer.authenticated);
  const user=useSelector((state) => state.userReducer.users);
  const cart=useSelector((state) => state.cart.cartItems);
  const total=useSelector((state) => state.cart.totalPrice);


  const dispatch = useDispatch()
if(authenticated){
  return (
    <div className="super_container">
      {/* <!-- Header --> */}
      <header className="header">
        {/* <!-- Top Bar --> */}
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="navTop">
                <div className="logo">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    <h1 lang="ar">العولة</h1>
                  </Link>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_user">
                    <div className="user_icon">
                      <i className="fas fa-user-circle fa-lg"></i>
                    </div>
                    <div className="insc" style={{ marginLeft: "5px" }}>
                      <Link style={{ textDecoration: "none" }} to={`/user/${user.role}`} >
                        <a href="mon compte">Mon compte</a>
                      </Link>
                    </div>
                    <div>
                      <Link style={{ textDecoration: "none" }} to="/">
                        {" "}
                        
                       <a href="logout" onClick={()=>dispatch(logout())}>Logout</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down-bar">
          
          <div className="col-lg-6  col-sm-4 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search ......"
              />
              <div className="input-group-append">
                <button className="input-group-text">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <Link to="/cart"  style={{ textDecoration: "none",color:"black" }}>
          <div className="Cart">
          <i className='fas fa-shopping-cart'></i>
        <span> {cart.length}</span> {" | "}
        <span> {total} <span>DT</span></span>
          </div>
          </Link>
        </div>
      </header>
    </div>
  );
}else{
  return (
    <div className="super_container">
      {/* <!-- Header --> */}
      <header className="header">
        {/* <!-- Top Bar --> */}
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="navTop">
                <div className="logo">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    <h1 lang="ar">العولة</h1>
                  </Link>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_user">
                    <div className="user_icon">
                      <i className="fas fa-user-circle fa-lg"></i>
                    </div>
                    <div className="insc" style={{ marginLeft: "5px" }}>
                      <Link style={{ textDecoration: "none" }} to="/register">
                        <a href="inscr">s'inscrire</a>
                      </Link>
                    </div>
                    <div>
                      <Link style={{ textDecoration: "none" }} to="/login">
                        {" "}
                        <a href="cx">se connecter</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down-bar">
        {/* <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i class="fas fa-bars" ></i>{ } Nos catégories             </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="epice">Epices</Dropdown.Item>
                <Dropdown.Item href="huile">Huiles</Dropdown.Item>
                <Dropdown.Item href="pates">Pâtes traditionnelles</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
          <div className="col-lg-6  col-sm-4 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search ......"
              />
              <div className="input-group-append">
                <button className="input-group-text">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <Link to="/cart"  style={{ textDecoration: "none",color:"black" }}>
          <div className="Cart">
        <i className='fas fa-shopping-cart'></i> <span> {cart.length}</span>
        {" | "}
        <span> {total} <span>DT</span></span>
          </div>
          </Link>
        </div>
      </header>
    </div>
  );
}
 
};

export default NavBar1;
