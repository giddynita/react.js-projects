import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  active: 'description',
  reviews: [],
}

const productDetailsSlice = createSlice({
  name: 'productDetail',
  initialState: defaultState,
  reducers: {
    handleActiveState: (state, action) => {
      const { setActive } = action.payload
      state.active = setActive
    },
    handleReviews: (state, action) => {
      const { review } = action.payload
      const totalReviews = [...state.reviews, review]
      state.reviews = totalReviews
    },
  },
})

export const { handleActiveState, handleReviews } = productDetailsSlice.actions

export default productDetailsSlice.reducer
