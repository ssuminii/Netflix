import React from 'react'
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../common/constants/responsive';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovie';

const UpcomingMovieSlide = () => {

    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
  return (
    <div>
        <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default UpcomingMovieSlide