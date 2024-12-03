import React from 'react'

const Searching = ({setInputValue}) => {

  return (
    <div>
      <input type="text" placeholder='Search for a movie...' onChange={(e) => setInputValue(e.target.value)} className='px-6 py-2 w-96 rounded-md focus:outline-none'/>
    </div>
  )
}

export default Searching