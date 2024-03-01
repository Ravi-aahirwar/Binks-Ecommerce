import React, { useState } from 'react'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
import { Link, useNavigate } from 'react-router-dom'

export default function CategoryComp() {

    const { all_products } = useFilterContexts()
    const getCategoryData = (data, property) => {
        let newData = data.map((elm) => {
            return elm[property]
        })
        return (newData = [...new Set(newData)]);
    }

    const categoryData = getCategoryData(all_products, "category")

    const navigate = useNavigate()

    return (
        <div>
            {
                categoryData.map((elm, index) => {
                    return <div key={index} >
                        <div onClick={()=> navigate(`/category/${elm}`)} style={{cursor:"pointer"}}>
                            <h2> {elm} </h2>
                        </div>
                    </div>
                })
            }
        </div >
    )
}
