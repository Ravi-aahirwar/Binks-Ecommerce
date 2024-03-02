import React, { useEffect } from 'react'
import { useProductContext } from '../../utils/contexts/ProductsContext'
import { useParams } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'
import AddToCart from '../../components/addToCart/AddToCart';
import { useCartContext } from '../../utils/contexts/CartContext';
import "./ProductDetail.css"
import { toast } from 'react-toastify';
export default function ProductDetail() {
    const { id } = useParams()
    const { addToFavourite } = useCartContext();
    const { getApiProduct, singleProduct } = useProductContext()
    const API = "https://fakestoreapi.com/products";

    let redHeart = "https://cdn-icons-png.freepik.com/256/6862/6862229.png?ga=GA1.1.1774320507.1700327700&"
    let rating = "https://img.icons8.com/?size=96&id=8ggStxqyboK5&format=png"


    const {
        id: abcd,
        price,
        description,
        category,
        image,
        title,
        ratings
    } = singleProduct;
    const product = [id, title, price, description, category, image]
    const handleFavourite = () => {
        addToFavourite(id, product)
        toast.success("Product Added To WishList.")
    }
    useEffect(() => {
        getApiProduct(`${API}/${id}`)
    }, [API]);
    return (
        <div>
            <Navbar />
            <div className='product-detailDiv' >
                <div className='right-div detailDiv' >
                    <div className='productDetail-img'>
                        <img src={image} alt="Img" />
                    </div>
                </div>
                <div className='left-div detailDiv'>
                    <div className='inner-left-div'>
                        <p className='product-title-h3'> {title} </p>
                        <div className='price-or-favourite'>
                            <span> ₹{price} </span>
                            <div className='rate-or-favourite'>
                                <img src={rating} height={25} width={25} alt="rate" /> 4
                                <img src={redHeart} height={25} style={{cursor:"pointer"}} width={25} onClick={handleFavourite} alt="favourite" />
                            </div>
                        </div>
                        <div className='addTo-cart'>
                            <AddToCart product={singleProduct} />
                        </div>
                        <div className='product-detail-div'>
                            <h3> Product Details</h3>
                            <p> {description} </p>
                        </div>
                        <div className=' product-detail-div categoryDiv'>
                            <p> <span>Category</span> : {category} </p>
                        </div>
                        <div className='choose-us product-detail-div'>
                            <h3>Why You Choose Us</h3>
                            <p id='para' >Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
