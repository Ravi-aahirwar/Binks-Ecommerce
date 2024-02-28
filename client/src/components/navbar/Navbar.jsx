import React from 'react'
import { Link } from 'react-router-dom'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'

export default function Navbar() {

  const {handleFiltersValue, text } = useFilterContexts()

  return (
    <div>
      <ul style={{display:"flex", gap:"30px",textDecoration:"none", justifyContent:"center"}} >
            <Link to="/" > <li> Home </li> </Link>
            <Link to="/products"> <li> Products </li> </Link>
            <Link to="/favourite" > <li> Favourite </li> </Link>
            <Link to="/cart" > <li> Cart </li> </Link>
      </ul>

      <input type="text" name='text' onChange={ handleFiltersValue}  autoComplete='off' placeholder='Search...' />

    </div>
  )
}
