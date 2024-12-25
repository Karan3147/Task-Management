import React from 'react'
import Header from '../Other/Header'
import Createtask from '../Other/Createtask'
import AllTask from '../Other/AllTask'

const Admin = (props) => {
    return (
        <div className='p-10'>
            <Header changeuser={props.changeuser} />
            <Createtask/>
            <AllTask/>
        </div>
    )
}

export default Admin