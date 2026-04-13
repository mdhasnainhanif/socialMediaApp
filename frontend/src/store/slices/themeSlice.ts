import { createSlice } from '@reduxjs/toolkit'

type ThemeState = {
  dark: boolean
}

const stored =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('theme-dark')
    : null
const initialState: ThemeState = {
  dark: stored === 'true' || (stored === null && false),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.dark = !state.dark
      localStorage.setItem('theme-dark', String(state.dark))
    },
    setDark: (state, action: { payload: boolean }) => {
      state.dark = action.payload
      localStorage.setItem('theme-dark', String(action.payload))
    },
  },
})

export const { toggleDark, setDark } = themeSlice.actions
export default themeSlice.reducer
