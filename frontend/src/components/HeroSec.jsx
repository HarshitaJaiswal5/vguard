import React from 'react'
import Cards from './Cards'

const HeroSec = () => {
    return (
        <section className='relative h-screen'>
            <img className="h-4/5 w-screen" src='./assets/Untitled design.png'></img>
            <div className='absolute top-20 left-1/4 transform -translate-x-1/2 text-white text-7xl font-bold'>
                <h1>sense,</h1>
                <h1>navigate</h1>
                <h1 className='text-[#cec4ba]'>& protect.</h1>
            </div>
            <h3 className='absolute top-80 left-36 text-white font-semibold tracking-wide'>VISION GUARD</h3>
            <button className='bg-[#191a1d] absolute top-96 left-36 rounded-2xl text-white text-sm px-5 py-1.5'>Read More</button>
            <div className='bg-black'>
                <div id="content" className='py-5 text-center mx-64 bg-black text-sm text-white w-1/4 flex gap-2 flex-col'>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nisi libero cum saepe quae ipsum velit voluptates nulla veritatis quos doloremque
                    </p>
                    <hr className='border-[#7d6c54] ' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 right-56">
                <Cards />
            </div>
            <div className="absolute bottom-28 right-16 border ">
                <Cards imgsrc={'./assets/boy_image.png'} />
            </div>




        </section>
    )
}

export default HeroSec