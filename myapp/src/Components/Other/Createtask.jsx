import React from 'react'
import { useState } from 'react'
import { useContext} from 'react'
import { Authcontext } from '../../Context/Authprovider'


const Createtask = () => {
    const [userdata, setuserdata] = useContext(Authcontext)

    const [title, setitle] = useState('')
    const [description, setdescription] = useState('')
    const [date, setdate] = useState('')
    const [category, setcategory] = useState('')
    const [assignTo, setassignTo] = useState('')

    const [Task, setTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setTask({ title, description, date, category, active: false, newTask : true, failed: false, completed: false })

        const data = userdata

        data.forEach(function (elem) {
            if (assignTo == elem.firstname) {
                elem.tasks.push(Task)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setuserdata(data)
        console.log(data);

        setitle('')
        setcategory('')
        setassignTo('')
        setdate('')
        setdescription('')
          }
  return (

    <div>
          <form  onSubmit={(e)=>{
             submitHandler(e)
          }} >
            <div className='flex justify-between bg-[#1c1c1c] flex-wrap mt-10 p-10'>

                <div className='w-[40%] ' >
                    <h3 className='mb-1'>Task Title</h3>
                    <input 
                    value={title}
                    onChange={(e)=>{
                        setitle(e.target.value )
                    }}
                    className='bg-transparent border-2 p-2 rounded-md w-full border-red-300 outline-none placeholder:text-grey-200' type="text" placeholder='Make animated UI' />
                    <div>
                    <h3 className='mb-1 mt-1'>Date</h3>
                    <input 
                    value={date}
                     onChange={(e)=>{
                        setdate(e.target.value )
                    }}
                    className='bg-transparent border-2 p-2 rounded-md w-full border-red-300 outline-none placeholder:text-grey-200 ' type="date" name="" id="" />
                </div>

                <div>
                    <h3 className='mb-1 mt-1'>Assign to </h3>
                    <input
                      value={assignTo}
                      onChange={(e)=>{
                        setassignTo(e.target.value )
                    }}
                    className='bg-transparent border-2 p-2 rounded-md w-full border-red-300 outline-none placeholder:text-grey-200' placeholder='Employee name' type="text" />
                </div>

                <div>
                    <h3 className='mt-1 mb-1'>Category</h3>
                    <input  
                    value={category}
                    onChange={(e)=>{
                        setcategory(e.target.value )
                    }}
                    placeholder='dev,design,etc.' className='bg-transparent border-2 p-2 rounded-md w-full border-red-300 outline-none placeholder:text-grey-200' type="text" />
                </div>
                </div>

                <div>
                    <h3 className='mb-1'>Descripton</h3>
                    <textarea  
                    value={description}
                    onChange={(e)=>{
                        setdescription(e.target.value )
                    }}
                    className=' resize-none bg-transparent fixed-textarea border-2 p-2 rounded-md w-full border-red-300 outline-none placeholder:text-grey-200' name="" id="" cols="60" rows="10" placeoholder='Provide the descripton to the employees'></textarea>       
                    <button className='flex rounded-md text-xl items-cente justify-center bg-green-500 w-full py-2'>Create Task</button>
                </div>
            </div>
            </form>
            </div>
  )
}

export default Createtask