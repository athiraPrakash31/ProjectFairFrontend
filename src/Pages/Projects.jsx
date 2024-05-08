import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { CiSearch } from "react-icons/ci";
import { allProjectAPI } from '../Services/allAPI';

function Projects() {
// 1.to hold the search key
 const [searchKey,setSearchKey] = useState("")



  const [allUserProject, setAllUserProject] = useState([])

  const getAllUserProjects = async(req,res)=>{
    // get token ? authenticated
    if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        "Content-Type" :"application/json",
        "Authorization" :"Bearer "+token
      }
      const result = await allProjectAPI(searchKey,reqHeader)
      console.log(result);
      if(result.status === 200){
        setAllUserProject(result.data)
      }
      else{
        console.log(result.response.data);
      }
    }
  }

  useEffect(()=>{
    getAllUserProjects()
  },[searchKey])

  console.log(searchKey);

  return (
    <div>
      <h2 className="text-center mt-4"> All Projects</h2>
      <div className="text-center">
        <input style={{width:'400px'}} type="search" placeholder='Search by Technology' onChange={e=>setSearchKey(e.target.value)}  className='form-control mb-2 mx-auto' />
        <div className="row">
          {
            allUserProject.length>0 ? allUserProject.map(item=>(

          <div className="col py-5 mx-5">
            <ProjectCard project={item}/>
          </div>
            )):"Can't Fetch All Projects"
          }
        </div>
      </div>
    </div>
  )
}

export default Projects