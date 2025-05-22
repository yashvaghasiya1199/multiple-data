import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        add: (state,action)=>{
            state.count +=1
        },
        dec: (state,action)=>{
            state.count -=1 
        }
    }
})

export const {add,dec} = counterslice.actions

export default counterslice.reducer