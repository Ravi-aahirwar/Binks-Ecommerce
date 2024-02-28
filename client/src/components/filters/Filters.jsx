import React from 'react'
import { useFilterContexts } from '../../utils/contexts/FilterContexts'

export default function Filters() {

  const { filter_products, all_products, handleFiltersValue, sorting, filters: { maxPrice, price, minPrice } } = useFilterContexts()

  const getCategoryData = (data, property) => {
    let newData = data.map((elm) => {
      return elm[property]
    })
    return (newData = ["All", ...new Set(newData)]);
  }

  const categoryData = getCategoryData(all_products, "category")

  return (
    <div>
      <h1> {filter_products.length} Products Available </h1>
      <h2> Sort By Price.</h2>
      <form onChange={sorting}>
        <label>
          <input type="radio" id='low' name='radio' value="lowest" />
          High to Low.
        </label>
        <label>
          <input type="radio" id='High' name='radio' value="highest" />
          Low to High.
        </label>
        <label>
          <input type="radio" id='a-z' name='radio' value="a-z" />
          Products :A-Z
        </label>
        <label>
          <input type="radio" id='z-a' name='radio' value="z-a" />
          Products :Z-A
        </label>
      </form>
      <h2> Filter By Category </h2>
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
      <h2> Range Pice Filter </h2>
      <p> {price.toLocaleString()} </p>
      <input type="range"
        min={minPrice}
        max={maxPrice}
        name='price'
        value={price}
        onChange={handleFiltersValue}
      />
    </div>
  )
}
