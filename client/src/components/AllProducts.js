import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

import "../style/allProducts.css";
const AllProducts = () => {
  const products = useSelector((state) => state.productReducer.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="offres">
      <h1>Nos offres</h1>
        <div className="allprod">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
     </div>
    </div>
  );
};

export default AllProducts;
