
import { useParams } from "react-router-dom"
import './ItemDetailsContainer.css'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getSingleProduct } from "../firebase/firebase"


export default function ItemDetailsContainer(){

  const [cart, , addToCart, removeItem ] = useContext(CartContext);

  
  const [singleProd, setSingleProd]=useState([]);

  const {id} = useParams()

  useEffect(()=> {
    getSingleProduct(id).then(res=> setSingleProd(res) ) 
},[]);

const getQuantityById=(id)=>{
  return cart.find((item)=>item.id=== id)?.quantity || 0;
};

const quantityPerItem = getQuantityById(id)

return (
  <>
  {singleProd && <article className="container-fluid">
    <div className="row">
        <div className="col-lg-6">
          <img src={singleProd.image} alt={singleProd.title}/>
        </div>
        <div className="col-lg-6 description text-center">
              <h4 className="card-text1">{singleProd.title}</h4>
              <h4 className="card-text1">Precio:${singleProd.price}</h4>
              <p className="card-text2 text-center">Categoria:{singleProd.category}</p>
              <p className="card-text2 text-center">Marca:{singleProd.brand}</p>
              <p className="card-text2 text-center">Stock:{singleProd.stock}</p>
              <p className="card-text2 text-center">Descripcion:{singleProd.description}</p>

              {quantityPerItem > 0 && <div className="card-text2 text-center">Cantidad:{quantityPerItem}</div>}
              <button className="btn" onClick={()=> addToCart(id)}>Agregar al carrito</button>
              <button className="btn" onClick={()=> removeItem(id)}>Eliminar del carrito</button>
        </div>
    </div>
</article>}

  </>
)

}

