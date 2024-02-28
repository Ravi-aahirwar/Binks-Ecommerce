import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsProvider from './utils/contexts/ProductsContext.jsx'
import FilterContextsProvider from './utils/contexts/FilterContexts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterContextsProvider>
        <App />
      </FilterContextsProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
