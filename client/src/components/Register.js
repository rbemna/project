import React,{useState} from "react";
import "../style/register.css";
import { Link } from "react-router-dom";
import { Form ,Spinner} from "react-bootstrap";
import { useSelector,useDispatch} from "react-redux"
import {register} from "../redux/actions/userActions"
// import Loading from "./Loading";
const Register = ({history}) => {
const load = useSelector(state => state.load)
 const dispatch = useDispatch()

 const [newUser, setNewUser]=useState({
  fullName: "",
  email: "",
  password: "",
  phone: "",
  adresse:"",
  role:""
 })

 const change=(e)=>{
    setNewUser({...newUser, [e.target.name]:e.target.value})
 }
 const registerUser = (e) => {
  e.preventDefault();
  dispatch(register(newUser, history));
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
    <div className="registration-form">
      <form>
        <div>
          
            <p style={{color:"#bc6c25", fontSize: "18px"}}>Vous avez déjà un compte ?
              <Link
            style={{
              textDecoration: "none",
              // color: "#ffb703",
              textAlign: "center",
              fontSize: "18px",
              
            }}
            to="/login"
          > Connectez-vous ! </Link></p>
         
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
         <label> Choisir votre profile:
         <Form.Control as="select" style={{ width: "460px" }} name="role" onChange={(e) => change(e)}>
            <option ></option>
            <option>Client</option>
            <option>Fournisseur</option>
          </Form.Control>
           </label> 
          
        </div>
        <div className="form-name">
          <input
           
            type="text"
            className="form-control item"
            id="fullName"
            placeholder="Nom complet"
            name="fullName"
            onChange={(e) => change(e)}
          />
         
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="email"
            placeholder="Email"
            name="email"
            onChange={(e) => change(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control item"
            id="password"
            placeholder="mot de passe"
            name="password"
            onChange={(e) => change(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="phone-number"
            placeholder="téléphone"
            name="phone"
            onChange={(e) => change(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="adresse"
            placeholder="Adresse"
            name="adresse"
            onChange={(e) => change(e)}
          />
        </div>
     
        <div className="form-group"> 
        <input
            type="text"
            className="form-control item"
            id="image"
            placeholder="image"
            name="image"
            onChange={(e) => change(e)}
          />
          
        </div>
    
        <div className="form-group">
          <button type="button" className="btn btn-block create-account"onClick={(e)=>registerUser(e)}>
           créer votre compte
          </button>
        </div>
      </form>
      {/* <div className="social-media">
          <h5>Sign up with social media</h5>
          <div className="social-icons">
            <a href="#"><i className="icon-social-facebook" title="Facebook" /></a>
            <a href="#"><i className="icon-social-google" title="Google" /></a>
            <a href="#"><i className="icon-social-twitter" title="Twitter" /></a>
          </div>
        </div> */}
    </div>
  )};
};

export default Register;
