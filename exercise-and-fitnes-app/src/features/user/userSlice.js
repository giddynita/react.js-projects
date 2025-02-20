import { createSlice } from '@reduxjs/toolkit'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

/* const themes = {
  winter: 'winter',
  dracula: 'dracula',
}
 */
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}

/* const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme' || themes.winter)
  document.documentElement.setAttribute('data-theme', theme)
  return theme
} */

const initialState = {
  user: getUserFromLocalStorage(),
  /* theme: getThemeFromLocalStorage(), */
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { username, email, uid } = action.payload
      state.user = { username, email, uid }
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      /* toast.success('Signed out successfully') */
    },
    /* toggleTheme: (state) => {
      const { dracula, winter } = themes
      state.theme = state.theme === dracula ? winter : dracula
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    }, */
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
