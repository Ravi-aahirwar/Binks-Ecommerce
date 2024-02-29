import { createContext, useContext, useReducer, useEffect } from "react";
const cartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = {
        cart: [],
        favourite: [],
        total_price: 0,
        shipping_fee: 0
    }

    const reducer = (state, action) => {

        if (action.type === "ADD_TO_CART") {
            let { id, amount, product } = action.payload;
            let existingProduct = state.cart.find((elm) => elm.id === id);
            if (existingProduct) {
                let updatedProduct = state.cart.map((elm) => {
                    if (elm.id === id) {
                        let newAmount = elm.amount + amount;
                        return {
                            ...elm,
                            amount: newAmount
                        };
                    } else {
                        return elm;
                    }
                });

                return {
                    ...state,
                    cart: updatedProduct,
                }

            } else {
                let cartProduct;
                cartProduct = {
                    id,
                    title: product.title,
                    amount,
                    image: product.image,
                    category: product.category,
                    price: product.price,
                    description: product.description,
                    max: product.stock,
                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                }
            }
        }

        if (action.type === "REMOVE_ITEM") {
            let updatedCart = state.cart.filter(
                (elm) => elm.id !== action.payload
            );
            return {
                ...state,
                cart: updatedCart,
            }
        }

        if (action.type === "CLEAR_CART") {
            return {
                ...state,
                cart: []
            }
        }

        if (action.type === "SET_DECREMENT") {
            let updatedProduct = state.cart.map((elm) => {
                if (elm.id === action.payload) {
                    let decAmount = elm.amount - 1;
                    if (decAmount <= 1) {
                        decAmount = 1;
                    }
                    return {
                        ...elm,
                        amount: decAmount,
                    };
                } else {
                    return elm;
                }
            });
            return {
                ...state, cart: updatedProduct
            }
        }

        if (action.type === "SET_INCREMENT") {
            let updatedProduct = state.cart.map((elm) => {
                if (elm.id === action.payload) {
                    let incAmount = elm.amount + 1;
                    if (incAmount >= elm.max) {
                        incAmount = elm.max
                    }
                    return {
                        ...elm,
                        amount: incAmount,
                    };
                } else {
                    return elm;
                }
            });
            return {
                ...state, cart: updatedProduct
            }
        }

        if (action.type === "CART_TOTAL_PRICE") {
            if (!state.cart || !Array.isArray(state.cart)) {
                console.log(state.cart);
                return {
                    ...state,
                    total_price: 0,
                };
            }
            let total_price = state.cart.reduce((initialVal, elm) => {
                let { price, amount } = elm;
                initialVal = initialVal + price * amount;
                return initialVal;
            }, 0);

            return {
                ...state,
                total_price,
            };
        }
        // add To Favourite.
        if (action.type === "ADD_TO_FAVOURITE") {
            let { id, product } = action.payload;
            let existingProduct = state.favourite.find((elm) => elm.id === id)
            if (existingProduct) {
                alert("Product Already In WishList ! Choose Another One :)")
            } else {
                alert("Added Favourite")
                let favouriteProduct;
                favouriteProduct = {
                    id: product[0],
                    title: product[1],
                    price: product[2],
                    description: product[3],
                    category: product[4],
                    image: product[5],
                    rate: product[6]
                }
                return {
                    ...state,
                    favourite: [...state.favourite, favouriteProduct],
                }
            }
        }

        // delete Item to favourite
        if(action.type === "REMOVE_FROM_FAVOURITE"){
            let removeFavourite = state.favourite.filter((elm) =>(
                elm.id !== action.payload)
            ) 
            return{
                ...state,
                favourite: removeFavourite
            }
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } })
    }
    const addToFavourite = (id, product) => {
        dispatch({ type: "ADD_TO_FAVOURITE", payload: { id, product } })
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    const removeFavourite = (id) =>{
        dispatch({type:"REMOVE_FROM_FAVOURITE", payload: id})
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_PRICE" })
    }, [state.cart])
    return <cartContext.Provider value={{
        ...state,
        addToCart,
        clearCart,
        setDecrease,
        setIncrease,
        removeItem,
        addToFavourite,
        removeFavourite
    }} >
        {children}
    </cartContext.Provider>
}

export const useCartContext = () => {
    return useContext(cartContext)
}

export default CartContextProvider