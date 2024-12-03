import React from 'react'

const MovieDetails = ({ setShowDetails, title, poster, year }) => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen p-32 bg-black transition-opacity bg-opacity-80 text-center'>
      <div className='flex flex-col items-center gap-4 mb-4'>
        <img src={poster} alt={title} className='w-[720px] h-[360px] object-cover' />
        <div className='flex flex-row justify-between py-4'>
          <div className='w-auto'>{title}</div>
          <div className='w-auto'>{year}</div>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reprehenderit earum a vitae maiores optio ea
          voluptatibus nesciunt atque temporibus dicta quae veniam officia, quo ullam officiis minima nihil quasi. Ab
          eligendi, laboriosam et laudantium, dolor expedita sequi dolorem nobis fuga nisi facilis amet consequuntur
          nihil soluta perspiciatis harum aut totam! Cumque molestiae magni corporis nihil, dignissimos quasi incidunt.
          Eius expedita veritatis dolorum libero dolores nobis soluta excepturi fugit temporibus alias sequi, earum aspernatur,
          quo esse eligendi ab cum aliquid quisquam nulla dicta animi laborum eos ipsam commodi!
        </div>
      </div>
      <div className='inline-block w-auto px-20 py-3 text-lg border-2 border-sky-600 rounded-xl cursor-pointer' onClick={() => setShowDetails(false)}>Leave</div>
    </div>
  )
}

export default MovieDetails