import { createSlice } from '@reduxjs/toolkit'
import { productList } from '../../data'

/* const findMaxPrice = (arr) => {
  return arr.reduce((max, current) => {
    return current.productPrice > max.productPrice ? current : max
  })
}
const equipments = productList.filter(
  (product) => product.category === 'equipment'
)
const nutritions = productList.filter(
  (product) => product.category === 'nutrition'
)
const maxProduct = findMaxPrice(productList)
const maxEquipment = findMaxPrice(equipments)
const maxNutrition = findMaxPrice(nutritions) */

const defaultState = {
  products: [],
  productsPerPage: 3,
  colorType: '',
  brand: '',
  price: '',
  searchWord: '',
  selectedPage: 0,
  sortBy: '',
  topRated: '',
  category: '',
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
    handleEquipmentPriceFilter: (state, action) => {
      const { equipment } = action.payload
      state.equipment = equipment
    },
    handleNutritionPriceFilter: (state, action) => {
      const { nutrition } = action.payload
      state.nutrition = nutrition
    },
    handleSearch: (state, action) => {
      const { searchWord } = action.payload
      state.searchWord = searchWord
    },
    handlePagination: (state, action) => {
      const { selectPage } = action.payload
      state.selectedPage = selectPage
    },
    handleSorting: (state, action) => {
      const { sortBy, products } = action.payload
      state.sortBy = sortBy
      /* const sortByLowToHighPrice = products
        .slice()
        .sort((a, b) => (a.productPrice > b.productPrice ? 1 : -1))

      const sortByHighToLowPrice = products
        .slice()
        .sort((a, b) => (a.productPrice < b.productPrice ? 1 : -1))
      const sortByZToA = products
        .slice()
        .sort((a, b) => (a.productName < b.productName ? 1 : -1))
      const sortByAToZ = products
        .slice()
        .sort((a, b) => (a.productName > b.productName ? 1 : -1))
      const sortByRating = products
        .slice()
        .sort((a, b) => (a.productRatings < b.productRatings ? 1 : -1)) */
      /* sortBy === 'Sort by price: low to high'
        ? (state.products = sortByLowToHighPrice)
        : sortBy == 'Sort by price: high to low'
        ? (state.products = sortByHighToLowPrice)
        : sortBy == 'Sort by name: a - z'
        ? (state.products = sortByAToZ)
        : sortBy == 'Sort by name: z - a'
        ? (state.products = sortByZToA)
        : sortBy == 'Sort by average rating'
        ? (state.products = sortByRating)
        : (state.products = products) */
    },
    handleProductFetching: (state, action) => {
      const { products } = action.payload
      state.products = products
    },
  },
})

export const {
  handlePerPageFilter,
  handleColorFilter,
  handleProductsBrandsFilter,
  handlePriceFilter,
  handleEquipmentPriceFilter,
  handleNutritionPriceFilter,
  handleSearch,
  handlePagination,
  handleSorting,
  handleProductFetching,
} = productsFiltersSlice.actions

export default productsFiltersSlice.reducer
