import { createSlice } from "@reduxjs/toolkit";


export const counterReducer = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        INCREMENT: (state, action)=>{
            state.count += 2
        },
        DECREMENT: (state, action)=>{
            state.count -= 2
        }
    }
}
);

export const {INCREMENT , DECREMENT} = counterReducer.actions;
export default counterReducer.reducer;