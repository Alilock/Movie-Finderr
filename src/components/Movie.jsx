import React, { useState } from 'react'
import MovieDetails from './MovieDetails'

const Movie = ({ title, poster, year }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className='h-[420px] text-white flex flex-col items-center justify-between gap-4'>
      <div className='p-2'>
        <img src={poster} alt={title} className='w-[180px] h-auto object-cover'/>
        <div className='flex flex-row justify-between py-4'>
          <div className='w-[140px]'>{title}</div>
          <div className='text-gray-500'>{year}</div>
        </div>
      </div>
      <div className='inline-block w-auto px-6 py-2 border-2 border-sky-600 rounded-xl cursor-pointer' onClick={() => setShowDetails(true)}>Details</div>
      {showDetails && <MovieDetails
        setShowDetails={setShowDetails}
        title={title}
        poster={poster}
        year={year} />}
    </div>
  )
}

export default Movie