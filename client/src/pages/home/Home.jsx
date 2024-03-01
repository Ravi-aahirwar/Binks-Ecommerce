import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useProductContext } from '../../utils/contexts/ProductsContext'
import CategoryComp from '../../components/categoryComp/CategoryComp'
import ProductsCard from '../../components/card/ProductsCard'
export default function Home() {

  const { loading, error, products } = useProductContext()
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <Navbar />
      <CategoryComp />
      <h2> 🌟Our Top Products🌟 </h2>
      {
        products.map((elm) => {
          return <ProductsCard key={elm.id} elm={elm} />
        })
      }
    </div>
  )
}
