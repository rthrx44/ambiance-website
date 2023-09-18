import React from 'react'

//* Round Button
export const RButton = ({buttonClick, displayText = 'Submit'}) => {
  return (
    <button 
      className='flex items-center border border-orange-400 rounded-s rounded-e font-sans text-xs font-normal text-orange-400 hover:text-white hover:bg-orange-400 transition-all py-1 px-3'
      onClick={buttonClick}>
        {displayText}
    </button>
  )
}
