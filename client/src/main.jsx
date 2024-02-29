import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsProvider from './utils/contexts/ProductsContext.jsx'
import FilterContextsProvider from './utils/contexts/FilterContexts.jsx'
import CartContextProvider from './utils/contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterContextsProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
      </FilterContextsProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
