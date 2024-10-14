import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartElements from "./CartElements";
import { NavLink } from "react-router-dom";

export default function Cart() {

  const [cart, , quantity, totalPrice] = useContext(CartContext);

    return (
      <>
      <section className="cart text-center">
  {cart.length && 
  (<section>{cart && cart.map((prod) => <CartElements key={prod.id} item={prod}/>)}
  <h3 className="card-text2 text-center">Articulos: {quantity}</h3>
  <h3 className="card-text2 text-center">$ {totalPrice}</h3>
  <NavLink className="btn" to={`/Compra`}>Finalizar Compra</NavLink>
  </section>)}  
  </section>
      </>
    )

  }
