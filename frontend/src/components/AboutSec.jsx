import React from 'react'
import Tags from './Tags'

const AboutSec = () => {
    const cardData = [
        {
            imgsrc: "/assets/share.png",
            text: 'lorem ipsum sit amet',
        },
        {
            imgsrc: "/assets/lock.png",
            text: 'lorem ipsum sit amet',
        },
        {
            imgsrc: "/assets/lock.png",
            text: 'lorem ipsum sit amet',
        },
        {
            imgsrc: "/assets/share.png",
            text: 'lorem ipsum sit amet',
        },
    ]
    return (
        <section className='text-white mt-10 ' >
            <div class="bg-[linear-gradient(to_bottom,_#191a1d_50%,_#7d6c54_50%)] p-3 flex flex-col justify-center items-center gap-5 pt-16 ">
                <div className='flex flex-col justify-center items-center gap-2 w-1/3  p-1'>
                    <h2 className='text-4xl'>WELCOME TO VGUARD</h2>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste corporis quo ?</p>
                </div>
                <video src="./assets/video.mp4" className='  w-1/2 border-4 border-black mt-5'controls></video>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mt-7'>WHY CHOOSE VGAURD?</h2>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veritatis doloremque </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 pb-5 mt-7  ">
                    {cardData.map((Tag, index) => (
                        <Tags
                            key={index}
                            imgsrc={Tag.imgsrc}
                           text = {Tag.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutSec