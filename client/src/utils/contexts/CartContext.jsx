import { createContext, useContext, useReducer, useEffect } from "react";
const cartContext = createContext();

const CartContextProvider = ({ children }) => {

    // const getLocaleCartData = ()=>{
    //     let cartData = localStorage.getItem("binksCart")
    //     console.log(cartData);
    //     if(cartData == []){
    //         return [];
    //     } else{
    //         return  JSON.parse(cartData)
    //     }
    // }

    const initialState = {
        cart: [],
        favourite: [],
        total_price: 0,
        shipping_fee: 0
    }

    const reducer = (state, action) => {
        if (action.type === "ADD_TO_CART") {
            let { id, amount, product } = action.payload;
            // existing Product In Cart
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
                // existing Product In Cart Finish
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
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } })
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

    // useEffect(()=>{
    //     localStorage.setItem("binksCart", JSON.stringify(state.cart) )
    // },[state.cart]);
    
    // useEffect(() => {
    //     dispatch({ type: "CART_TOTAL_PRICE" })
    // }, [state.cart])

    return <cartContext.Provider value={{
        ...state,
        addToCart,
        clearCart,
        setDecrease,
        setIncrease,
        removeItem
    }} >
        {children}
    </cartContext.Provider>
}

export const useCartContext = () => {
    return useContext(cartContext)
}

export default CartContextProvider