import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts,deleteProduct} from "../redux/actions/productActions";

const Products = ({ history }) => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("are you sur?")) {
      dispatch(deleteProduct(id));
    }
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div class="tabProduct">
      <div>
        <a href="#back" onClick={history.goBack}>
          Back
        </a>
      </div>

      <h2>Liste des produits</h2>
      <div className="tab" style={{ padding: "10px" }}>
        <div className="table-responsive1">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>price</th>
                <th className="text-right">Description</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  {/* <td class="text-center">{product._id}</td> */}
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td class="text-right">{product.description}</td>
                  <td class="td-actions text-right">
                    <button
                      type="button"
                      rel="tooltip"
                      className="btnPro"
                      data-original-title=""
                      title="supprimer produit"
                        onClick={() => deleteHandler(product._id)
                      }
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <span>{"  "}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
