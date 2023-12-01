import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchError:"",
        gptMovies:null,
        gptMoviesLoading:false,
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
        },
        setGptMoviesLoading:(state)=>{
            state.gptMoviesLoading=!state.gptMoviesLoading
        }
    }
})

export const {toggleGptSearchView,ShowGptSearchError,addGPTMovieResult,setGptMoviesLoading} = gptSlice.actions;
export default gptSlice.reducer; 