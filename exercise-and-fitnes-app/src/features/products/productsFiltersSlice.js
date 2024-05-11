import { createSlice } from '@reduxjs/toolkit'

const maxPrice = 100000

const defaultState = {
  productsPerPage: 9,
  colorType: '',
  brand: '',
  price: '' || maxPrice,
  searchWord: '',
  selectedPage: 0,
}
const productsFiltersSlice = createSlice({
  name: 'productFilter',
  initialState: defaultState,
  reducers: {
    handlePerPageFilter: (state, action) => {
      const { productsPerPage } = action.payload
      state.productsPerPage = productsPerPage
    },
    handleColorFilter: (state, action) => {
      const { singleColor } = action.payload
      state.colorType = singleColor
    },
    handleProductsBrandsFilter: (state, action) => {
      const { brand } = action.payload
      state.brand = brand
    },
    handlePriceFilter: (state, action) => {
      const { price } = action.payload
      state.price = price
    },
    handleSearch: (state, action) => {
      const { searchWord } = action.payload
      state.searchWord = searchWord
    },
    handlePagination: (state, action) => {
      const { selectPage } = action.payload
      state.selectedPage = selectPage
    },
  },
})

export const {
  handlePerPageFilter,
  handleColorFilter,
  handleProductsBrandsFilter,
  handlePriceFilter,
  handleSearch,
  handlePagination,
} = productsFiltersSlice.actions

export default productsFiltersSlice.reducer
