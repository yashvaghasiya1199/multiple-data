import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";

export const multiapi = createAsyncThunk("multiapi", async (no)=>{
    let responce1 = await fetch(`https://jsonplaceholder.typicode.com/comments/${no}`)
    let response2 = await fetch(`https://jsonplaceholder.typicode.com/todos/${no}`)
    let result1 = await responce1.json()
    let result2 = await response2.json()
    let res = {
        result1,
        result2
    }
    return res
})

const multiapislice = createSlice({
    name:"multiapi",
    initialState:{
        apidata:null,
        isPending:null,
        iserror:null
    },
    extraReducers: (builder)=>{
        builder.addCase(multiapi.pending , (state)=>{
            state.isPending = true
            state.iserror = false
        }),
        builder.addCase(multiapi.fulfilled , (state,action)=>{
            state.apidata = action.payload
            state.isPending = false
        }),
        builder.addCase(multiapi.rejected , (state , action)=>{
            state.iserror = action.error
        })
    }
})

export default multiapislice.reducer