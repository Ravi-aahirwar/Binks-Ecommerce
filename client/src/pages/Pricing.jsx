import React, { useState, useReducer } from 'react';
import PriceFilter from './PriceFIlter'
import { useProductContext } from '../utils/contexts/ProductsContext';

const products = [
    { id: 0, name: 'Product - A', price: 20 },
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 100 },
    { id: 3, name: 'Product C', price: 150 },
    { id: 4, name: 'Product A', price: 180 },
    { id: 5, name: 'Product B', price: 200 },
    { id: 6, name: 'Product C', price: 250 },
];

const initialState = {
    price: 0,
    filterProducts: products,
};

const reducer = (state, action) => {
    if (action.type === 'SET_PRICE') {
        return { ...state, price: action.payload };
    } else if (action.type === 'FILTER_PRODUCTS') {
        return {
            ...state,
            filterProducts: action.payload === 0
                ? products
                : products.filter(product => product.price <= action.payload),
        };
    } else {
        return state;
    }
};

const Pricing = () => {
    const {error, loading} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { price, filterProducts } = state;

    const priceArray = products.map((elm) => elm.price);
    const maxValue = Math.max(...priceArray);
    const minPrice = Math.min(...priceArray);

    const handleChange = (event) => {
        const selectedPrice = parseInt(event.target.value, 10);
        dispatch({ type: 'SET_PRICE', payload: selectedPrice });
        dispatch({ type: 'FILTER_PRODUCTS', payload: selectedPrice });
    };

    return (
        <div>
            <PriceFilter maxValue={maxValue} price={price} handleChange={handleChange} minPrice={minPrice} />
            <h2> {error} </h2>
            <h2>Filtered Products</h2>
            <ul>
                {filterProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pricing;
