import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import CartItem from '../../components/cartItem/CartItem'
import { useCartContext } from '../../utils/contexts/CartContext'

export default function Cart() {

  const { cart, clearCart, total_item, total_price, shipping_fee } = useCartContext()
  let totalPrice = shipping_fee + total_price;

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "20px" }}>
        {
          cart.map((elm, index) => {
            return <CartItem key={index} {...elm} />
          })
        }
      </div>
      <Link to="/products">
        <h4>Continue Shopping</h4>
      </Link>
      <button onClick={clearCart} >Clear Cart</button>
      <h3> SubTotal : {total_price} </h3>
      <h3> Shipping Fees : {shipping_fee} </h3>
      <hr />
      <h2>Order Total : {totalPrice.toLocaleString()} </h2>

    </div>
  )
}
