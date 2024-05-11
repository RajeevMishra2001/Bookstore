import React from 'react'
import list from './list.json'
import Card from './Card'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Course() {
  return (

    
    <div className="max-w-screen-2xl container">
      <Navbar />
      <div className=" ">
        <h1 className="mt-20 p-10 font-bold text-2xl md:text-4xl  text-center">Welcome back to
          <span className='text-pink-600'> RBooks </span> <br /> E-commerce Website </h1>
        <p className='text-center mx-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus veniam laudantium unde tenetur eligendi voluptatum nemo debitis,
          corrupti delectus fuga consectetur eum officiis facilis sit vero nisi aut
          cupiditate beatae adipisci blanditiis aliquid sunt minima? Soluta esse voluptate quas nemo.</p>
        <div className="text-center mt-8">
          <Link to='/'>
          <button className='hover:bg-blue-600 hover:duration-300 bg-pink-600 px-8 py-3 font-bold text-lg text-white rounded-lg'>
            Back</button>
          </Link>
        </div>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          list.map((item)=>(
            <Card item={item} key={item.id}  />
          ))
        }
      </div>
<Footer/>
    </div>
  )
}

export default Course