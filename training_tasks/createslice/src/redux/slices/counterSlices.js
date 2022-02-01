import {createSlice} from '@reduxjs/toolkit';

const initialState={
    value:0,
};

export  const counterSlices=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value ++;
        },
        decrement:(state,action)=>{
            state.value --;
        },
    },
}) ;

export const {increment,decrement}=counterSlices.actions;
  
export default counterSlices.reducer;