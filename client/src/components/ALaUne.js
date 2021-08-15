import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import "../style/allProducts.css";
import { Link } from "react-router-dom";
const ALaUne = () => {
  const products = useSelector((state) => state.productReducer.products);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="offres">
      <h1>A LA UNE</h1>
     <Link to="/allProducts"> <p>tous les produits</p></Link>
        <div className="allprod">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
     </div>
    

    </div>
  );
};

export default ALaUne;
