import './NavBar.css'
import CartWidget from '../cart_widget/CartWidget'
import Brand from './Brand'
import { NavLink } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'

export default function NavBar(product) {
    return (
      <>
      <nav className="navbar navbar-expand-md navbar-dark">
  <div className="container-fluid">
    <Brand/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item">
         <NavLink to={`/category/Pilas`} className="nav-link mx-4">Pilas</NavLink>
         </li>
      <li className="nav-item">
         <NavLink to={`/category/Baterias`} className="nav-link mx-4">Baterias</NavLink>
         </li>
      <li className="nav-item">
         <NavLink to={`/category/Controles`} className="nav-link mx-4">Controles</NavLink>
         </li>
      </ul>
      <CartProvider>
      <CartWidget/>
      </CartProvider>
    </div>
  </div>
</nav>
      </>
    )
  }

