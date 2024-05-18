import { configureStore} from "@reduxjs/toolkit";   
import carReducers from "../store/carslice"

export const store = configureStore({
    // car:carReducers
    reducer: {car:carReducers}
})



