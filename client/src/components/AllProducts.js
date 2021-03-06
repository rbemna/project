import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

import "../style/allProducts.css";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const products = useSelector((state) => state.productReducer.products);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="allproducts">
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
          
         <Link to="/" style={{textDecoration:"none"}}>Accueil</Link>
         
        </nav>
        <div className="allprod">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
     </div>
    

    </div>
  );
};

export default AllProducts;
