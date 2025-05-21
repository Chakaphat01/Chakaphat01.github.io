import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState: {
        value:0 ,
    },
    reducers:{
        increment: (initialState) => {
            initialState.value += 1;
        },
        decrement: (initialState) => {
            initialState.value -= 1
        },
        increaseByAmount: (initialState, actions:PayloadAction<number>) => {
            initialState.value += actions.payload
        }
    }
})
export const { increment, decrement, increaseByAmount } = counterSlice.actions;
export default counterSlice;