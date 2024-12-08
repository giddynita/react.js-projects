import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  sideMenu: false,
}

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState: defaultState,
  reducers: {
    handleSideMenu: (state, action) => {
      const { sideMenuStatus } = action.payload
      state.sideMenu = sideMenuStatus
    },
  },
})

export const { handleSideMenu } = sideMenuSlice.actions

export default sideMenuSlice.reducer
