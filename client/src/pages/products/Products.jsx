import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useProductContext } from '../../utils/contexts/ProductsContext'
import ProductsCard from '../../components/card/ProductsCard'
import Filters from '../../components/filters/Filters'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
import "./Products.css"
export default function Products() {
  const { filter_products} = useFilterContexts()
  return (
    <div>
      <Navbar />
      <div className='filter-products-div' >
        <div className='main-filters-div'>
          <Filters />
        </div>
        <div className='all-products-div'>
          {
            filter_products.map((elm) => {
              return <ProductsCard key={elm.id} elm={elm} />
            })
          }
          {
            filter_products.length <= 0 && <h2 style={{ textAlign: "center", fontSize: "1.2rem" }} >Item Not Found</h2>
          }
        </div>
      </div>
    </div>
  )
}
