import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from './pages/products/Products'
import Favourite from './pages/favourite/Favourite'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Error from './pages/Error'
import Sucess from './pages/Sucess'
import Cancel from './pages/Cancel'
import ProductDetail from './pages/productDetail/ProductDetail'
import CategoryPage from './pages/categoryPage/CategoryPage'
import "./App.css"
export default function App() {

  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='*' element={<Error />} />
          <Route path='/sucess' element={<Sucess />} />
          <Route path='/cancel' element={<Cancel />} />
          <Route path='/category/:id' element={<CategoryPage />} />
        </Routes>
      </Router>
  )
}
