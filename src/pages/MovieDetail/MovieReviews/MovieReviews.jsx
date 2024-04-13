import React from 'react'
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from '../../../hooks/useMovieReview';

const MovieReviews = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useMovieReviewQuery({id});
    console.log('review',data);
  return (
    <div>MovieReviews</div>
  )
}

export default MovieReviews