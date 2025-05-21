import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonService = createApi({
    reducerPath: "pokemonService",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://pokeapi.co/api/v2/pokemon"
    }),
    endpoints: (build) => ({
        getAllPokemon: build.query({
            query: () => {
                return "";
            }
        }),
    })
});
export const { useGetAllPokemonQuery } = pokemonService
export default pokemonService