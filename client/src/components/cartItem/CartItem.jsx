import React from 'react'
import CartToggle from '../cartToggle/CartToggle'
import { useCartContext } from '../../utils/contexts/CartContext'
import "./CartItem.css"
export default function CartItem({ id, title, image, price, amount, category, description }) {

    const { removeItem, setDecrease, setIncrease } = useCartContext()
    const cartCss = " width: 100px;"

    return (
        <div>
            <div className='cartOuter-div'>
                <div className='cartImag-divInner-div'>
                    <img src={image} alt="img" />
                </div>
                <div className='cart-item-div'>
                    <div className='title-price-category' >
                        <h4>{title.length >= 30 ?`${title.slice(0, 30)}...`: title}</h4>
                        <p> Price ₹: {price} </p>
                        <p> <span>Category</span>: {category} </p>
                        <h5>Total Price ₹: {(price * amount).toFixed(2)}</h5>
                    </div>
                    <div className='toggle-or-remove'>
                        <div>
                            <CartToggle
                                amount={amount}
                                setDecrease={() => setDecrease(id)}
                                setIncrease={() => setIncrease(id)}
                            />
                        </div>
                        <p style={{ textAlign: "center", color: "red", cursor: "pointer" }} onClick={() => removeItem(id)} >Remove</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
