import React from 'react'
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { useTopRatedQuery } from '../../../../hooks/useTopRatedMoves';
import { responsive } from '../../../../common/constants/responsive';
import LoadingSpinner from '../../../../common/\bLoadingSpinner/LoadingSpinner';

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedQuery();

    if(isLoading){
        return <LoadingSpinner />
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
  return (
    <div>
        <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlide