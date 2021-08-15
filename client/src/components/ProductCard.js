import React from "react";
import "../style/productCard.css"
import {Link} from "react-router-dom"
const ProductCard = ({product}) => {

  
  return (

    
    // <div className=" d-flex justify-content-center mt-50 mb-50">
    // <div className="row">
    //     <div >
    //         <div className="card">
    //             <div className="card-body">
    //                 <div className="card-img-actions">
    //                      <img src={product.image} className="card-img img-fluid"  alt="product"/> 
    //                 </div>
    //             </div>
    //             <div className="card-desc bg-light text-center">
    //                 <div className="mb-2">
    //                     <h6 className="font-weight-semibold mb-2"> 
    //                    {product.name}
    //                     </h6> 
    //                 </div>
    //                 <h3 className="mb-0 font-weight-semibold">{product.price} <span>DT</span></h3>
                    
        
    //                 <Link to={`/productDetails/${product._id}`}>

    //                 <div className="text-muted mb-3"><a href="detail">Plus de détails</a></div>
    //                 </Link>
    //              {/* <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button> */}
    //         </div>
                  
    //         </div> 
    //     </div>
    //   </div>
    //   </div>
 
    // <div className="global">
    //     <div className="productCard">
    //         <div className="imageCard">
    //         <img src={product.image}  alt="product"/>
    //         </div>
    //         <div className="infoCard">

    //         </div>


    //     </div>
    // </div>

     
//     <div class="card">
//   <img src={product.image} alt="John" style="width:100%"/>
//   <h1>John Doe</h1>
//   <p class="title">CEO & Founder, Example</p>
//   <p>Harvard University</p>
//   <a href="#"><i class="fa fa-dribbble"></i></a>
//   <a href="#"><i class="fa fa-twitter"></i></a>
//   <a href="#"><i class="fa fa-linkedin"></i></a>
//   <a href="#"><i class="fa fa-facebook"></i></a>
//   <p><button>Contact</button></p>
// </div>



<div className="countries">
<div className="country">
    <img className="imageprod" src={product.image}alt="warsaw"/>
    <div className="bottom">
      <div className="prodDet">
          <h5>{product.name}</h5>
          <span>{product.price} <span>DT (1kg)</span></span>
          
      </div>
      
      <Link to={`/productDetails/${product._id}`}> <button className="butProd">détails</button></Link>
    </div>
</div>
</div>


  );
};

export default ProductCard
