import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct,getMyProducts } from "../redux/actions/productActions";
import { Modal, Form, Button } from "react-bootstrap";
const MyProductList = ({ product }) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState(product);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };
  const onchange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
console.log("the new product issss", newProduct)
  const editProdHandler = (id, newProduct) => {
    dispatch(editProduct(id, newProduct));
    handleClose2();
    dispatch(getMyProducts());
  };

  return (
   
      <tbody>
        <tr>
        
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
              onClick={() => deleteHandler(product._id)}
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <spam>{"  "}</spam>
            <button
              type="button"
              rel="tooltip"
              className="btnPro"
              data-original-title=""
              title=""
              onClick={handleShow2}
            >
              <i class="fas fa-edit"></i>
            </button>
          </td>
        </tr>
      <Modal id="modalAdd" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title> Changer données produit</Modal.Title>
        </Modal.Header>
        <Modal.Body id="bodyadd">
          <Form id="edit">
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                className="fcadd"
                placeholder="name"
                name="name"
                value={product.name}
                onChange={(e) => onchange(e)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
              <Form.Control
                className="fcadd"
                placeholder="category"
                name="category"
                value={product.category}
                onChange={(e) => onchange(e)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Control
                className="fcadd"
                placeholder="price"
                name="price"
                value={product.price}
                onChange={(e) => onchange(e)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Control
                className="fcadd"
                placeholder="description"
                name="description"
                value={product.description}
                onChange={(e) => onchange(e)}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Control
                className="fcadd"
                placeholder="image"
                name="image"
                value={product.image}
                onChange={(e) => onchange(e)}
                type="text"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => editProdHandler(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
      </tbody>

  );
};

export default MyProductList;
