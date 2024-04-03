import React from 'react'
import AddProject from './AddProject'
import { BsGithub } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
function Myproject() {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3 className='ms-5'>My Projects</h3>
                <AddProject />
            </div>
            <div className="row shadow m-4 p-5 ">
                <div className="col-6 mt-2">
                    <h4>Project Title</h4>
                </div>
                <div className="col-6 d-flex justify-content-between">
                    <button className='btn'><BsGithub /></button>
                    <button className='btn'><FaEdit /></button>
                    <button className='btn'><RiDeleteBin5Fill /></button>
                </div>
            </div>
        </div>
    )
}

export default Myproject