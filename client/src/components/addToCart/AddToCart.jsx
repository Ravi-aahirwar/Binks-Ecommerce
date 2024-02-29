import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CartToggle from '../cartToggle/CartToggle';
import { useCartContext } from '../../utils/contexts/CartContext';
export default function AddToCart({ product }) {

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
    }

    return (
        <div>
            <CartToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <hr />
            <Link to="/cart" onClick={handleAddToCart} >
                <button>Add To Cart</button>
            </Link>
        </div>
    )
}
