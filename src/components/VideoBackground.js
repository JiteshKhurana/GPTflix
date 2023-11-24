import { useEffect } from "react"
import { APP_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const VideoBackground = ({movieid}) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state)=>state?.movies?.movieTrailer);
  async function giveMovieTrailer(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`, APP_OPTIONS);
    const json = await data.json();
    const trailers = json.results.filter((movie)=>movie.type==="Trailer");
    const trailer=(trailers.length)? trailers[0]:json.results[0];
    dispatch(addMovieTrailer(trailer));
  }

  useEffect(()=>{
    giveMovieTrailer();
  },[]);
  return (
    <div>
      <iframe src={'https://www.youtube.com/embed/uYPbbksJxIg?si='+trailer?.key+'&amp;start=10'} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground