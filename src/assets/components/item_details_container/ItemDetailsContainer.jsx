
import { Link, NavLink, useParams } from "react-router-dom"
import './ItemDetailsContainer.css'
import { useContext, useEffect, useState } from "react"
import { getProduct } from "../../../asyncMock"
import TestCounter from "../count/TestCounter"
import { CartContext } from "../context/CartContext"


export default function ItemDetailsContainer({product}) {

  const [item, setItem]= useState({})

  const {id} = useParams()

  useEffect(()=>{
    setItem(getProduct(id))
  },[]);

  
  const [, , addItem] = useContext(CartContext);

  const handleClick = () => {
    addItem(product);
  };
  

    return (
      <>
        {<article className="container-fluid">
    <div className="row">
        <div className="col-lg-6">
          <img src={item.image} alt={item.title}/>
        </div>
        <div className="col-lg-6 description text-center">
              <h4 className="card-text1">{item.title}</h4>
              <h4 className="card-text1">Precio:${item.price}</h4>
              <p className="card-text2 text-center">Categoria:{item.category}</p>
              <p className="card-text2 text-center">Marca:{item.brand}</p>
              <p className="card-text2 text-center">Stock:{item.stock}</p>
              <p className="card-text2 text-center">Descripcion:{item.description}</p>
              <TestCounter amount={0} min={0} max={10}/>
              <button className="btn" onClick={handleClick}>Agregar al carrito</button>
        </div>
    </div>
</article>}
      </>
    )
  };
  
