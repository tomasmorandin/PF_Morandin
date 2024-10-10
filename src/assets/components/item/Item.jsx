import { NavLink } from 'react-router-dom'
import './Item.css'

export default function Item({product}) {

    return (
      <>
      <article className="text-center article">
        <div className='card'>
      <img className="card-img-top" src={product.image} alt={product.title}/>
                    <div className="card-body">
                    <h4 className="card-text1">Precio:${product.price}</h4>
                    <p className="card-text2">{product.title}</p>
                    <NavLink to={`/item/${product.id}`} className="btn">Mas detalles</NavLink>
                    </div>
                    </div>
      </article>
      </>
    )
  }