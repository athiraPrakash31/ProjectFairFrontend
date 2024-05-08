import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { BsGithub } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteAllUserProjectAPI, userProjectAPI } from '../Services/allAPI';
import { addProjectResponseContext, editProjectResponseContext } from '../ContextAPI/ContextShare';
import EditProject from './EditProject';

function Myproject() {

    const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)

    const [userAllProject, setUserAllProject] = useState([])

    const getuserAllProjects = async (req, res) => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token');
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
            const result = await userProjectAPI(reqHeader)
            console.log(result.data);
            if (result.status === 200) {
                setUserAllProject(result.data)
            }
            else {
                console.log(result.response.data);
            }
        }
    }
    useEffect(() => {
        getuserAllProjects()
    }, [addProjectResponse,editProjectResponse])

    const deleteUserProject = async(pid)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":"Bearer " + token
            }
            const result = await deleteAllUserProjectAPI(pid,reqHeader)
            console.log(result);
            alert("Project deleted successfully")
            getuserAllProjects()

        }
    }


    console.log(userAllProject);
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h3 className='ms-5'>My Projects</h3>
                <AddProject />
            </div>
            {
                userAllProject.length > 0 ? userAllProject.map(project => (

                    <div className="row shadow m-4 p-5 ">

                        <div className="col-6 mt-2">
                            <h4>{project.title}</h4>
                        </div>

                        <div className="col-6 d-flex justify-content-between">
                            <button className='btn'><a href={project.github}><BsGithub /></a></button>
                                <EditProject projects={project}/>
                            <button className='btn' onClick={()=>deleteUserProject(project._id)}><RiDeleteBin5Fill /></button>
                        </div>

                    </div>
                )) : "No Projects"
            }
        </div>
    )
}

export default Myproject