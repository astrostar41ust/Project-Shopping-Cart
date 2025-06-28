import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./componets/Header.jsx";
import { Outlet } from "react-router-dom";



function App () {

  const [cart, setCart] = useState(new Map([]))
  const [products, setProducts] = useState([])

  const cartItemsCount = [...cart.values()].reduce((acc, product) => acc + product, 0)
 
  useEffect(() => {
    async function fecthProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()

      setProducts(data)
    }

    fecthProducts()
  }, [])

  function handleAddToCart(productID) {
    const cartCopy = new Map([...cart])

    if(cartCopy.has(productID)) {
      const oldQuantity = cartCopy.get(productID)
      cartCopy.set(productID, oldQuantity + 1)
     
    }
    else {
      cartCopy.set(productID, 1)
     
    }
   
    setCart(cartCopy)
  }

  return (

    <div>
     <Header cartItemsCount={cartItemsCount}></Header>
     <Outlet context={{products, handleAddToCart, cart}}></Outlet>
    </div>
  )
}


export default App;
