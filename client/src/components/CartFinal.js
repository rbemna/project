import React from 'react'
import {useSelector} from "react-redux"
const CartFinal = ({el}) => {
    const item = useSelector(state => state.cart.cartDetails)
    const ind=item.findIndex((element) => element.product === el.product)
    return (
      
            <tr >
                  <td  className="border-0">
                    {el.name}
                  </td>
                  <td className="border-0 align-middle"><strong>{el.price}</strong></td>
                  <td className="border-0 align-middle">
                  {item[ind].qty}
                  </td>
                  <td className="border-0 align-middle">{item[ind].qty*el.price}</td>
                  
                </tr>

                
               
            
  
    )
}

export default CartFinal
