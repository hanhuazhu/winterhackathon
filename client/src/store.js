import { configureStore } from '@reduxjs/toolkit'
import userSessionReducer from './UserSlice'

export default configureStore({
  reducer: {
    userSession: userSessionReducer,
  },
})