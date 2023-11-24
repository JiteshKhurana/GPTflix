import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux";


const VideoBackground = ({movieid}) => {
  useMovieTrailer(movieid);
  const trailer = useSelector((state)=>state?.movies?.movieTrailer);

  return (
    <div>
      <iframe className="w-full aspect-video pointer-events-none" src={'https://www.youtube.com/embed/'+trailer?.key+'?si=yqu9x7AaH7arwj5Y&amp;start=10&autoplay=1&mute=1&loop=1&controls=0&disablekb=1'} title="YouTube video player" allow=" encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground;