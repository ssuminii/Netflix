import React from 'react'
import { useSearchParams } from "react-router-dom";
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import ClipLoader from "react-spinners/ClipLoader";
import { Alert, Container, Row, Col } from "react-bootstrap";

const MovieDetailPage = () => {

  const { data, isLoading, isError, error } = useMovieDetailQuery();
  console.log('moviedetail---->',data);
  if (isLoading) {
    return (
      <div className="spinner-aria">
        <ClipLoader
          color={'red'}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>MovieDetailPage</div>
  )
}

export default MovieDetailPage