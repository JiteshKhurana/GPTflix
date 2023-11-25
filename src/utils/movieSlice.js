import {createSlice} from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        PopularMovies:null,
        TopRatedmovies:null,
        UpcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload;
        },
        addTopRatedmovies:(state,action)=>{
            state.TopRatedmovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedmovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;