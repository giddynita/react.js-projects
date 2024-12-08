import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  calories: null,
  carbsProtein: null,
  fats: null,
  details: '',
  showDetails: false,
}

const caloricCalculatorSlice = createSlice({
  name: 'caloricCalculator',
  initialState: defaultState,
  reducers: {
    handleParameters: (state, action) => {
      const { data } = action.payload
      const { age, gender, weight, height, goal, activityLevel } = data
      const maleBMR = 10 * weight + 6.25 * height - 5 * age + 5
      const femaleBMR = 10 * weight + 6.25 * height - 5 * age - 0.3 * maleBMR
      const activity = activityLevel?.includes('Lightly')
        ? 1.3
        : activityLevel?.includes('Moderately')
        ? 1.55
        : activityLevel?.includes('Very active')
        ? 1.725
        : activityLevel?.includes('Extra active')
        ? 1.9
        : 0
      const tDEE = gender === 'Male' ? maleBMR * activity : femaleBMR * activity

      const caloriesIntake = Math.round(
        goal?.includes('Fat Loss')
          ? tDEE * 0.8
          : goal?.includes('Muscle Gain')
          ? tDEE * 1.2
          : tDEE
      )
      const carbsProtein = Math.round(caloriesIntake / 10)
      const fats = Math.round(caloriesIntake / 45)
      state.caloriesIntake = caloriesIntake
      state.carbsProtein = carbsProtein
      state.fats = fats
      state.gender = gender
      state.goal = goal
      state.activityLevel = activityLevel
    },
    handleDetails: (state, action) => {
      const { show, showHide } = action.payload

      state.details = show
      state.showDetails = showHide
    },
  },
})

export const { handleParameters, handleDetails } =
  caloricCalculatorSlice.actions

export default caloricCalculatorSlice.reducer
