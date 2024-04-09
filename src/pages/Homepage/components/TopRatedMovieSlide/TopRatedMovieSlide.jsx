import React from 'react'
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { useTopRatedQuery } from '../../../../hooks/useTopRatedMoves';
import { responsive } from '../../../../common/constants/responsive';

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedQuery();

    if(isLoading){
        return <h1>Loading...</h1>
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