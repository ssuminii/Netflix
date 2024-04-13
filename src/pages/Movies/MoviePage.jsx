import React, { useState } from "react";
import "./MoviePage.style.css";
import { useSearchParams } from "react-router-dom";
import { Alert, Container, Row, Col } from "react-bootstrap";
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from "react-paginate";
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import LoadingSpinner from '../../common/\bLoadingSpinner/LoadingSpinner';

// 경로 2가지
// navbar에서 클릭해서 온 경우 -> Popular Movie 보여주기 (백엔드)
// keyword를 입력해서 온 경우 -> 키워드와 관련된 영화를 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할 때 마다 page 바꿔주기
// page 값이 바뀔 때 마다 useSearchMovie에 페이지까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword, page});
  console.log('data', data);

  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {" "}
          filter{" "}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체 페이지
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}  // 페이지 1부터 시작
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;