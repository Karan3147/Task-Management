import React from 'react'

const Header = (props) => {
  const logout = ()=>{
     localStorage.removeItem('Loggedinuser')
     props.changeuser('')
  }
  return (
    <div className='flex items-center  justify-between'>
    <h1 className='font-medium text-3xl '>Hello , <br/> <span className='font-semibold text-4xl'> username👋</span> </h1>
    <button onClick={logout} className='font-semibold bg-red-400 px-4 py-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Header