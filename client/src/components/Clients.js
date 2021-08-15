import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, getAllClients } from '../redux/actions/userActions';

const Clients = ({history}) => {
  
        const clients = useSelector((state) => state.userReducer.clients);
        console.log( "clients are:     ", clients)
      
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(getAllClients());
        }, [dispatch]);
        const deleteHandler = (id) => {
            if (window.confirm("Are you sure")) {
              dispatch(deleteUser(id));
            }
          };
        return (
          <div class="tabClient">
            <div>
              <a href="#back" onClick={history.goBack}>
                Retour
              </a>
            </div>
      
            <h2>Liste des clients</h2>
            <div className="tab" style={{ padding: "10px" }}>
              <div className="table-responsive">
              <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Adresse</th>
                <th className="text-right">Phone</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr>
                  <td>{client.fullName}</td>
                  <td>{client.email}</td>
                  <td>{client.adresse}</td>
                  <td class="text-right">{client.phone}</td>
                  <td class="td-actions text-right">
                    <button
                      type="button"
                      rel="tooltip"
                      className="btnPro"
                      data-original-title=""
                      title="supprimer produit"
                      onClick={() => deleteHandler(client._id)
                      }
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
          </div>
        );
    
}

export default Clients
