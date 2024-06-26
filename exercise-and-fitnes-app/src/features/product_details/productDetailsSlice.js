import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  active: 'description',
  reviews: [
    {
      name: 'Gideon Onita',
      email: 'onita@gmail.com',
      review:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum odio ea qui, quidem magnam ut, asperiores voluptatem repellat cupiditate odit maiores tenetur vero ducimus ipsa itaque iste aliquam, in a.',
    },
  ],
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
