import { NavLink } from 'react-router-dom'
import './CartWidget.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function CartWidget() {

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr)=>{
    return acc + curr.quantity;
  }, 0);

  return (
      <>
      <div>
        <NavLink to={`/cart/:id`}>
          <i className="fa-solid fa-cart-shopping cart-item"></i>
        </NavLink>
        <span className='mx-2'>{quantity}</span>
        </div>
      </>
    )
}