import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchError:null,
        gptMovies:null,
        gptMoviesLoading:false,
        gptCredits:5,
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
        },
        setGptCredits:(state)=>{
            state.gptCredits=state.gptCredits-1
        }
    }
})

export const {toggleGptSearchView,ShowGptSearchError,addGPTMovieResult,setGptMoviesLoading,setGptCredits} = gptSlice.actions;
export default gptSlice.reducer; 