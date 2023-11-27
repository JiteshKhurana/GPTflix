import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchError:"",
        gptMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        ShowGptSearchError:(state,action)=>{
            state.gptSearchError=action.payload;
        },
        addGPTMovieResult:(state,action)=>{
            state.gptMovies=action.payload;
        }
    }
})

export const {toggleGptSearchView,ShowGptSearchError,addGPTMovieResult} = gptSlice.actions;
export default gptSlice.reducer; 