import React from 'react'
import Header from '../Other/Header'
import Tasknumber from '../Other/Tasknumber'
import Tasklist from '../TaskList/Tasklist'

const Employee = (props) => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      
        <Header changeuser={props.changeuser} data={props.data}/>
        <Tasknumber data={props.data}/>
        <Tasklist data={props.data}/>
    </div>
  )
}

export default Employee