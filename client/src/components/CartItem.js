import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment, removeFromCart } from '../redux/actions/cartActions'
const CartItem = ({el}) => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.cart.cartDetails)
    const ind=item.findIndex((element) => element.product === el.product)
    return (
      
            <tr >
                  <td className="border-0">
                    <div className="p-2">
                      <img src={el.image} alt="" style={{width:"70px",height:"70px"}} className="img-fluid rounded shadow-sm"/>
                      
                    </div>
                  </td>
                  <td className="border-0 align-middle"><strong>{el.price}</strong></td>
                  <td className="border-0 align-middle">
                  <button className="btn-minus" onClick={()=>dispatch(decrement(el.product))} ><i className="fa fa-minus"></i></button>
          <button className="btn">{item[ind].qty}</button>
            <button className="btn-plus" onClick={()=>dispatch(increment(el.product))}><i className="fa fa-plus"></i></button>
                  </td>
                  <td className="border-0 align-middle">{item[ind].qty*el.price}</td>

                  <td className="border-0 align-middle"><button href="#" className="text-dark" onClick={()=>dispatch(removeFromCart(el.product))}><i className="fa fa-trash"></i></button></td>
                </tr>
               
            
  
    )
}

export default CartItem
