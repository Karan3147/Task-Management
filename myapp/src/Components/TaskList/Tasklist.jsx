import React from 'react'
import Accepted from './Accepted'
import Completed from './Completed'
import Newtask from './Newtask'
import Failed from './Failed'

const Tasklist = ({data}) => {
  return (
    <div className='  overflow-x-auto scrollbar-hide h-[65%] w-full gap-5  mt-10 flex-nowrap flex items-center justify-start py-5 '>
       {data.tasks.map((elem, idx)=>{
        if (elem.active){
          return <Accepted key={idx} data={elem}/>
        }
        if(elem.failed){
           return <Failed key={idx} data={elem}/>
        }
        if(elem.newTask){
           return <Newtask key={idx} data={elem}/>
        }
        if(elem.completed){
           return <Completed key={idx} data={elem}/>
        }
       })}
       
        
    </div>
  )
}

export default Tasklist