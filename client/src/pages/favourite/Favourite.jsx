import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link} from 'react-router-dom'
import { useCartContext } from '../../utils/contexts/CartContext'

export default function Favourite() {
  const { favourite, removeFavourite} = useCartContext()

  return (
    <div>
      <Navbar />
      {
        favourite.map(({ id, title, price, description, image, category }) => {
          return <div key={id} >
            <div style={{ border: "1px solid black" }} >
              <Link to={`/productdetail/${id}`} >
                <img src={image} alt="Img" height={50} width={50} />
                <h4> Id:{id} </h4>
                <h4> Title : {title.slice(0, 60)} </h4>
                <h5> Price : {price} </h5>
              </Link>
              <h5> Category: {category} </h5>
              <h2 style={{ color: "red", cursor: "pointer" }} onClick={() => removeFavourite(id)} >Delete</h2>
            </div >
          </div>
        })
      }
      {favourite.length <= 0 && (
        <h2>Add Your Favourite Products</h2>
      )}
    </div>
  )
}
