import React, {useState} from "react";
import "../style/cart.css";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {Button,Modal} from "react-bootstrap"
import CartFinal from "./CartFinal";
import { createOrder } from "../redux/actions/orderActions";
import { removeAll } from "../redux/actions/cartActions";
const Resume = ({history}) => {
 const client = useSelector( (state) =>state.userReducer.users)
  const  dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const order = useSelector(state => state.order.orderItems)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addOrder = (e) => {
    e.preventDefault();
    dispatch(createOrder(cartDetails, shippingAddress,totalPrice+7));
  };

  const valider=(e)=>{
    addOrder(e)
    handleShow()
  }

  const close=()=>{
    dispatch(removeAll())
    history.push(`/user/client/${client._id}`)
  }

  return (
    <div className="cartContent" style={{ margin: "40px" }}>
      <Row>
        <Col sm={8}>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">name</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">SubTotal</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartDetails.map((el) => (
                  <CartFinal el={el} key={el.product} />
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Adresse</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Ville</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Pays</div>
                  </th>
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Code postal</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-0">{shippingAddress.address}</td>
                  <td className="border-0 align-middle">
                    {shippingAddress.city}
                  </td>
                  <td className="border-0 align-middle">
                    {shippingAddress.country}
                  </td>
                  <td className="border-0 align-middle">
                    {shippingAddress.postalCode}
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </Col>
      </Row>

      <Row>
        <div>
          <div className="resTotal">
            <label>SubTotal</label>
            <span>
              {totalPrice}
              {" DT"}
            </span>
          </div>
          <div className="resTotal">
            <label>Shipping cost</label>
            <span>7 {" DT"}</span>
          </div>
          <div className="resTotal">
            <label>Total</label>
            <span>
              {totalPrice + 7}
              {" DT"}
            </span>
          </div>
        </div>
      </Row>
      <Row>
        <div>        
            <button onClick={(e) =>valider(e)}>valider </button>
        </div>
      </Row>


      <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p> Ref: {order._id}</p>
        </Modal.Header>
        <Modal.Body>
   
                <div className="px-4 py-5">
                    <h5 className="text-uppercase">{client.fullName}</h5>
                    <h4 className="mt-5 theme-color mb-5">Merci pour votre commande</h4>
                    
                     <span className="theme-color">Résumé du payement</span>
                     <hr className="new1"/>
                    
                     {cartDetails.map((el,key)=>
                                <div className="d-flex justify-content-between" key={key}> 
                                <span className="font-weight-bold">{el.name}(Qty:{el.qty})</span>
                                 <span className="text-muted">{el.price}</span> </div>
                                )}


                    <div className="d-flex justify-content-between"> <small>Shipping</small> <small>7 {" DT"}</small> </div>
                    <div className="d-flex justify-content-between mt-3"> <span className="font-weight-bold">Total</span> <span class="font-weight-bold theme-color"> {totalPrice + 7}
              {" DT"}</span> </div>
                </div>
       


        </Modal.Body>
        <Modal.Footer>
          <Button className="fermer" variant="secondary" onClick={()=>close()}>
          Fermer
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
};
export default Resume;
