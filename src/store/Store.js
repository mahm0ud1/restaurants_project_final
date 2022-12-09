import { configureStore } from '@reduxjs/toolkit'
import { ordersSlice } from './OrdersSlicer'

export default configureStore({
  reducer: {
      orders: ordersSlice,
  }
})

