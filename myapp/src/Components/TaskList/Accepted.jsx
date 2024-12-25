import React from 'react'

const Accepted = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[500px] p-5 bg-emerald-500 rounded-md '>
    <div className=' flex justify-between'>
      <h3 className='bg-red-700 rounded-sm font-medium text-lg px-4 '>{data.category}</h3>
      <h4 className='font-medium text-lg '>{data.date}</h4>
      </div>
      <h2 className='mt-10 font-semibold text-4xl'>
          {data.title}
          </h2> 
          <div className='mt-8 font-medium'>
          <p>{data.description}</p>  
          </div>
          <div className='flex justify-between mt-12'>
            <button className='py-1 px-2 rounded-md bg-green-400 text-lg'> Mark as Completed</button>
            <button className='py-1 px-2 rounded-md bg-red-500 text-lg'> Mark as Failed</button>
          </div>
          
  </div>
  )
}

export default Accepted