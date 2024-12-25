import React from 'react'

const Tasknumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='bg-blue-500 py-8 px-10 w-[45%] rounded-md'>
        <h2 className='text-4xl font-bold  ' >{data.taskCounts.newTask}</h2>
        <h3 className='text-3xl font-semibold'>New task</h3>
      </div>
      <div className='bg-yellow-500 py-8 px-10 w-[45%] rounded-md'>
        <h2 className='text-4xl font-bold text-black ' >{data.taskCounts.active}</h2>
        <h3 className='text-3xl font-semibold text-black'>Accepted</h3>
      </div>
      <div className='bg-emerald-300 py-8 px-10 w-[45%] rounded-md'>
        <h2 className='text-4xl font-bold ' >{data.taskCounts.completed}</h2>
        <h3 className='text-3xl font-semibold'>Completed</h3>
      </div>
      <div className='bg-red-400 py-8 px-10 w-[45%] rounded-md'>
        <h2 className='text-4xl font-bold ' >{data.taskCounts.failed}</h2>
        <h3 className='text-3xl font-semibold'>Failed</h3>
      </div>
    </div>
  )
}

export default Tasknumber