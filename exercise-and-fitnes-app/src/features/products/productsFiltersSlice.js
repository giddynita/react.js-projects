import { createSlice } from '@reduxjs/toolkit'
import image1 from './assets/e-book icon.png'

const products = [
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 3,
    productPrice: 20000,
    category: 'equipment',
    topRated: true,
    color: 'Blue',
    brand: 'Beforemath',
    sale: true,
    discount: 1000,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 50000,
    category: 'equipment',
    topRated: true,
    color: 'Red',
    brand: 'Beforemath',
    sale: true,
    discount: 25000,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 6000,
    category: 'nutrition',
    topRated: true,
    color: 'Red',
    brand: 'Beforemath',
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
    color: 'Red',
    brand: 'Higher',
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 20000,
    category: 'nutrition',
    topRated: false,
    color: 'Red',
    brand: 'Higher',
    sale: true,
    discount: 15000,
  },
  {
    productImage: image1,
    productName: 'E-book',

    productPrice: 25000,
    category: 'nutrition',
    topRated: false,
    color: 'Red',
    brand: 'Humane Labs Raid',
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    color: 'Red',
    brand: '',
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    color: 'Red',
    brand: '',
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    color: 'Red',
    brand: '',
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    color: 'Red',
    brand: '',
    sale: true,
    discount: 1000,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: false,
    color: 'Blue',
    brand: '',
  },
]

const maxPrice = 100000

const defaultState = {
  totalProducts: products,
  productsList: products.filter((product, index) => index < 9),
  productsPerPage: 9,
  colorType: '',
  brand: '',
  price: '' || maxPrice,
}

const productsFiltersSlice = createSlice({
  name: 'productFilter',
  initialState: defaultState,
  reducers: {
    handlePerPageFilter: (state, action) => {
      const { productsPerPage } = action.payload
      const perPageFilter = products.filter(
        (product, index) => index < productsPerPage
      )
      const perPageFilterAndColorType = perPageFilter.filter(
        (product) => product.color === state.colorType
      )
      state.colorType
        ? (state.productsList = perPageFilterAndColorType)
        : (state.productsList = perPageFilter)
    },
    handleColorFilter: (state, action) => {
      const { productColor } = action.payload
      const coloredFiltered = products.filter((product, index) => {
        return (
          product.color === productColor &&
          product.productPrice <= state.price &&
          index < state.productsPerPage
        )
      })
      const UnColoredfiltered = products.filter(
        (product, index) =>
          index < state.productsPerPage && product.productPrice <= state.price
      )
      productColor === 'Any Color'
        ? (state.productsList = UnColoredfiltered)
        : (state.productsList = coloredFiltered)
    },
    handlePerPageState: (state, action) => {
      const { perPageNumber } = action.payload
      state.productsPerPage = perPageNumber
    },
    handleColorState: (state, action) => {
      const { colorType } = action.payload
      state.colorType = colorType
    },
    handleProductsBrandsFilter: (state, action) => {
      const { brand } = action.payload
      const brandFiltered = products.filter(
        (product, index) =>
          product.brand === brand &&
          product.productPrice <= state.price &&
          index < state.productsPerPage
      )
      const brandColorFiltered =
        state.colorType && state.colorType !== 'Any Color'
          ? brandFiltered.filter((product) => product.color === state.colorType)
          : brandFiltered
      state.brand = brand
      state.productsList = brandColorFiltered
    },
    handlePriceFilter: (state, action) => {
      const { price } = action.payload
      const priceFiltered = products.filter(
        (product, index) =>
          product.productPrice <= price && index < state.productsPerPage
      )
      const priceColorFiltered =
        state.colorType && state.colorType !== 'Any Color'
          ? priceFiltered.filter((product) => product.color === state.colorType)
          : priceFiltered

      state.price = price
      state.productsList = priceColorFiltered
    },
    handleSearch: (state, action) => {
      const { searchWord } = action.payload
      const searchFiltered = products.filter(
        (product, index) =>
          product.productName.includes(searchWord) &&
          product.productPrice <= state.price &&
          index < state.productsPerPage
      )
      state.productsList = searchFiltered
    },
  },
})

export const {
  handlePerPageFilter,
  handleColorFilter,
  handlePerPageState,
  handleColorState,
  handleProductsBrandsFilter,
  handlePriceFilter,
  handleSearch,
} = productsFiltersSlice.actions

export default productsFiltersSlice.reducer
