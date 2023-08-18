import React, { useEffect } from 'react';
import Movielisting from '../movielisting/movielisting';
import {MovieApi} from '../../common/apis/movieApi';
import { ApiKey } from '../../common/apis/movieapikey';
import { useDispatch } from 'react-redux';
import {addMovies, fetchAsyncMovies} from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAsyncMovies())
    },[])
    return (
        <div className="bannerImg">
            <Movielisting />
        </div>
    );
};

export default Home;