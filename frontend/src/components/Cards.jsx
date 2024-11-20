import React from 'react'

const Cards = ({imgsrc}) => {
  return (
    <div className='h-80 w-56 bg-[#cec4ba] p-3'>
        <img src={imgsrc}/>
    </div>
  )
}

export default Cards