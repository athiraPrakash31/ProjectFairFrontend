import React from 'react'
import Swal from 'sweetalert2'
function Profile() {
  const updateUser=()=>{
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='mt-5'>My Profile</h3>
        <label>
          <input type="file" style={{display:'none'}} />
          <img width={'200px'} src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="" />
        </label>
        <div className="mx-5 mt-4 px-4">
          <input type="text" placeholder='Name' className='form-control mb-2' />
          <input type="text" placeholder='Github' className='form-control mb-2'/>
          <input type="text" placeholder='Live Link' className='form-control mb-2'/>
          <button className='btn btn-dark m-4'onClick={updateUser}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Profile