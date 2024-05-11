import React from 'react'
import child from '../assets/child.avif'

function Banner() {
    return (
        <div className='flex flex-col md:flex-row  md:px-20 md:py-20 px-4 '>
            <div className=' flex flex-col w-full md:w-1/2 mt-12 md:mt-32'>
                <div className='space-y-12 mt-12'>
                    <h1 className='text-4xl font-bold'>Hello Friends , Welcome to the site to learn
                        <span className='text-pink-500'> Something New Everyday</span> </h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur tempora aut veritatis omnis ab? Repudiandae adipisci recusandae,
                        totam nemo deleniti eos dolores tempora quae laudantium alias maxime,
                        tenetur quia fugiat!</p>
                </div>
                <label className="w-full mt-7 input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-black"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow text-black" placeholder="Email" />
                </label>
                <button className="btn bg-black text-white w-20 px-12 text-lg mt-2 hover:bg-blue-800 hover:text-white duration-300">Send</button>
            </div>


            {/* SECOND SECTION */}

            <div className='w-full md:w-1/2'>
                <img src={child} alt="" className='p-5 w-92 h-92 rounded-2xl md:p-12' />
            </div>
        </div>
    )
}

export default Banner