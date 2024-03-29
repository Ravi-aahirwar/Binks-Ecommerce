import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../reducers/products_reducer'
const productsContext = createContext();

const ProductsProvider = ({ children }) => {

    const initialState = {
        products: [],
        loading: false,
        error: "",
        singleProduct:{},
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

    const getApiProduct = async (url)=>{
        dispatch({type:"GET_PRODUCT_LOADING"})
    try {
        const res = await axios.get(url);
        const apiProduct = await res.data;
        dispatch({type:"GET_PRODUCT", payload: apiProduct})
    } catch (error) {
        dispatch({key:"GET_PRODUCT_ERROR", payload: error.message})
    }
}

    useEffect(() => {
        getApiData(API_URL)
    }, [])

    return (
        <productsContext.Provider value={{ 
            ...state,
            getApiProduct
             }} >
            {children}
        </productsContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(productsContext)
}

export default ProductsProvider;