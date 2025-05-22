import { configureStore } from "@reduxjs/toolkit";
import firstslice from "./slices/slice"
import theam from "./slices/light.slice"
import fetchdata from "./slices/fetchdata"
import  multiapislice  from "./slices/multipleapi";

export const store = configureStore({
    reducer:{
        first:firstslice,
        mode:theam,
        fetchdatas:fetchdata,
        multiapi:multiapislice
    }
})




            
