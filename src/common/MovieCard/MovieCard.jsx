import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'


const MovieCard = ({movie}) => {
  const {data:genreData} = useMovieGenreQuery();
  // console.log('data', genreData);

  const navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movies/${movie.id}`);
  }

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div style={{backgroundImage: 'url(' +`https://media.themoviedb.org/t/p/w260_and_h390_bestv2${movie.poster_path}` + ')',}} className='movie-card' onClick={goToMovieDetail}>
        <div className='overlay'>
            <h1>{movie.title}</h1>
            <div className='movie-info'>
              <div>
                  <div>평점: {(movie.vote_average).toFixed(2)}점</div>
                  <div>인기: {Math.floor(movie.popularity)}점</div>
                  <div className='adult'>{movie.adult ? '18' : 'under 18'}</div>
              </div>
              <div className='movie-card-genre'>
                {showGenre(movie.genre_ids).map((id) => (
                    <Badge bg='danger' className='genre'>{id}</Badge>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard