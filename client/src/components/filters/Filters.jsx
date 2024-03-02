import React, { useState } from 'react'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'
import "./Filters.css"
export default function Filters() {

  const { filter_products,
    all_products,
    handleFiltersValue,
    sorting,
    filters: { maxPrice, price, minPrice }
  } = useFilterContexts()

  const getCategoryData = (data, property) => {
    let newData = data.map((elm) => {
      return elm[property]
    })
    return (newData = ["All", ...new Set(newData)]);
  }

  const categoryData = getCategoryData(all_products, "category")

  return (
    <div>
      <h1 className='productsAvailable'> {filter_products.length} Products Available. </h1>
      <div className='filters-outer-div filters' >
        <h2 className='productsAvailable' > Sort By Price.</h2>
        <div className='sorting-div-outer'>
          <form onChange={sorting} className='filters' >
            <label>
              <input type="radio" id='low' name='radio' value="lowest" />
               Low to High
            </label>
            <label>
              <input type="radio" id='High' name='radio' value="highest" />
               High to Low
            </label>
            <label>
              <input type="radio" id='a-z' name='radio' value="a-z" />
               A-Z
            </label>
            <label>
              <input type="radio" id='z-a' name='radio' value="z-a" />
               Z-A
            </label>
          </form>
        </div>
        <h2 className='productsAvailable'> Filter By Category. </h2>
        <div className='categoryFIlter-outer-div filters'>
          {
            categoryData.map((elm, index) => {
              return (
                <label key={index} >
                  <input type="radio" value={elm} name='category' onChange={handleFiltersValue} />
                  {elm}.
                </label>
              )
            })
          }
        </div>
        <h2 className='productsAvailable'> Filter By Price. </h2>
        <div className='range-price-filter filters'>
          <input type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            name='price'
            onChange={handleFiltersValue}
          />
          <p className='productsAvailable'> Filtered Price: {price}  </p>
        </div>
      </div>
    </div>
  )
}
