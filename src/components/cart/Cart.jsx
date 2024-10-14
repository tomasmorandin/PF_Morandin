import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function Cart() {

    const [cart, , , totalPrice, , clearCart] = useContext(CartContext);

    const handleClear = () =>{
    clearCart();
    }


    return (
      <>
      <section className="card-text1 cart text-center">
      <h1 className="card-text1">Carrito</h1>
      {
        cart.map((prod)=>(
          <div key={prod.id}>
          <h3 className="card-text1">{prod.title}</h3>
          <p className="card-text2">Precio unit.:${prod.price}</p>
          <p className="card-text2">Precio total:${prod.price * prod.quantity}</p>
          <p className="card-text2">Cant.:{prod.quantity}</p>
          </div>
        ))
      }
      
      {cart.length > 0 ? 
      <> 
      <p className="card-text2">Precio total = ${totalPrice()}</p>
      <button className="btn" onClick={handleClear}>Vaciar</button>
      <NavLink className="btn" to={`/Compra`}>Finalizar Compra</NavLink>
      </> : <h2 className="card-text2">El Carrito esta vacio!!</h2>
      }

      </section>

      </>
    )

}

/*
  <section className="cart text-center">
  {cart.length && 
  (<section>{cart && cart.map((prod) => <CartElements key={prod.id} item={prod}/>)}
  <h3 className="card-text2 text-center">Articulos: {quantity}</h3>
  </section>)}  
  
  */

