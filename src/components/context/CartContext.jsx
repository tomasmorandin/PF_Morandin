import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../firebase/firebase";

export const CartContext=createContext(false);

export function CartProvider({children}){

    const [cart, setCart]=useState([]);

    
    const addToCart = (id) => {
        setCart((currItems)=>{
          const isItemsFound=currItems.find ((item)=> item.id === id);
          if (isItemsFound){
            return currItems.map((item)=>{
              if(item.id === id){
                return{...item, quantity: item.quantity + 1}
              } else{
                return item;
              }
            })
          } else{
            return [...currItems, {id, quantity:1}];
          }
        });
      };
      
      
/*
    const addToCart = (item)=>{
        const itemAgregado = {...item, quantity}
        setCart ([...cart, itemAgregado])
    }
*/
        const removeItem = (id)=>{
            setCart((currItems)=>{
              if(currItems.find((item)=> item.id === id)?.quantity === 1){
                return currItems.filter((item)=> item.id !== id)
              } else {
                return currItems.map ((item)=>{
                  if(item.id === id) {
                    return {...item, quantity: item.quantity - 1};
                  } else {
                    return item;
                  }
                })
              }
            })
          }

          const totalPrice = ()=>{
            return cart.reduce((acc, prod)=> acc + prod.price * prod.quantity, 0);
          } 

          const quantity = ()=>{
            return cart.reduce((acc, prod)=> acc + prod.quantity, 0);
          } 

          const clearCart = ()=>{
            setCart([]);
          }


    return(
        <>
        <CartContext.Provider value={[cart, setCart, addToCart, removeItem, totalPrice, quantity, clearCart]}>
          {children}
        </CartContext.Provider>
        </>
    )
};

