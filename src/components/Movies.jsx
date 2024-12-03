import React from 'react'
import Movie from './Movie'

const Movies = ({movies}) => {
  return (
    <div className='grid grid-cols-3 gap-24'>
      {movies.length > 0 ? (
        movies.map((item) => (
          <Movie
            key={item.imdbID}
            title={item.Title}
            poster={item.Poster}
            year={item.Year} />
        ))
      ) : (<div>No movies found!</div>)}
    </div>
  )
}

export default Movies