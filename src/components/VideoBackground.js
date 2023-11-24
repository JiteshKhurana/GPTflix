import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux";


const VideoBackground = ({movieid}) => {
  useMovieTrailer(movieid);
  const trailer = useSelector((state)=>state?.movies?.movieTrailer);

  return (
    <div>
      <iframe src={'https://www.youtube.com/embed/uYPbbksJxIg?si='+trailer?.key+'&amp;start=10'} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground;