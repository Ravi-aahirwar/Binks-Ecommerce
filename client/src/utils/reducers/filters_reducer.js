// const reducer = (state, action) =>{

//     if(action.type === "GET_ALL_PRODUCTS"){
//         return{
//             ...state,
//             // allProducts:[...action.payload],
//             filter_products:action.payload,
//         }
//     }

//     if (action.type === "SORTING_PORODUCTS") {
//         let newSortdata;
//         const { filter_products, sorting_value } = state;
//         let tempSortProduct = [...filter_products]
//         const sortingProducts = (a, b) => {
//             if (sorting_value === "highest") {
//                 return a.price - b.price
//             }
//             if (sorting_value === "lowest") {
//                 return b.price - a.price
//             }
//             if (sorting_value === "a-z") {
//                 return a.category.localeCompare(b.category)
//             }
//             if (sorting_value === "z-a") {
//                 return b.category.localeCompare(a.category)
//             }
//         }

//         newSortdata = tempSortProduct.sort(sortingProducts)
//         return {
//             ...state,
//             filter_products: newSortdata,
//         }
//     }


//     if(action.type === "HANDLE_FILTER_VALUE"){

//         const {name, value} = action.payload;

//         return{
//             ...state,
//             filters:{
//                 ...state.filters, [name] : value
//             }
//         }
//     }

//     if(action.type === "FILTER_PRODUCTS"){
//         let {allProducts} = state;
//         let filterProducts = [...allProducts];

//         const {text, category, price} = state.filters;

//         if(text){
//             filterProducts = filterProducts.filter((elm) => {
//                 return elm.title.toLowerCase().includes(text.toLowerCase());
//             })
//         }
//         if (category !== "All") {
//             filterProducts = filterProducts.filter((elm) => {
//                 return elm.category === category;
//             })
//         }
//         if (price === 0) {
//             filterProducts = filterProducts.filter((elm) => elm.price === price)
//         } else {
//             filterProducts = filterProducts.filter((curElm) => curElm.price <= price);
//         }
//         return {
//             ...state,
//             filter_products: filterProducts,
//         }
//     }

//     return state
// }

// export default reducer