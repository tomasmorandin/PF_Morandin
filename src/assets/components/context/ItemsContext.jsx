import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../../asyncMock";



export const ItemsContext = createContext(false);

export function ItemsProvider ({children}){

    const [products, setProducts]=useState([]);

    useEffect(()=> {
        getProducts.then(data=> setProducts(data))
    },[]);

    return (
        <ItemsContext.Provider value={[products, setProducts]}>
          {children}
        </ItemsContext.Provider>
      );

}

