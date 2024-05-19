import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './features/navbar/navbarSlice'
import productReducer from './features/products/productsFiltersSlice'
import productDetailsReducer from './features/product_details/productDetailsSlice'

export const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
    productState: productReducer,
    productDetailsState: productDetailsReducer,
  },
})
