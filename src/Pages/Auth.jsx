import React, { useState } from 'react'
import program from '../assets/Programee.gif'
import { Link } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'
import Swal from 'sweetalert2'
import { LiaLaptopCodeSolid } from "react-icons/lia";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'
function Auth({ register }) {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({   // to hold user details
    username: "",
    email: "",
    password: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!userData.username || !userData.email || !userData.password) {
      Swal.fire({
        title: 'Warning',
        text: 'Please fill the form',
        icon: 'warning',
        confirmButtonText: 'Back'
      })
    }
    else {
      const result = await registerAPI(userData)
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          title: 'Success',
          text: 'Successfully registered',
          icon: 'success',
          confirmButtonText: 'Back'
        })
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else if (result.response.status === 406) {
        Swal.fire({
          title: 'Error',
          text: result.response.data,
          icon: 'error',
          confirmButtonText: 'Back'
        })

      }
    }
    console.log(userData);
  }

  // Login
  const handleLogin = async (e) => {
    e.preventDefault()
    if (!userData.email || !userData.password) {
      Swal.fire({
        title: 'Warning',
        text: 'Please fill the form',
        icon: 'warning',
        confirmButtonText: 'Back'
      })
    }
    else {
      const result = await loginAPI(userData)
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem("username",result.data.existingUser.username)
        sessionStorage.setItem("token",result.data.token)
        Swal.fire({
          title: 'Success',
          text: 'Login Successfull ',
          icon: 'success',
          confirmButtonText: 'Back'
        })
        setUserData({
          email: "",
          password: ""
        })
        navigate('/')
      }
      else if (result.response.status === 404) {
        Swal.fire({
          title: 'Error',
          text: result.response.data,
          icon: 'error',
          confirmButtonText: 'Back'
        })

      }
    }
    console.log(userData);
  }

  return (
    <div>
      <MDBNavbar light bgColor='black'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/' className='text-light fs-2 mx-2'>
                       
                       <LiaLaptopCodeSolid className='text-light fs-1 mx-3'/>
                        Project Fair
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
      <div className="row">
        <div className="col-lg-6">
          <img src={program} alt="" className='p-4' width={'100%'} />
        </div>
        <div className="col-lg-6">
          <form className='shadow bg-black m-4'>
            <h2 className="text-center mt-4   ">
              Project Fair
            </h2>
            <div className="text-center">

              {
                register ? 'Register Here...' : 'Login Here...'
              }
            </div>

            <div className='mx-5 px-5 mt-3'>
              {
                register &&
                <input type="text" placeholder='Username' className='form-control mb-2' onChange={e => setUserData({ ...userData, username: e.target.value })} />
              }

              <input type="email" placeholder='Email' className='form-control mb-2' onChange={e => setUserData({ ...userData, email: e.target.value })} />
              <input type="password" placeholder='Password' className='form-control mb-2' onChange={e => setUserData({ ...userData, password: e.target.value })} />
            </div>
            {
              register ?
                <div className="text-center m-4">
                  <button className='btn btn-dark m-4' onClick={handleRegister}>Register</button>
                  <p className='pb-2'>Already Registered? <Link to='/login'>Login here...</Link></p>
                </div> :
                <div className="text-center m-4">
                  <button className='btn btn-dark m-4' onClick={handleLogin}>Login</button>
                  <p className='pb-2'>New to here? <Link to='/register'>Register here...</Link></p>

                </div>
            }

          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth