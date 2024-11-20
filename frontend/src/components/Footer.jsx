import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#7d6c54] border pt-3' >
                <hr className='border'/>
            <section className='bg-[#7d6c54] flex flex-row justify-between px-32 text-white  py-12 '>
                <div className='w-1/3'>
                    <h3 className='font-semibold'> VGUARD</h3>
                    <p className='text-sm text-justify'>Lorem ipsum dolor, sit facilis accusamus sed ipsam, placeat aspernatur beatae odio rem quod, est vero asperiores, quidem porro error itaque! Vitae.</p>
                    <hr className='my-2'/>
                    <h5>sense,navigate and protect</h5>
                </div>
               <div className='flex flex-row gap-7'>
               <ul className="company ">
                    <li className="font-semibold">Company</li>
                    <li className='text-sm'>About</li>
                    <li className='text-sm'>Careers</li>
                    <li className='text-sm'>Brand Center</li>
                    <li className='text-sm'>Blog</li>
                </ul>

                <ul className="help text-sm">
                    <li className="font-semibold">Help Center</li>
                    <li>Discord Server</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Contact Us</li>
                </ul>
                <ul className="Legal text-sm">
                    <li className="font-semibold">Privacy Policy</li>
                    <li>Licensing</li>
                    <li>Terms & Conditions</li>
                </ul>
               </div>
            </section>
            <div className='bg-black flex justify-between px-20 py-2 text-[#737373]'>
            <div className=' '>Copyright @ Vguard 2024</div>
                <div className='  flex items-center gap-3'>
                    <i className="fa-brands fa-facebook" />
                    <i className="fa-brands fa-instagram" />
                    <i className="fa-brands fa-twitter" />
                    <i className="fa-brands fa-tiktok" />
                </div>
               

            </div>

        </footer>
    )
}

export default Footer