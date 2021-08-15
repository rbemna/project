import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deleteOrder, getOrders } from '../redux/actions/orderActions';

const Orders = ({history}) => {
    const orders = useSelector((state) => state.order.orders);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getOrders());
    }, [dispatch]);
    const deleteHandler = (id) => {
      if (window.confirm("Are you sure?")) {
        dispatch(deleteOrder(id));
      }
    };
    return (
      <div class="tabPorvider">
        <div>
          <a href="#back" onClick={history.goBack}>
            Back
          </a>
        </div>
  
        <h2>Liste des comandes</h2>
        <div className="tab" style={{ padding: "10px" }}>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Client</th>
                  <th>Produits</th>
                  <th className="text-right">Total(DT)</th>
                  <th className="text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr>
                    {/* <td class="text-center">{product._id}</td> */}
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.user}</td>
                    <td>{order.orderItems.map(el=><span style={{display:"flex",flexDirection:"column"}}>{el.name}({el.qty})</span>)}</td>
                    <td class="text-right">{order.totalPrice}</td>
                    <td class="text-right">{order.status}</td>
                    <td class="td-actions text-right">
                      <button
                        type="button"
                        rel="tooltip"
                        className="btnPro"
                        data-original-title=""
                        title="supprimer produit"
                          onClick={() => deleteHandler(order._id)
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
    )
}

export default Orders
