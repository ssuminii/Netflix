import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Alert, Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadingSpinner from '../../common/\bLoadingSpinner/LoadingSpinner';
import './MovieDetailPage.style.css';
import MovieReviews from './MovieReviews/MovieReviews';

const MovieDetailPage = () => {
  const {id} = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery({id});



  console.log('Movie Detail',data);

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className='movie-detail'>
      <Container>
        <Row>
          <Col>
            <img className='movie-detail-img' src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`} alt=''/>
          </Col>
          <Col>
            <div className='movie-detail-title'>
              <div>{data?.title}</div>
              <div>{data?.overview}</div>
            </div>
            <div className='movie-detail-info'>
              <div>상영 시간: {data?.runtime}분</div>
              <div>개봉일: {data?.release_date}</div>
              <div>평점: {(data?.vote_average).toFixed(2)}점</div>
              <div>예산: {(data?.budget).toLocaleString('ko-KR')}$</div>
            </div>
            <div className='movie-detail-genre'>
            GENRE <br/> {data?.genres.map((item) => (
                  <Badge className="badge" bg="danger" key={item.id}> 
                    {item?.name} 
                  </Badge>
                ))}
            </div>
          </Col>
        </Row>
        <Row>
          <MovieReviews />
        </Row>
      </Container>
    </div>
  );
}

export default MovieDetailPage