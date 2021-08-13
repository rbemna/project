import React from "react";
import "../style/cart.css";
import { Row, Col } from "react-bootstrap";
import { useSelector} from "react-redux";
// import { getProductDetails } from "../redux/actions/productActions";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = () => {

  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
 
  // useEffect(() => {
  //   dispatch(getProductDetails(match.params.id));
  // }, [dispatch, match.params.id]);

  return (
    <div className="cartContent" style={{ margin: "40px" }}>
       <h1>Shopping Cart</h1>
       {cartDetails.length === 0 ? (
          <h4>
            Your cart is empty <Link to='/'>Go Back</Link>
          </h4>
        ) :
        ( <Row>
        <Col sm={8}>
       
       
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-0 bg-light">
                    <div className="p-2 px-3 text-uppercase">Product</div>
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
                  <th scope="col" className="border-0 bg-light">
                    <div className="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartDetails.map((el) => (
                  <CartItem el={el} key={el.product} />
                ))}
              </tbody>
            </table>
          </div>
        </Col>
        <Col sm={4}>
          <div
            class="bg-light  text-uppercase font-weight-bold"
            style={{ height: "55px", textAlign: "center" }}
          >
            {" "}
            <h3>Order summary</h3>{" "}
          </div>
          <div class="p-4">
            <p class="font-italic mb-4">
              Shipping and additional costs are calculated based on values you
              have entered.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">Total </strong>
                <strong>{totalPrice}</strong>
              </li>
            </ul>
            <Link
              to="/cart/shipping"
              class="btn btn-dark rounded-pill py-2 btn-block"
            >
              Procceed to checkout
            </Link>
          </div>
        </Col>
      </Row>)}
    </div>
  );
};
export default Cart;
