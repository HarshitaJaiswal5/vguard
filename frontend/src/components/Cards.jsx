import React from 'react'

const Cards = ({imgsrc}) => {
  return (
    <div className='h-96 scale-125 flex justify-center items-center w-72 bg-[#cec4ba] p-3'>
        <img src={imgsrc} className='h-full'/>
    </div>
  )
}

export default Cards