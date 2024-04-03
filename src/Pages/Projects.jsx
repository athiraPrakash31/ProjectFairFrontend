import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { CiSearch } from "react-icons/ci";

function Projects() {
  return (
    <div>
      <h2 className="text-center mt-4"> All Projects</h2>
      <div className="text-center">
        <input style={{width:'400px'}} type="search" placeholder='Search by Technology '  className='form-control
        mb-2 mx-auto' />
        <div className="row">
          <div className="col py-5 mx-5">
            <ProjectCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects