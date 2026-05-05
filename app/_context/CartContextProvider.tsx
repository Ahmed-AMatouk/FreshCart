"use client"
import { createContext, ReactNode, useEffect, useState } from "react"
import { getLoggedUserCart } from "../_actions/getLoggedUserCart.action"
import { CartResponseType } from "@/types/cart.type";

export const CartItemsContext = createContext({})
export default function CartContextProvider({children}:{children:ReactNode}){
  const [dataOfCartItems, setdataOfCartItems] = useState<CartResponseType>();
const [loadingContext, setLoadingContext] = useState(true);
useEffect(() => {
  getLoggedUserCart().then((itemsCart) => {
    setdataOfCartItems(itemsCart)
    setLoadingContext(false)
  })
}, [])
  return (
    <CartItemsContext.Provider value={{dataOfCartItems,setdataOfCartItems,loadingContext}}>
      {children}
    </CartItemsContext.Provider>
  )
}
