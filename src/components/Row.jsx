import React, { useEffect, useState } from 'react'
import instance from '../api/baseURL'
import './Row.css'

function Row({ fetchURL, title, change }) {

    const [movies, setMovies] = useState([])
    const image_base_url = "https://image.tmdb.org/t/p/original/";


    const fetchMovies = async () => {
        const result = await instance.get(fetchURL)
        setMovies(result?.data?.results)
    }
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <div className='row'>
                <h1>{title}</h1>
                <div className='movie'>

                    {movies.length > 0 ?
                        <>
                            {movies.map(i =>
                                <img className='movies p-0 p-lg-2' src={`${image_base_url}${change ? i.poster_path : i.backdrop_path}`} alt="" />
                            )}
                        </>
                        :
                        <h4>loading</h4>
                    }
                </div>
            </div>
        </>
    )
}

export default Row