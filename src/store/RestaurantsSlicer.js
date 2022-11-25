import { createSlice } from '@reduxjs/toolkit'
import restaurants from './staticJson/restaurants.json'

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        value: restaurants,
    },
    reducers: {}
})

// export const {}

export default restaurantsSlice.reducer;