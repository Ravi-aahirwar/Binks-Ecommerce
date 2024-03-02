import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import CartItem from '../../components/cartItem/CartItem'
import { useCartContext } from '../../utils/contexts/CartContext'
import { loadStripe } from '@stripe/stripe-js'
import "./Cart.css"
export default function Cart() {

  const { cart, clearCart, total_price } = useCartContext()
  let totalPrice = total_price;

  const apiUrl = process.env.NODE_ENV === "production" ? "https://binks-ecommerce-mern-backend.vercel.app" : "http://localhost:5000"
  let emptycart = "https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
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

    if (result.error) {
      console.log(result.error);
    }

  }


  return (
    <div>
      <Navbar />
      <div className='cart-outer-div'>
        <div className='cartItem-inner-div'>
          {
            cart.map((elm, index) => {
              return <CartItem key={index} {...elm} />
            })
          }
          {
            cart.length <= 0 && (
              <div className='empty-cartImg'>
                <img src={emptycart} alt='Empty Cart' />
              </div>
            )
          }
        </div>
        <div className='cartTitls-inner-div'>
          <h3 className='price-details-capital' > PRICE DETAILS </h3>
          <div className='inner-div-Pricing' >
            <div className='price-one-items flexCharges'>
              <p> Price (1 items):</p>
              <p>₹{parseFloat(total_price).toFixed(2)}</p>
            </div>
            <div className='delivery-charger-div flexCharges'>
              <p> Delivery Charges: </p>
              <p> FREE </p>
            </div>
            <div className='coupan-discount-div flexCharges'>
              <p> Coupon Discount: </p>
              <p> ₹-0.00 </p>
            </div>
            <div className='total-amount-div flexCharges'>
              <p style={{ color: "black", fontWeight: "bolder" }} > Total Amount:</p>
              <p> ₹{parseFloat(total_price).toFixed(2)} </p>
            </div>
          </div>
          <div className='ckeckout-btn-div' >
            {
              totalPrice >= 1 ? (
                <button onClick={makePayment} >Check Out.</button>
              ) : (
                <button disabled >Check Out</button>
              )
            }
          </div>
          <button onClick={clearCart} className='clearCart-btn' >Clear Cart</button>
          <Link to="/products" ><p style={{textAlign:"center"}}>Continue Shopping</p></Link>
        </div>
      </div>
    </div>
  )
}
