import React,{useState,useEffect} from 'react'
import "../style/admin.css"
import { useSelector,useDispatch} from 'react-redux';
import { editUser, getAllClients, getAllProviders } from '../redux/actions/userActions';
import { Modal,Col,Row,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getOrders } from '../redux/actions/orderActions';

const Admin = () => {

const user = useSelector((state) => state.userReducer.users);
const providers = useSelector((state) => state.userReducer.providers);
const clients = useSelector((state) => state.userReducer.clients);
const orders = useSelector((state) => state.order.orders);

const dispatch = useDispatch()
const [newUser, setNewUser] = useState(user);

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const change = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  console.log("new user is  ", newUser)
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editUser(newUser));
    handleClose();
  };
  useEffect(() => {
    dispatch(getAllProviders())
    dispatch(getAllClients())
    dispatch(getOrders())

  
    }, [dispatch]);
    return (
     <div className="body">
      <div className="container bootstrap snippets bootdeys">
          <div className="row" id="user-profile">
              <div className="col-lg-3 col-md-4 col-sm-4" style={{marginTop:"20px"}}>
                  <div className="main-box clearfix">
                      <h2>{user && user.fullName} </h2>
                      
                      <img src={user && user.image} alt="avatar" className="profile-img img-responsive center-block"/>
                      <div className="profile-label">
                          <span className="label label-danger">Admin</span>
                      </div>
      
      
                      <div className="profile-details">
                          <ul className="fa-ul">
                              <li><i className="fa-li fa fa-truck"></i>commandes: <span>{orders.length}</span></li>
                              <li><i className="fa-li fa fa-comment"></i>Fournisseurs: <span>{providers.length}</span></li>
                              <li><i className="fa-li fa fa-tasks"></i>Clients <span>{clients.length}</span></li>
                          </ul>
                      </div>
      
                  </div>
              </div>
      
              <div className="col-lg-9 col-md-8 col-sm-8" style={{marginTop:"20px"}}>
                  <div className="main-box clearfix">
                      <div className="profile-header">
                          <h3><span>Mon compte</span></h3>
                          <Button  className="btn btn-primary edit-profile" onClick={handleShow}>
                              <i className="fa fa-pencil-square fa-lg"></i> Edit profile
                          </Button>
                      </div>
      
                      <div className="row profile-user-info">
                          <div className="col-sm-8">
                              
                              <div className="profile-user-details clearfix">
                                  <div className="profile-user-details-label">
                                  Nom complet
                                  </div>
                                  <div className="profile-user-details-value">
                                  {user && user.fullName}
                                  </div>
                              </div>
                              <div className="profile-user-details clearfix">
                                  <div className="profile-user-details-label">
                                  Adresse
                                  </div>
                                  <div className="profile-user-details-value">
                                  {user && user.adresse}
                                  </div>
                              </div>
                              <div className="profile-user-details clearfix">
                                  <div className="profile-user-details-label">
                                      Email
                                  </div>
                                  <div className="profile-user-details-value">
                                  {user && user.email}
                                  </div>
                              </div>
                              <div className="profile-user-details clearfix">
                                  <div className="profile-user-details-label">
                                     Téléphone
                                  </div>
                                  <div className="profile-user-details-value">
                                  {user && user.phone}
                                  </div>
                              </div>
                          </div>
                          <div className="editdiv">
                    <Modal id="modalEdit" show={show} onHide={handleClose}>
                      <Modal.Body id="mbody">
                        Mes informations
                        <Form id="formedit">
                          <Row className="rowedit">
                           
                            <Col className="coledit">
                              <Form.Control
                                placeholder="nom complet"
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
                                placeholder="mot de passe"
                                name="password"
                              
                                onChange={(e) => change(e)}
                              />
                            </Col>
                          </Row>
                          <Row className="rowedit">
                            <Col className="coledit">
                              <Form.Control
                                placeholder=" Téléphone"
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
                      </div>


                      
      
                      <div className="tabs-wrapper profile-tabs">
                          <ul className="nav nav-tabs" >
                          <li className="link"><Link to="/products">Produits</Link></li>
                              <li className="link"><Link to="/commandes">Commandes</Link></li>
                              <li className="link"><Link to="/providers">Fournisseurs</Link></li>
                              <li className="link"><Link to="/clients">Clients</Link></li>
                          </ul>
      
                          
                      </div>
      
                  </div>
              </div>
          </div>
      </div>
      </div> 
    )
}

export default Admin
