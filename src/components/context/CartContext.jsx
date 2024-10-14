import { createContext, useState } from "react";

export const CartContext=createContext(false);

export function CartProvider({children}){

    const [cart, setCart]=useState([]);


    const addToCart = (item, quantity)=>{
        const itemAdd = {...item, quantity}
        const newCart = [...cart]
        const isIntoTheCart = newCart.find((prod)=> prod.id === itemAdd.id)
        if(isIntoTheCart){
          isIntoTheCart.quantity = isIntoTheCart.quantity + quantity;
          setCart(newCart)
        }else{
          setCart ([...cart, itemAdd])
        }
        };


/*
    const addToCart = (id, quantity) => {
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

        const removeItem = (id, quantity)=>{
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

*/
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
        <CartContext.Provider value={[cart, setCart, addToCart, totalPrice, quantity, clearCart]}>
          {children}
        </CartContext.Provider>
        </>
    )
};

