import {useEffect, useState} from 'react'
import './ItemListContainer.css'
import Item from "../item/Item";
import { getCategory, getProducts } from "../../../asyncMock";
import { useParams } from 'react-router-dom';
import TestCounter from '../count/TestCounter';


export default function ItemListContainer({children, greeting}) {
  
    const [products, setProducts]=useState([]);
    const {categoryId} = useParams();

    useEffect(()=> {
        if(categoryId){
          const filteredProducts = getCategory(categoryId);
          setProducts (filteredProducts);
        } else {
          getProducts.then(info=>setProducts(info));
        }
    },[categoryId]);

    return (
      <>
      <p className="greeting">{greeting}</p>
      {children}
      <TestCounter amount={0} min={0} max={10}/>
      <section>
      {products.map(product=><Item key={product.id} product={product}/>)}
      </section>
      </>
    )
  }