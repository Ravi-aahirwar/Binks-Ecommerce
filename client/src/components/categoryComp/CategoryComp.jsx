import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./CategoryComp.css"
export default function CategoryComp() {
    // const { all_products } = useFilterContexts()
    // const getCategoryData = (data, property) => {
    //     let newData = data.map((elm) => {
    //         return elm[property]
    //     })
    //     return (newData = [...new Set(newData)]);
    // }

    // const categoryData = getCategoryData(all_products, "category")
    const navigate = useNavigate()
    let mens = "men's clothing"
    let jewel = "jewelery"
    let electr = "electronics"
    let wemens = "women's clothing"
    return (
        <div>
            <div className='category-outer-div'>
                <div className='firstPortion' >
                    <div className='mensClothing_div categoryDiv' onClick={() => navigate(`/category/${mens}`)} >
                        <h2>men's clothing</h2>
                    </div>
                    <div className='jewellery_div categoryDiv' onClick={() => navigate(`/category/${jewel}`)} >
                        <h2>jewelery</h2>
                    </div>
                </div>
                <div className="secondPortion">
                    <div className='electronics_div categoryDiv'onClick={() => navigate(`/category/${electr}`)}>
                        <h2>electronics</h2>
                    </div>
                    <div className='womensClothing_div categoryDiv'onClick={() => navigate(`/category/${wemens}`)}>
                        <h2>women's clothing</h2>
                    </div>
                </div>
            </div>
        </div >
    )
}
