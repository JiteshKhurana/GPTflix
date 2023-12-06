import {createSlice} from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        PopularMovies:null,
        TopRatedmovies:null,
        TopRatedseries:null,
        UpcomingMovies:null,
        TrendingMovies:null,
        TrendingSeries:null,
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
        addTopRatedseries:(state,action)=>{
            state.TopRatedseries = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies = action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.TrendingMovies = action.payload;
        },
        addTrendingSeries:(state,action)=>{
            state.TrendingSeries = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedmovies,addTopRatedseries,addUpcomingMovies,addTrendingMovies,addTrendingSeries,addMoviePage} = movieSlice.actions;
export default movieSlice.reducer;