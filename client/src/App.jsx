import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from './pages/products/Products'
import Favourite from './pages/favourite/Favourite'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Error from './pages/Error'
import ProductDetail from './pages/productDetail/ProductDetail'
export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productdetail/:id' element={<ProductDetail/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}
