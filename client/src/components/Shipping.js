import React, {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addShipping } from '../redux/actions/cartActions';
import "../style/shipping.css"

const Shipping = ({history}) => {
    const dispatch = useDispatch()
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const totalPrice = useSelector((state) => state.cart.totalPrice);


const [shippingAddress, setShippingAddress]= useState({});

const change=(e)=>{
    setShippingAddress({...shippingAddress, [e.target.name]:e.target.value})
}
  
const add=(e)=>{
    e.preventDefault();
    dispatch(addShipping(shippingAddress))
    history.push("/cart/shipping/resume")
}



    return (
       
   

        <div className="Container">
        {/* <div className="block-heading">
          <h2>Shipping</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
        </div> */}
        <form className="ship">
          <div className="products">
            <h3 className="title">Checkout</h3>
            <hr/>

            {cartDetails.map((el,key)=>
            <div className="item" key={key}>
            <p className="item-name">{el.name} {"( qty: "} {el.qty} {" )"}</p>
              <span className="price">{el.price}{" DT"}</span>
              
            </div>)}
        
            <hr/>
            <div className="total">
              <p className="item-name">Subtotal</p>
              <span className="price">{totalPrice}{" DT"}</span>
              </div>
          </div>
          <div className="adresse">
            <h3 className="title">Shipping adresse</h3>
            <hr/>

            <div className="row">
              <div className="form-group col-sm-7">
                <label for="Adresse">Adresse</label>
                <input id="Adresse" onChange={(e)=>change(e)}  name="address"  type="text" className="form-control" placeholder="adresse" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-7">
                <label for="Adresse">Ville</label>
                <input id="Ville" onChange={(e)=>change(e)} name="city" type="text" className="form-control" placeholder="ville" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-8">
                <label for="Pays">Pays</label>
                <input id="Pays" onChange={(e)=>change(e)} name="country" type="text" className="form-control" placeholder="pays" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-4">
                <label for="cp">Code postal</label>
                <input id="cp" onChange={(e)=>change(e)}  name="postalCode" type="text" className="form-control" placeholder="code postal" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-12">
                <button type="button" className="btnship" onClick={(e)=>add(e)}>Valider</button>
              </div>
           
            </div>
          </div>
        </form>
      </div>
 

    )
}

export default Shipping
