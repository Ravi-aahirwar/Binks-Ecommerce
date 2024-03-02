const reducer = (state, action) => {

    if (action.type === "LOADING") {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === "SET_API_DATA") {
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    }
    if (action.type === "API_ERROR") {
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    }
    if(action.type === "GET_PRODUCT_ERROR"){
        return {
            ...state,
            loading: false,
            error: action.payload
        } 
    }
    if (action.type === "GET_PRODUCT") {
        return {
            ...state,
            loading: false,
            singleProduct: action.payload
        }
    }

    return state;
}

export default reducer