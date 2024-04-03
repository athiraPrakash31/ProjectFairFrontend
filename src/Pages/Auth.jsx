import React from 'react'
import program from '../assets/Programee.gif'
import { Link } from 'react-router-dom'
function Auth({ register }) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <img src={program} alt="" className='p-4' width={'100%'} />
        </div>
        <div className="col-lg-6">
          <form className='shadow bg-black m-4'>
            <h2 className="text-center mt-4   ">
              Project Fair

            </h2>
            {
              register ? 'Register Here...' : 'Login Here...'
            }

            <div className='mx-5 px-5 mt-3'>
              {
                register &&
                <input type="text" placeholder='Username' className='form-control mb-2' />
              }

              <input type="text" placeholder='Email' className='form-control mb-2' />
              <input type="text" placeholder='Password' className='form-control mb-2' />
            </div>
              {
                register ?
                <div className="text-center m-4">
                  <button className='btn btn-dark m-4'>Register</button>
                  <p className='pb-2'>Already Registered? <Link to='/login'>Login here...</Link></p>
                </div>:
                 <div className="text-center m-4">
                 <button className='btn btn-dark m-4'>Login</button>
                 <p  className='pb-2'>New to here? <Link to='/register'>Register here...</Link></p>

               </div>
              }

          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth