import { createSlice } from '@reduxjs/toolkit'

//@ts-check
export const userSlice = createSlice({
  name: 'userSession',
  initialState: {
    currentUser: '',
    isLoggedIn: false,
  },
  reducers: {
    
    loginUser: (state, user) => {
      state.currentUser = user.payload;
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.currentUser = '';
      state.isLoggedIn = false
    }
    
  }
}) 
export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer