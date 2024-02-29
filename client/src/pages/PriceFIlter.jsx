import React, { useState } from 'react';

const PriceFilter = ({maxValue, minPrice, price, handleChange}) => {

  return (
    <div>
      <label htmlFor="priceRange">Price Range</label>
      <input
        type="range"
        id="priceRange"
        name="priceRange"
        min={minPrice}
        max={maxValue}
        value={price}
        onChange={handleChange}
      />
      <p>Selected Price: ${price}</p>
    </div>
  );
};

export default PriceFilter;
