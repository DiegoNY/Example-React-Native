import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./feature/NavigationSlice.feature";
import productReducer from "./feature/ProductsSlice.feature";

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        product: productReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch