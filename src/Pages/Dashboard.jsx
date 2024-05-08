import React, { useEffect, useState } from 'react'
import Profile from '../Components/Profile'
import Myproject from '../Components/Myproject'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Dashboard() {
  
  const [username,setUsername] = useState('')
  
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }
    else{
      setUsername("")
    }
  })
  return (
    <div>
      <Header/>
      <div className="row">
        <h2 className='text-center mt3'>Welcome <span className='text-light'>{username}</span></h2>
        <div className="col-lg-6">
        <Myproject/>
        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
        <div className="text-center p-4 ">
          <Link to='/projects'>
          <button className='btn btn-dark'>View all users projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard