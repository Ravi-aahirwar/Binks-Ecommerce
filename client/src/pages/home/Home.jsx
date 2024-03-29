import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useProductContext } from '../../utils/contexts/ProductsContext'
import CategoryComp from '../../components/categoryComp/CategoryComp'
import ProductsCard from '../../components/card/ProductsCard'
import Loader from '../../components/loader/Loader'
import "./Home.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
export default function Home() {
  const { loading, error, products } = useProductContext()
  if (loading) {
    return <Loader />
  }
  return (
    <div>
      <Navbar />
      <CategoryComp />
      <div className='top-products'>
        <h2> 🌟Our Top Products🌟 </h2>
      </div>
      <div className='product-cards-div'>
        {
          products.map((elm) => {
            return <ProductsCard key={elm.id} elm={elm} />
          })
        }
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
        transition: Bounce
      />


    </div>
  )
}
