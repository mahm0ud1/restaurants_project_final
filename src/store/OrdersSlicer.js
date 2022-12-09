import { createSlice } from '@reduxjs/toolkit'
import orders from '../api/staticJson/orders.json'

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        value: orders,
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = ordersSlice.actions

export default ordersSlice.reducer;