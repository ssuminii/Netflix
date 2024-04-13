import React from 'react'
import './MovieRecommendations.style.css';
import { Alert } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useMovieRecommendationQuery } from '../../../hooks/useMovieRecommendation';
import LoadingSpinner from '../../../common/\bLoadingSpinner/LoadingSpinner';
import MovieCard from '../../../common/MovieCard/MovieCard';

const MovieRecommendations = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useMovieRecommendationQuery({ id });
    console.log('Recommendation', data);

    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (isError) {
      return <Alert variant='danger'>{error.message}</Alert>;
    }

  return (
    <div className='movie-recommendation'>
      <h1>Movie Recommendations</h1>
      <div className='recommendation'>
        {data?.map((recommendation) => (
          <MovieCard
            key={recommendation.id}
            movie={{
              id: recommendation.id,
              title: recommendation.title,
              poster_path: recommendation.backdrop_path, // backdrop_path로 변경
              vote_average: recommendation.vote_average,
              popularity: recommendation.popularity,
              adult: recommendation.adult,
              genre_ids: recommendation.genre_ids,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRecommendations