import React from 'react'
import { useParams } from 'react-router-dom'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
import Navbar from '../../components/navbar/Navbar'
import ProductsCard from '../../components/card/ProductsCard'
import "./CategoryPage.css"
export default function CategoryPage() {
    const { id } = useParams()
    const { all_products } = useFilterContexts()

    const filterProducts = all_products.filter((elm) => elm.category.includes(id))

    return (
        <div>
            <Navbar />
            <h2 className='cateorytitle-h2' > {id} </h2>
            <div className='categoryPage-outer'>
                {
                    filterProducts.map((elm) => {
                        return <ProductsCard key={elm.id} elm={elm} />
                    })
                }
            </div>
        </div>
    )
}
