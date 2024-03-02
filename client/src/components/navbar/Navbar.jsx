import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
import { useCartContext } from '../../utils/contexts/CartContext'
import css from './Navbar.module.css'
import { toast, ToastContainer } from 'react-toastify'
import { useAuthContext } from '../../utils/contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  let cartImg = "https://img.icons8.com/?size=100&id=9671&format=png"
  let redHeart = "https://cdn-icons-png.freepik.com/256/6862/6862229.png?ga=GA1.1.1774320507.1700327700&"
  let whiteHeart = "https://img.icons8.com/?size=48&id=85038&format=png"
  let shopImg = "https://img.icons8.com/?size=96&id=13010&format=png"
  let userImg = "https://img.icons8.com/?size=100&id=23264&format=png"
  const { handleFiltersValue, text } = useFilterContexts()
  const { cart, favourite } = useCartContext()

  const { googleSignIn, logOut, user } = useAuthContext()
  const navigate = useNavigate();

  const handleGooglSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("SignIn Sucessfully!")
      navigate("/products")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleLogout = () => {
    logOut();
    navigate("/");
  }

  return (
    <div>
      <div className={css.nav_outerDiv} >
        <div className={css.first_div}>
          <Link to="/" > <h3>Binks</h3> </Link>
        </div>
        <div className={css.third_div}>
          <div className={css.second_div} >
            <input type="text" name='text' onChange={handleFiltersValue} autoComplete='off' placeholder='Search...' />
          </div>
          <div className={css.userSign_in}>
            {
              user ? (
                <div className={css.userSign_in} >
                  <img src={user.photoURL ? user.photoURL : userImg} alt="User" />
                  <p onClick={handleLogout}> LogOut </p>
                </div>
              ) : (
                <p onClick={handleGooglSignIn} >SignIn</p>
              )
            }
          </div>
          <div className={css.shopImg} >
            <Link to="/products"> <img src={shopImg} alt="shop" /></Link>
          </div>
          <div className={css.heartImg}>
            <Link to="/favourite" >  <img src={redHeart} alt="heart" /> <span> {favourite.length} </span>   </Link>
          </div>
          <div className={css.cartImg}>
            <Link to="/cart" > <img src={cartImg} alt="cart" /> <span> {cart.length} </span>  </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  )
}
