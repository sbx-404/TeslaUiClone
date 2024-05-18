import { createSlice } from "@reduxjs/toolkit";
const initialState = {cars:["Model Y","Model X","Model 3","Model S","solar panel"]}

const carsSlice = createSlice({
    name:"car",
    initialState,
    reducers:{},
})

export const AllCars = state => state.car.cars

export default carsSlice.reducer
