import { useProductContext } from "./ProductsContext";

import { createContext, useContext, useReducer, useEffect } from "react"

const filterContexts = createContext();

const FilterContextsProvider = ({ children }) => {

    const { products } = useProductContext()

    const initialState = {
        filter_products: [],
        all_products: [],
        sorting_value: "",
        filters: {
            text: "",
            category: "All",
            // maxPrice: 0,
            // price: 0,
            // minPrice: 0,
        },
    }

    const reducer = (state, action) => {

        if (action.type === "ALL_FILTER_PRODUCTS") {

            // let priceArray = action.payload.map((elm) => elm.price)
            // let maxPrice = Math.max(...priceArray)

            return {
                ...state,
                all_products: [...action.payload],
                filter_products: [...action.payload],
                // filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice }
            }
        }

        if (action.type === "GET_SORT_VALUE") {
            return {
                ...state,
                sorting_value: action.payload
            }
        }

        if (action.type === "SORTING_PRODUCTS") {
            let sortData;
            const { filter_products, sorting_value } = state;
            const sortProducts = [...filter_products]

            const sortingProducts = (a, b) => {
                if (sorting_value === "highest") {
                    return a.price - b.price
                }
                if (sorting_value === "lowest") {
                    return b.price - a.price
                }
                if (sorting_value === "a-z") {
                    return a.category.localeCompare(b.category)
                }
                if (sorting_value === "z-a") {
                    return b.category.localeCompare(a.category)
                }
            }
            sortData = sortProducts.sort(sortingProducts)

            return {
                ...state,
                filter_products: sortData
            }
        }


        if (action.type === "HANDLE_FILTER_VALUE") {
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value
                }
            }
        }

        if (action.type === "FILTER_PRODUCTS") {
            const { all_products } = state;
            let filterProducts = all_products
            const { text, category} = state.filters;
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
            // if (price === 0) {
            //     filterProducts = filterProducts.filter((elm) => elm.price === price)
            // } else {
            //     filterProducts = filterProducts.filter((elm) => elm.price <= price);
            // }
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

    const sorting = (event) => {
        let sortingValue = event.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: sortingValue })
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.filters, state.sorting_value])

    useEffect(() => {
        dispatch({ type: "ALL_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <filterContexts.Provider value={{
            ...state,
            handleFiltersValue,
            sorting

        }}>
            {children}
        </filterContexts.Provider>
    )
}

export const useFilterContexts = () => {
    return useContext(filterContexts)
}

export default FilterContextsProvider;