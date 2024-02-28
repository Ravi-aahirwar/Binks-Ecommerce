import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducers/products_reducer'
const productsContext = createContext();

const ProductsProvider = ({ children }) => {

    const initialState = {
        products: [],
        loading: false,
        error: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const API_URL = process.env.NODE_ENV === "production" ? "https://binks-ecommerce-mern-backend.vercel.app/api/data":"http://localhost:5000/api/data"
    
    const getApiData = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const apiData = await axios.get(url)
            const response = await apiData.data
            dispatch({ type: "SET_API_DATA", payload: response })
        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error.message})
        }

    }

    useEffect(() => {
        getApiData(API_URL)
    }, [])

    return (
        <productsContext.Provider value={{ ...state }} >
            {children}
        </productsContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(productsContext)
}

export default ProductsProvider;