import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  return (
    <nav className='h-12  bg-black flex justify-between  items-center text-white px-28'>
    
        <div id="menu" className='flex w-32 justify-between items-center '>
          <img className='h-5 w-5 bg-black object-cover object-center' src='./assets/frontendassetsUntitled design,png_cropped.png' />
          <div>MENU</div>
          <span> | </span>
          <div>ENG</div>
        </div>
        <div className='tracking-widest font-semibold'>
          VGUARD
        </div>
        <div id="icons" className='w-28 flex justify-between'>
          <i className='fa-solid fa-magnifying-glass text-[#7d6c54]' />
          <i className='fa-solid fa-user' />
          <i className='fa-solid fa-cart-shopping text-[#7d6c54]' />
          <i className='fa-regular fa-heart' />
        </div>
      


    </nav>
  )
}

export default Navbar