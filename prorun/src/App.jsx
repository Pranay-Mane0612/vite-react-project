import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Productsinfo from './components/Productsinfo'
import Searchitems from './components/Searchitems'
import Products, { Product } from './components/Products'
import Cart from './components/Cart'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { items } from './components/Data'

function App() {
  const [data,setdata]=useState([...items])
  const [cart,setCart]=useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id)
      if (existingProduct) {
        // Increment the quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        // Add new product
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
  setCart((prevCart) => {
    // Filter out the product with matching id
    const updatedCart = prevCart.filter((item) => item.id !== productId);
    return updatedCart;
  });
};


  return (
    <>
      <div>
    
       <BrowserRouter>
       <Navbar setdata={setdata}/>

       <Routes>
        <Route>
          </Route>
          <Route path="/"   element={<Products items={data} addToCart={addToCart}/>}/>
          <Route path="/products/:id"   element={<Productsinfo/>}/>
          <Route path="/searchinfo/:term"  element={<Searchitems/>}/>
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />


          </Routes>
          </BrowserRouter>
      </div>
      
    </>
  )
}

export default App