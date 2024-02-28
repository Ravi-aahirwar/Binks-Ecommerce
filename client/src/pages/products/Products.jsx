import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useProductContext } from '../../utils/contexts/ProductsContext'
import ProductsCard from '../../components/card/ProductsCard'
import Filters from '../../components/filters/Filters'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
export default function Products() {

  // const {products,loading} = useProductContext()
  const {filter_products, text} = useFilterContexts()
  return (
    <div>
      <Navbar/>
      <Filters/>
      <h2> {text} </h2>
      <div style={{display:"flex", flexWrap:"wrap", alignItems:"center",gap:"15px", justifyContent:"center"}} >
      {
        filter_products.map((elm) =>{
          return <ProductsCard key={elm.id} elm={elm}  />
        })
      }
      {
        filter_products.length <=0 && <h2>Item Not Found</h2>
      }
      </div>
    </div>
  )
}
