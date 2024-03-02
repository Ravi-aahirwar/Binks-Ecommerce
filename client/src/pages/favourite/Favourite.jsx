import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../utils/contexts/CartContext'
import "./Favourite.css"
export default function Favourite() {
  const { favourite, removeFavourite } = useCartContext()
  let favouriteImg = "https://img.freepik.com/premium-vector/heart-with-plus-positive-sign-wishlist-charity-element_598264-338.jpg"
  let whiteHeart = "https://img.icons8.com/?size=48&id=85038&format=png"
  let cartImg = "https://img.icons8.com/?size=100&id=9671&format=png"
  let rating = "https://img.icons8.com/?size=96&id=8ggStxqyboK5&format=png"

  const navigate = useNavigate()
  
  return (
    <div>
      <Navbar />
      <div className='outer-main-div-Favourite'>
        {
          favourite.map(({ id, title, price, image, rate }) => {
            return <div className='favourite-outerDiv'>
              <div className='products_div'>
                <div className='product-outer-div' >
                  <div className='product-inner-div' >
                    <div classNsame='product-img-div flexCenter' onClick={() => navigate(`/productdetail/${id}`)} >
                      <img src={image} className='product-img' alt="Image" />
                    </div>
                    <div className='product-detail flexCenter'>
                      <p className='product-title flexCenter' > {title.length >= 60 ? `${title.slice(0, 60)}...` : title} </p>
                      <div className='product-price-box flexCenter'>
                        <div className='product-price'>
                          <span className='currency'>₹</span> {price}
                        </div>
                        <img src={whiteHeart} height={20} width={20} onClick={() => removeFavourite(id)} alt="favourite" />
                        <img src={cartImg} height={20} width={20} onClick={() => navigate(`/productdetail/${id}`)} alt="cart" />
                        <img src={rating} height={20} width={20} alt="rate" /> {rate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
      {favourite.length <= 0 && (
        <div className='favouriteImg-div' >
          <img src={favouriteImg} alt="Favourite" />
          <h1>Your Wishlist is empty</h1>
        </div>
      )}
    </div>
  )
}
