import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../utils/contexts/CartContext';
import "./ProductsCard.css"

export default function ProductsCard(props) {
  const { id, title, price, description, category, image, rating: { rate } } = props.elm

  const { addToFavourite} = useCartContext();

  const product = [id, title, price, description, category, image, rate]
  const handleFavourite = () => {
    addToFavourite(id, product)
  }

  const navigate = useNavigate()

  let redHeart = "https://cdn-icons-png.freepik.com/256/6862/6862229.png?ga=GA1.1.1774320507.1700327700&"
  let cartImg = "https://img.icons8.com/?size=100&id=9671&format=png"
  let rating = "https://img.icons8.com/?size=96&id=8ggStxqyboK5&format=png"
  return (
    <div className='products_div'>
      <div className='product-outer-div' >
        <div className='product-inner-div' >
          <div className='product-img-div flexCenter' onClick={()=> navigate(`/productdetail/${id}`)} >
            <img src={image} className='product-img' alt="Image" />
          </div>
          <div className='product-detail flexCenter'>
            <p className='product-title flexCenter' > {title.length >= 60 ?`${title.slice(0, 60)}...`: title} </p>
            <div className='product-price-box flexCenter'>
              <div className='product-price'>
                <span className='currency'>₹</span> {price}
              </div>
                <img src={redHeart} height={20} width={20} onClick={handleFavourite} alt="favourite" />
                <img src={cartImg} height={20} width={20} onClick={()=> navigate(`/productdetail/${id}`)}  alt="cart" />
                <img src={rating} height={20} width={20} alt="rate" /> {rate}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
