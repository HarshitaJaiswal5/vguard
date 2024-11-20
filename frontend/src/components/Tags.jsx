import React from 'react'

const Tags = ({imgsrc,text}) => {
  return (
    <div className='flex gap-2 text-white h-10 w-28 '>
        <img src={imgsrc} alt=""  className='h-5 w-5'/>
        <p className='text-sm text-center'>{text}</p>
    </div>
  )
}

export default Tags