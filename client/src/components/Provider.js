import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { editUser} from "../redux/actions/userActions";
import "../style/provider.css";
import { addProduct, getMyProducts} from "../redux/actions/productActions";
import MyProductList from "./MyProductList";

const Provider = () => {
  const user = useSelector((state) => state.userReducer.users);

  const myproducts = useSelector((state) => state.productReducer.myProducts);
  // const {users,errors,message,load}=updateUser
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(user);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    provider: user._id,
    image: "",
  });
  const changes = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const change = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    dispatch(getMyProducts());
    handleClose1();
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editUser(newUser));
    handleClose();
  };
  useEffect(() => {
    dispatch(getMyProducts());
  }, [dispatch]);
   
  

  
  useEffect(() => {
    // dispatch(current());
    dispatch(getMyProducts());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  

  return (
    <div className="container1">
      <div className="main-body">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <a href="home">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <a href="user">User</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {user && user.fullName} 
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-lg-4">
            <div className="carddd">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                </div>
                <hr className="my-4" />
               
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">fullName</h6>
                    <span className="text-secondary">
                      {" "}
                      {user && user.fullName}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Email</h6>
                    <span className="text-secondary">
                      {" "}
                      {user && user.email}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Téléphone</h6>
                    <span className="text-secondary">
                      {" "}
                      {user && user.phone}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Adresse</h6>
                    <span className="text-secondary">
                      {" "}
                      {user && user.adresse}
                    </span>
                  </li>
                </ul>
                <hr className="my-4" />
                <div className="mt-3">
                  <>
                    <Button id="btnedit" variant="primary" onClick={handleShow}>
                      Edit
                    </Button>
                    <div className="editdiv">
                    <Modal id="modalEdit" show={show} onHide={handleClose1}>
                      <Modal.Body id="mbody">
                        Mes informations
                        <Form id="formedit">
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Full name"
                                name="fullName"
                                value={newUser.fullName}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Email"
                                name="email"
                                value={newUser.email}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Password"
                                name="password"
                              
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Phone"
                                name="phone"
                                value={newUser.phone}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Adresse"
                                name="adresse"
                                value={newUser.adresse}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Image"
                                name="image"
                                value={newUser.image}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer id="footeredit">
                        <Button
                          variant="primary"
                          onClick={(e) => handleEdit(e)}
                        >
                          Enregistrer
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="carddd">
              <div className="card-body">
                <div className="menu" style={{ backgroundColor: "#606c38" ,borber:"2px solid black"}}>
                  <div style={{display:"flex",flexDirection:"row"}}>
                    <h4 style={{ color: "#fefae0" }}>Mes produits {" "} </h4>
                    
                  </div>
                  <div>
                    <Button
                      id="btnPro"
                      variant="primary"
                      title="ajouter produit"
                      onClick={handleShow1}
                    >
                      <i class="fas fa-plus"></i>
                    </Button>
                  </div>
                </div>

                {/* ********************************************************************************* */}
                {/* /*******************************Addproduct******************************** */}
                {/* *********************************************************************************** */}

                <div>
                  <Modal id="modalAdd" show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title> Nouveau produit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="bodyadd">
                    
                      <Form id="formadd">
                        <Form.Group className="mb-3" controlId="name">
                          <Form.Control
                          className="fcadd"
                            placeholder="name"
                            name="name"
                            onChange={(e) => changes(e)}
                          />
                         
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="category"
                        >
                          <Form.Control
                           className="fcadd"
                              placeholder="category"
                              name="category"
                              onChange={(e) => changes(e)}
                            />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="price"
                        >
                          <Form.Control
                           className="fcadd"
                              placeholder="price"
                              name="price"
                              onChange={(e) => changes(e)}
                            />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="description"
                        >
                          <Form.Control
                           className="fcadd"
                              placeholder="description"
                              name="description"
                              onChange={(e) => changes(e)}
                            />
                        </Form.Group>
                        
                        <Form.Group
                          className="mb-3"
                          controlId="image"
                        >
                        <Form.Control
                         className="fcadd"
                              placeholder="image"
                              name="image"
                              onChange={(e) => changes(e)}
                            />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    
                      <Button variant="primary" onClick={(e)=>handleAdd(e)}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  
                </div>
               

                {/* <div class="tabProduct" > */}
    	
    
            {/* <div className="tab" style={{padding:"10px", border:"2px solid red"}}> */}
                <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th >Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
            {myproducts.map(product=><MyProductList key={product._id} product={product}/>)}
            </table>
                </div>
                {/* </div> */}
                {/* </div> */}
             
                

          
                
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>

    
  );
};

export default Provider;
