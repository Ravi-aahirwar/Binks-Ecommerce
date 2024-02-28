import { useProductContext } from "./ProductsContext";

import { createContext, useContext, useReducer, useEffect } from "react"

const filterContexts = createContext();

const FilterContextsProvider = ({ children }) => {

    const { products } = useProductContext()

    const initialState = {
        filter_products: [],
        all_products: [],
        filters: {
            text: "",
            category: "All",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        },
    }

    const reducer = (state, action) => {

        if (action.type === "ALL_FILTER_PRODUCTS") {

            let priceArray = action.payload.map((elm) => elm.price)
            let maxPrice = Math.max(...priceArray)

            return {
                ...state,
                all_products: [...action.payload],
                filter_products: [...action.payload],
                filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice }
            }
        }

        if (action.type === "HANDLE_FILTER_VALUE") {
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value
                }
                // text: action.payload
            }
        }

        if (action.type === "FILTER_PRODUCTS") {
            const { all_products } = state;
            let filterProducts = all_products
            const { text, category, price } = state.filters;
            if (text) {
                filterProducts = filterProducts.filter((elm) => {
                    return elm.title.toLowerCase().includes(text);
                })
            }
            if (category !== "All") {
                filterProducts = filterProducts.filter((elm) => {
                    return elm.category === category
                })
            }
            if(price === 0){
                filterProducts = filterProducts.filter((elm)=> elm.price === price )
            } else{
                filterProducts = filterProducts.filter((elm)=> elm.price <= price);
            }
            return {
                ...state,
                filter_products: filterProducts
            }
        }


        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleFiltersValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        dispatch({ type: "HANDLE_FILTER_VALUE", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
    }, [state.filters])

    useEffect(() => {
        dispatch({ type: "ALL_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <filterContexts.Provider value={{
            ...state,
            handleFiltersValue,

        }}>
            {children}
        </filterContexts.Provider>
    )
}

export const useFilterContexts = () => {
    return useContext(filterContexts)
}

export default FilterContextsProvider;