import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../utils/contexts/ProductsContext'
import { useCartContext } from '../../utils/contexts/CartContext';

export default function ProductsCard(props) {
  const {id, title, price, description, category, image, rating:{rate}} = props.elm

  const {addToFavourite} = useCartContext(); 

  const product = [id, title, price, description, category, image, rate]

  const handleFavourite = ()=>{
    addToFavourite(id, product)
  }

  return (
    <div>
        <div style={{border:"1px solid black"}} >
          <Link to={`/productdetail/${id}`} style={{textDecoration:'none', color:"black"}} >
            <img src={image} alt="Img" height={50} width={50}/>
            <p> ID : {id} </p>
            <p> Title : {title} </p>
            <p> Price : {price} </p>
            <p> Category : {category} </p>
          </Link>
          <h2 style={{color:"red", cursor:"pointer"}} onClick={handleFavourite}> Add To WishList. </h2>
        </div>
    </div>
  )
}
