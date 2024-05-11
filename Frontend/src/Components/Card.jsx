import React from 'react'

function Card({item}) {
  return (
    <>
    <div className="card w-96 h-100 bg-white shadow-xl mt-10 hover:scale-105 duration-300 text-black">
  <figure><img src={item.image} alt="Shoes" className='h-8/12 w-8/12 p-2' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary px-4 py-4">Explore</div>
    </h2>
    <p className='mt-3'>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="p-3 hover:rounded-lg hover:text-white cursor-pointer hover:bg-pink-600 hover:duration-500 text-black font-bold mt-5">BUY</div> 
      <div className="p-3  cursor-pointer  text-black font-bold w-12 mt-5">{item.price}</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card