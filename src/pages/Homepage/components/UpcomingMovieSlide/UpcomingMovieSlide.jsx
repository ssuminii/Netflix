import React from 'react'
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../common/constants/responsive';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovie';
import LoadingSpinner from '../../../../common/\bLoadingSpinner/LoadingSpinner';

const UpcomingMovieSlide = () => {

    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if(isLoading){
      return <LoadingSpinner />
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