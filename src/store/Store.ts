import { configureStore } from '@reduxjs/toolkit'
import { ordersReducer } from './OrdersSlicer'
import { userReducer } from './UserSlicer'

const store = configureStore({
  reducer: {
      orders: ordersReducer,
      user: userReducer
  }
})

export default store;