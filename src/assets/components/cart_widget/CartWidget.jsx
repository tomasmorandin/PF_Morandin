import { NavLink } from 'react-router-dom'
import './CartWidget.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function CartWidget() {

  const [cart] = useContext(CartContext);

  return (
      <>
      <div>
        <NavLink href=""><i className="fa-solid fa-cart-shopping cart-item"></i></NavLink>
        <span className='mx-2'>{cart.length}</span>
        </div>
      </>
    )
}