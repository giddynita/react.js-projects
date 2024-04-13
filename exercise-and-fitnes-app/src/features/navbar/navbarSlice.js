import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  page: null,
  subpage: null,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: defaultState,
  reducers: {
    subPage: (state, action) => {
      const { page } = action.payload
      state.page = page
    },
    fitnessCalculator: (state, action) => {
      const { subpage } = action.payload
      state.subpage = subpage
    },
  },
})

export const { subPage, fitnessCalculator } = navbarSlice.actions

export default navbarSlice.reducer
