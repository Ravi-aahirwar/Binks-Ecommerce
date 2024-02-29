import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from './pages/products/Products'
import Favourite from './pages/favourite/Favourite'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/favourite' element={<Favourite />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}
