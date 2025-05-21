import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/CounterSlice";
// import formReducer from "./slice/FromSlice"
import pokemonService from "../Service/PokemonService";
const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
        [pokemonService.reducerPath]: pokemonService.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonService.middleware)
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;