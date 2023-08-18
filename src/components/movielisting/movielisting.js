import React from 'react';
import { useSelector } from 'react-redux';
import Moviecard from '../moviecard/moviecard';

const Movielisting = () => {
    const moviesList = useSelector((state) => state.movies?.movies?.Search)
    console.log("moviesList", moviesList)
    return (
        <div>
            {moviesList?.map((eachMovie, i) => {
                return <div key={i}><Moviecard data={eachMovie} /></div>
            })}

        </div>
    );
};

export default Movielisting;