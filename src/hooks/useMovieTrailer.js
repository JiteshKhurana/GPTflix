import { useEffect } from "react"
import { APP_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer=(movieid)=>{
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store)=>store.movies.movieTrailer);
    async function giveMovieTrailer(){
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`, APP_OPTIONS);
        const json = await data.json();
        const trailers = json.results.filter((movie)=>movie.type==="Trailer");
        const trailer=(trailers.length)? trailers[0]:json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        !movieTrailer && giveMovieTrailer();
    },[]);
}

export default useMovieTrailer;