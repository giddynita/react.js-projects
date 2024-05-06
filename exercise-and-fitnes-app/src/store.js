import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './features/navbar/navbarSlice'
import productReducer from './features/products/productsFiltersSlice'

export const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
    productState: productReducer,
  },
})
