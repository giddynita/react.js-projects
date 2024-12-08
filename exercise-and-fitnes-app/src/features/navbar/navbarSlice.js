import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  page: null,
  subpage: null,
  searchBar: false,
  workoutPlan: null,
  navLinkWidth: null,
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
    handleSearchBar: (state, action) => {
      const { showHide } = action.payload
      state.searchBar = showHide
    },
    handleWorkoutPlan: (state, action) => {
      const { sex } = action.payload
      state.workoutPlan = sex
    },
    handleNavLinksWidth: (state, action) => {
      const { width } = action.payload
      state.navLinkWidth = width
    },
  },
})

export const {
  subPage,
  fitnessCalculator,
  handleSearchBar,
  handleWorkoutPlan,
  handleNavLinksWidth,
} = navbarSlice.actions

export default navbarSlice.reducer
