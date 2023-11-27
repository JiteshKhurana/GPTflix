import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchError:"",
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        ShowGptSearchError:(state,action)=>{
            (state.gptSearchError)=action.payload;
        }
    }
})

export const {toggleGptSearchView,ShowGptSearchError} = gptSlice.actions;
export default gptSlice.reducer; 