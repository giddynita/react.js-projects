import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './features/navbar/navbarSlice'
import productReducer from './features/products/productsFiltersSlice'
import productDetailsReducer from './features/product_details/productDetailsSlice'
import cartReducer from './features/cart/cartSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
    productState: productReducer,
    productDetailsState: productDetailsReducer,
    cartState: cartReducer,
    userState: userReducer,
  },
})
