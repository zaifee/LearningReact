import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

// store.js
// create store 
// wrap app Components under Provider 
// create slice 
// register reducer in site 