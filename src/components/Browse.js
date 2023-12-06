import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTrendingSeries from '../hooks/useTrendingSeries';
import useTopRatedSeries from '../hooks/useTopRatedSeries';

const Browse = () => {
  const showGptSearch = useSelector(store=>store?.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTrendingSeries();
  useTopRatedSeries();
  return (
    <div>
      <Header/>
      {(showGptSearch)?<GptSearch/>:<div className='bg-black'><MainContainer/><SecondaryContainer/></div>}
      
    </div>
  )
}

export default Browse