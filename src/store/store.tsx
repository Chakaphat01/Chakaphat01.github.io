import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlice";
// import formReducer from "./slice/FromSlice"
import pokemonService from "../Service/PokemonService";
import formSlice from "./slice/FromSlice";
const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
        [pokemonService.reducerPath]: pokemonService.reducer,
        [formSlice.reducerPath]: formSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonService.middleware)
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;