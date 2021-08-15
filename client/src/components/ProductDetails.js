import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "../style/productDetails.css";
import {useDispatch,useSelector } from "react-redux"
import {addToCart} from "../redux/actions/cartActions"
import { getProductDetails } from "../redux/actions/productActions";
const ProductDetails = ({match,history}) => {

const dispatch = useDispatch()

   
    useEffect(() => {
      dispatch(getProductDetails(match.params.id));
    }, [dispatch, match]);
  
    const product = useSelector((state) => state.productReducer.productDetails);
    console.log("product provider is    ", product.provider)
  

  const add = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    history.push(`/cart`);
  };

      return (
    <div style={{margin:"50px 200px"}}>
    
      {/* <div className="cardDetail">
      <div className="cardImg" >
        <nav>
          <svg
            className="arrow"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
              stroke="#727272"
            />
          </svg>
          
         <Link to="/" > Back to all products</Link>
         
        </nav>
        <div className="photo">
          <img src={product.image} alt="product"/>
        </div>
        </div>
        <div className="description">
            <div style={{border:"2px solid red"}}>
            <h2>{product.name}</h2>
          <h4>{product.description}</h4>
          <h1>{product.price}<span>{" "}DT</span></h1>
            </div>
          
         
          <div style={{border:"2px solid green"}} > 
          <Link to={`/Cart/${product._id}`}> 
             <button onClick={(e)=>add(e)}>Add to Cart</button>
          </Link>
         </div>
        </div>
         
       
      </div> */}


      <div className="prod-det">
        <div className="bloc-img">
        <nav>
          <svg
            className="arrow"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
              stroke="#727272"
            />
          </svg>
          
         <Link to="/" style={{textDecoration:"none"}}>Retour aux produits</Link>
         
        </nav>
        <img className="productImg" src={product.image} alt="product"/>
        
        </div>
        <div className="bloc-details">

        <h1>{product.name}</h1>
        <h6>{product.category}</h6>
       
        <div style={{marginTop:"50px"}}>

          <h5>Description</h5>
        <p>{product.description}</p>
        </div>
        {/* <h1>{product.price}{"  "} DT</h1> */}
        <div className="divbtn">
        <h1>{product.price}{"  "} DT</h1>
           <Link to={`/Cart/${product._id}`}> 
           <hr/>

        <button className="btndet" onClick={(e)=>add(e)} style={{width:"200px",height:"50px"}}> AJOUTER AU PANIER</button>
        </Link>
</div>
       

        </div>
     

       
     
      </div>
    </div>
  );}



export default ProductDetails;
