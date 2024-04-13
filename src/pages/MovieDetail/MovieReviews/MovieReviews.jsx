import React from 'react'
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from '../../../hooks/useMovieReview';
import LoadingSpinner from '../../../common/\bLoadingSpinner/LoadingSpinner';
import './MovieReviews.style.css';

const MovieReviews = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useMovieReviewQuery({id});
    console.log('review',data);

    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (isError) {
      return <Alert variant='danger'>{error.message}</Alert>;
    }

  return (
    <div className='movie-review'>
      <h1>Reviews</h1>
      <div className='review-container'>
        {data?.map((item) => (
          <div className='review'>
            <div>Name: {item?.author}</div>
            <div>{item?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieReviews