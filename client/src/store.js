import { configureStore } from '@reduxjs/toolkit'
import userSessionReducer from './UserSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSessionReducer)

export const store = configureStore({
        reducer: {
            userSession: persistedReducer,
        },
        middleware: [thunk]
    })
export const persistor = persistStore(store)
