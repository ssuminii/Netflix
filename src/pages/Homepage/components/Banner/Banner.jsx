import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'bootstrap';
import './Banner.style.css'
import LoadingSpinner from '../../../../common/\bLoadingSpinner/LoadingSpinner';

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log('data--------------->',data);
    if(isLoading) {
        return <LoadingSpinner />
    }
    if(isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div className='banner' style={{backgroundImage: 'url(' + `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.results[0].poster_path}` + ')'}}>
        <div className='banner-info'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner