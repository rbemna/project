import React, {useEffect,useState} from "react";
import "../style/client.css";
import { useSelector,useDispatch} from "react-redux";
import { getMyOrders} from "../redux/actions/orderActions";
import { Modal,Button,Form,Col,Row } from "react-bootstrap";
import { editUser } from "../redux/actions/userActions";
const Client = () => {
const client = useSelector(state => state.userReducer.users)
const myOrders = useSelector(state => state.order.myorders)
const [newClient, setNewClient] = useState(client);
const change = (e) => {
  setNewClient({ ...newClient, [e.target.name]: e.target.value });
};
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getMyOrders());

}, [dispatch]);
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editUser(newClient));
    handleClose();
  };

  return (
    <div className="container">
      <div className="row1">
        <div className="col-lg-12 col-md-4">
          <div
            className="text-center card-box"
            style={{ backgroundColor: "#fefae0" }}
          >
            <div className="member-card" style={{ backgroundColor: "white" }}>
              <div className="thumb-xl member-thumb m-b-10 center-block">
                <img
                  src={client.image}
                  className="img-circle img-thumbnail"
                  style={{ height: "200px", width: "200px" }}
                  alt="profile"
                />
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="m-b-5">{client.fullName}</h4>
                </div>
                <div className="panel-body">
                  <table className="table profile__table">
                    <tbody>
                      <tr>
                        <th>
                          <strong>Email</strong>
                        </th>
                        <td>{client.email}</td>
                      </tr>
                      <tr>
                        <th>
                          <strong>Adresse</strong>
                        </th>
                        <td>{client.adresse}</td>
                      </tr>
                      <tr>
                        <th>
                          <strong>Téléphone</strong>
                        </th>
                        <td>{client.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
              </div>
              <div><Button id="btnedit" variant="primary" onClick={handleShow}>edit</Button></div>
              <Modal id="modalEdit" show={show} onHide={handleClose}>
                      <Modal.Body id="mbody">
                        Mes informations
                        <Form id="formedit">
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Full name"
                                name="fullName"
                                value={newClient.fullName}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Email"
                                name="email"
                                value={newClient.email}
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
                                value={newClient.phone}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Adresse"
                                name="adresse"
                                value={newClient.adresse}
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder="Image"
                                name="image"
                                value={newClient.image}
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

            {/* ://////////////////////////////////////////// */}

            {/* /***************************************************** */}
            <div className="tabs" style={{ backgroundColor: "white" }}>
              <div className="tab-2">
                <label for="tab2-1">Mes commandes</label>
                <input
                  id="tab2-1"
                  name="tabs-two"
                  type="radio"
                  checked="checked"
                />
                <div className="table-responsive" style={{padding:"10px"}}>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Produits</th>
                <th>Total(DT)</th>
                <th className="text-right">Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr>
                  {/* <td class="text-center">{product._id}</td> */}
                  <td>{order.createdAt.substring(0, 10)}</td>
                  {/* <td>{order.orderItems[0].name}</td> */}

                  <td> {order.orderItems.map(el=><span style={{display:"flex",flexDirection:"column"}}>{el.name}({el.qty})</span>)}</td>
                  <td>{order.totalPrice}</td>
                  <td class="text-right">{order.status}</td>
                  <td class="td-actions text-right">
                    <button
                      type="button"
                      rel="tooltip"
                      className="btnPro"
                      data-original-title=""
                      title="supprimer produit"
                      
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <spam>{"  "}</spam>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              </div>
              <div className="tab-2">
                <label for="tab2-2">Mon compte</label>
                <input id="tab2-2" name="tabs-two" type="radio" />
                <div>
                  <h4>Tab mon compte</h4>
                  
                </div>
              </div>
            </div>
            {/* /***************************************  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
