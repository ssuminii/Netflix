import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'

const MovieCard = ({movie}) => {
  return (
    <div style={{backgroundImage: 'url(' +`https://media.themoviedb.org/t/p/w260_and_h390_bestv2${movie.poster_path}` + ')',}} className='movie-card'>
        <div className='overlay'>
            <h1>{movie.title}</h1>
            <div className='movie-info'>
              <div>
                  <div>{movie.vote_average}</div>
                  <div>{movie.popularity}</div>
                  <div className='adult'>{movie.adult ? '18' : 'under 18'}</div>
              </div>
              <div>
                {movie.genre_ids.map((id) => (
                    <Badge bg='danger' className='genre'>{id}</Badge>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard