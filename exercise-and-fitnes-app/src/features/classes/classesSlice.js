import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  type: 'show all',
  difficulty: 'show all',
}
const classesSlice = createSlice({
  name: 'classesFilter',
  initialState: defaultState,
  reducers: {
    handleClassTypeFilter: (state, action) => {
      const { type } = action.payload
      state.type = type
    },
    handleClassDifficultyFilter: (state, action) => {
      const { difficulty } = action.payload
      state.difficulty = difficulty
    },
  },
})

export const { handleClassTypeFilter, handleClassDifficultyFilter } =
  classesSlice.actions

export default classesSlice.reducer
