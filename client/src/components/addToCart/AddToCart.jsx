import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CartToggle from '../cartToggle/CartToggle';
import { useCartContext } from '../../utils/contexts/CartContext';
import "./AddToCart.css"
export default function AddToCart({ product }) {

    const navigate = useNavigate()

    const { addToCart } = useCartContext()
    const { id } = product
    const stock = 5;
    const [amount, setAmount] = useState(1)
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    const handleAddToCart = () => {
        addToCart(id, amount, product)
        navigate("/cart")

    }

    return (
        <div className='addToCart-outer-div' >
            <CartToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <div className='addToCart-button'>
                <button onClick={handleAddToCart} >Add To Cart</button>
            </div>
        </div>
    )
}
