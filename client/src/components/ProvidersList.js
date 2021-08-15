import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, getAllProviders } from '../redux/actions/userActions';


const ProvidersList = ({history}) => {
    const providers = useSelector((state) => state.userReducer.providers);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProviders());
  }, [dispatch]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div class="tabPorvider">
      <div>
        <a href="#back" onClick={history.goBack}>
          Back
        </a>
      </div>

      <h2>Liste des fournisseurs</h2>
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
              {providers.map((provider) => (
                <tr>
                  {/* <td class="text-center">{product._id}</td> */}
                  <td>{provider.fullName}</td>
                  <td>{provider.email}</td>
                  <td>{provider.adresse}</td>
                  <td class="text-right">{provider.phone}</td>
                  <td class="td-actions text-right">
                    <button
                      type="button"
                      rel="tooltip"
                      className="btnPro"
                      data-original-title=""
                      title="supprimer produit"
                        onClick={() => deleteHandler(provider._id)
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

export default ProvidersList
