import React, {useState} from "react";
import { Form, Button , Spinner} from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/actions/userActions"

import "../style/login.css"
const Login = ({history}) => {
  const load = useSelector(state => state.load)
  const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const log = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };
    if (load) {
      return (
        <Spinner
        animation='border'
        role='status'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
      );
    } else {
  return (
    <div className="loginForm" >
      {/* <div ><h5>CONNECTEZ-VOUS À VOTRE COMPTE</h5>
      </div> */}
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ width: "35%", textAlign: "center" }}>
              Email{" "}
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => change(e)}
              placeholder="Enter email"
              style={{ height: "auto", width: "60%" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ width: "35%", textAlign: "center" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => change(e)}
              placeholder="Password"
              style={{ height: "auto", width: "60%" }}
            />
          </Form.Group>
          <br />
          <div id="btnLogin">
          <Button
              variant="primary"
              type="submit"
              onClick={(e)=>log(e)}
              style={{ backgroundColor: "#ffb703" ,border:"none"}}
            >
              connexion{" "}
            </Button>
          </div>

          <hr />
          <Link
            style={{
              textDecoration: "none",
              color: "#bc6c25",
              textAlign: "center",
              fontSize: "18px",
            }}
            to="/register"
          >
            <p>Pas de compte ? Créez-en un</p>
          </Link>
        </Form>
      </div>
    </div>
  );}
};

export default Login;
