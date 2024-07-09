import React, { useEffect, useState } from 'react'
import instance from '../api/baseURL'
import './banner.css'

function Banner({ fetchURL }) {

    const [movie, setMovies] = useState([])
    const image_base_url = "https://image.tmdb.org/t/p/original/";


    const fetchMovies = async () => {
        const result = await instance.get(fetchURL)
        setMovies(
            result.data.results[
            Math.floor([Math.random() * result.data.results.length])
            ]
        );
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return (
        <>
            <div className="top" >
                <div className="columns">
                    <div className="column is-full featured_wrapper p-0">
                        <img src={`${image_base_url}${movie.backdrop_path}`} alt='img' className="featured" />
                        <div className="title_wrapper">
                            <span className="has-text-white">{movie?.overview}</span>
                            <h1 className="title is-1 has-text-white">
                                {movie?.title || movie?.name}
                            </h1>
                            <button className="button is-medium rounded-1">Watch It Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner