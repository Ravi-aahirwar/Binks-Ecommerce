const reducer = (state, action) =>{

    if(action.type === "LOADING"){
        return{
            ...state,
            loading:true
        }
    }

    if(action.type === "SET_API_DATA"){
        return{
            ...state,
            products: action.payload,
            loading:false
        }
    }
    if(action.type === "ERROR"){
        return {
            ...state,
            loading:false,
            error: action.payload
        }
    }

    return state;
}

export default reducer