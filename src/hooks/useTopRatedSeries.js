import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedseries } from '../utils/movieSlice';
import { useEffect } from 'react'

const useTopRatedSeries=()=>{
    const dispatch = useDispatch();
    const TopRatedseries = useSelector((store)=>store.movies.TopRatedseries);

    async function getTopRatedSeries(){
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', APP_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedseries(json.results));
    }

    useEffect(()=>{
        !TopRatedseries && getTopRatedSeries()
    },[]);
}

export default useTopRatedSeries; 