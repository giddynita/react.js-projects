import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './features/navbar/navbarSlice'
import productReducer from './features/products/productsFiltersSlice'
import productDetailsReducer from './features/product_details/productDetailsSlice'
import cartReducer from './features/cart/cartSlice'
import userReducer from './features/user/userSlice'
import caloricCalculatorReducer from './features/caloric_calculator/caloricCalculatorSlice'
import sideMenuReducer from './features/side_menu/sideMenuSlice'
import classesReducer from './features/classes/classesSlice'
export const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
    productState: productReducer,
    productDetailsState: productDetailsReducer,
    cartState: cartReducer,
    userState: userReducer,
    caloricParametersState: caloricCalculatorReducer,
    sideMenuState: sideMenuReducer,
    classesState: classesReducer,
  },
})
