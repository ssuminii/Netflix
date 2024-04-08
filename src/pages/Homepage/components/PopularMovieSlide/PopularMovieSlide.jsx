import React from 'react'
import { Alert } from 'bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';

const PopularMovieSlide = () => {
    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
  return (
    <div>
        <h3>Popular Movies</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            containerClass="carousel-container"
            itemClass="movie-slider p-1"
            responsive={responsive}
            >
            {/* <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div> */}
            {data.results.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
        </Carousel>;
    </div>
  )
}

export default PopularMovieSlide