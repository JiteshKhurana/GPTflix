import { APP_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingSeries } from '../utils/movieSlice';
import { useEffect } from 'react'

const useTrendingSeries=()=>{
    const dispatch = useDispatch();
    const trendingSeries = useSelector((store)=>store.movies.TrendingSeries);

    async function getTrendingSeries(){
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', APP_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingSeries(json.results));
    }

    useEffect(()=>{
        !trendingSeries && getTrendingSeries();
    },[]);
}

export default useTrendingSeries;