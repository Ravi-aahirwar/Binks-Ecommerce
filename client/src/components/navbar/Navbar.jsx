import React from 'react'
import { Link } from 'react-router-dom'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
import { useCartContext } from '../../utils/contexts/CartContext'

export default function Navbar() {

  const {handleFiltersValue, text } = useFilterContexts()
  const {cart, favourite} = useCartContext()

  return (
    <div>
      <ul style={{display:"flex", gap:"30px",textDecoration:"none", justifyContent:"center"}} >
            <Link to="/" > <li> Home </li> </Link>
            <Link to="/products"> <li> Products </li> </Link>
            <Link to="/favourite" > <li> Favourite {favourite.length}  </li> </Link>
            <Link to="/cart" > <li> Cart {cart.length} </li> </Link>
      </ul>

      <input type="text" name='text' onChange={ handleFiltersValue}  autoComplete='off' placeholder='Search...' />

    </div>
  )
}
