import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import CartItem from '../../components/cartItem/CartItem'
import { useCartContext } from '../../utils/contexts/CartContext'
import { loadStripe } from '@stripe/stripe-js'
export default function Cart() {

  const { cart, clearCart, total_price, shipping_fee } = useCartContext()
  let totalPrice = shipping_fee + total_price;

  const apiUrl = process.env.NODE_ENV === "production"? "https://binks-ecommerce-mern-backend.vercel.app":"http://localhost:5000"

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51Ony30SINGekyYxSNFwFd8a20sZ0Qp2WqvxjufiheelACz4ARUiwVPYi0AQgd45ecPIgcaf0mA0YxtSmtbFx7aiV00E1SFJWqg");

    const body = {
      products: cart
    }
    const headers = {
      "Content-Type": "application/json"
    }

    const response = await fetch(`${apiUrl}/api/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if(result.error){
      console.log(result.error);
    }

  }


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
      {cart.length > 0 && (
        <Link to="/products">
          <h4>Continue Shopping</h4>
        </Link>
      )}

      <button onClick={clearCart} >Clear Cart</button>
      <h3> SubTotal : {parseFloat(total_price).toFixed(2)} </h3>
      <h3> Shipping Fees : {shipping_fee} </h3>
      <hr />
      <h2>Order Total : {totalPrice.toLocaleString()} </h2>
      {
        totalPrice >= 1 ? (
          <button onClick={makePayment} >Check Out.</button>
        ) : (
          <button disabled >Check Out</button>
        )
      }
    </div>
  )
}
