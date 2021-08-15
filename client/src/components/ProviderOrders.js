import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../redux/actions/orderActions';


const ProviderOrders = ({el}) => {
 const user = useSelector((state) => state.userReducer.users);

 const dispatch=useDispatch()
  const elm=el.orderItems;
  console.log("elm", elm)
  const ordI= elm.filter(ord=>ord.provider===user._id)
  console.log("ordI", ordI)

const [newOrder, setNewOrder] = useState(el);
  const change= (e) => {
    setNewOrder({...newOrder,[e.target.name]:e.target.value})
  };
     
    return (
        ordI.map(elmt=>  <tr>
           
            <td>{el.createdAt.substring(0, 10)}</td>
          
           <td>
               {elmt.name}
              
           </td>
           <td>{elmt.price}</td>
           <td>
               {elmt.qty}
           </td>
           <td>{elmt.qty*elmt.price}</td>
           <td>{el.status}
        </td>
           <td style={{width:"auto"}}>
               <div className="validationsatus" >
               
               <select
          className="form-select form-select-sm"
          style={{width:"auto"}}
          aria-label=".form-select-sm example"
          name="status"
          onChange={(e) => change(e)}
        >
          <option selected>changer le statut</option>
          <option name="délivrée">délivrée</option>
          <option name="en cours">en cours</option>
          <option name="annulée">annulée</option>
        </select> 
         <button onClick={() => dispatch(updateOrder(el._id, newOrder))} title="valider" >
        valider
        </button></div>
          </td>
           </tr>) )
       
       
       
   
}

export default ProviderOrders