import { createSlice } from '@reduxjs/toolkit'

/** Placeholder slice — extend with modals, drawers, global loading, etc. */
type UiState = {
  sidebarOpen: boolean
}

const initialState: UiState = {
  sidebarOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebarOpen: (state, action: { payload: boolean }) => {
      state.sidebarOpen = action.payload
    },
  },
})

export const { toggleSidebar, setSidebarOpen } = uiSlice.actions
export default uiSlice.reducer
