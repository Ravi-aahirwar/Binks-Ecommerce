import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsCard(props) {
  const {id, title, price, description, category, image, rating:{rate}} = props.elm
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
        </div>
    </div>
  )
}
