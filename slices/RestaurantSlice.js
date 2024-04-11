import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    restaurant: null,
}

export const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
    }
})

export const { setRestaurant } = RestaurantSlice.actions

export const selectRestaurant = state=> state.restaurant.restaurant;

export default RestaurantSlice.reducer