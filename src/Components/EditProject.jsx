import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa";
import { serverURL } from '../Services/serverURL';
import { updateUserProjectAPI } from '../Services/allAPI';
import { editProjectResponseContext } from '../ContextAPI/ContextShare';

function EditProject({projects}) {
console.log(projects);
  
// context Api
const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)


const [preview,setPreview] = useState("")
    const [projectData,setProjectData] = useState({
      id:projects._id, 
      title:projects.title,
        language:projects.language,
        github:projects.github,
        livelink:projects.livelink,
        overview:projects.overview,
        projectImage:""
      })
      const [fileStatus,setFileStatus] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () =>{ setShow(false)
    setProjectData({
      id:projects._id, 
      title:projects.title,
        language:projects.language,
        github:projects.github,
        livelink:projects.livelink,
        overview:projects.overview,
        projectImage:""
    })
    setPreview("")
  }

    const handleShow = () => setShow(true);

    useEffect(()=>{
      console.log(projectData.projectImage.type);
      if(projectData.projectImage.type=="image/png"||projectData.projectImage.type=="image/jpeg"||projectData.projectImage.type=="image/jpg"){
        console.log("generate image url");
        // file to url conversion
      console.log(URL.createObjectURL(projectData.projectImage));
      setPreview(URL.createObjectURL(projectData.projectImage)) 
      setFileStatus(false)
      }
      else{
        setFileStatus(true)
        console.log("Please upload following image extensions(png,jpg,jpeg)");
      }
       },[projectData.projectImage])

       const updateProject = async() =>{
        const {id,title,language,github,livelink,overview,projectImage} = projectData
        // reqBody
        const reqBody = new FormData()
        reqBody.append("title",title),
        reqBody.append("language",language),
        reqBody.append("github",github),
        reqBody.append("livelink",livelink),
        reqBody.append("overview",overview),
        preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",projects.projectImage)
       console.log(preview);
        // reqHEader
        const token = sessionStorage.getItem("token");
        // if there is a change in image
        if(preview){
          console.log(preview);
          const reqHeader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          // api call
          const result = await updateUserProjectAPI(id,reqBody,reqHeader)
          console.log(result);
          if(result.status == 200){
            alert("Project Updated");
            handleClose()
            setEditProjectResponse(result.data)
          }
          else{
            alert("Project not updated ")
            setEditProjectResponse(result.response.data)
          }
        }
        else{
           const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
          // api call
          const result = await updateUserProjectAPI(id,reqBody,reqHeader)
          console.log(result);
          if(result.status == 200){
            alert("Project Updated");
            handleClose()
            setEditProjectResponse(result.data)

          }
          else{
            alert("Project not updated ")
            setEditProjectResponse(result.response.data)

          }
        }
      }


  return (
    <div>
      <button className='btn' onClick={handleShow}><FaEdit /></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mt-4 p-5">
            <label>
          <input onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} type="file" style={{display:'none'}} />
          <img  width={'200px'} src={preview?preview:`${serverURL}/uploads/${projects.projectImage}`} alt="" />
        </label>
          {
            fileStatus && <p className='text-danger'>Please upload following image extensions(png,jpg,jpeg) only...</p>

          }
            </div>
            <div className="col-6">
              <input type="text" onChange={e=>setProjectData({...projectData,title:e.target.value})} value={projectData.title} placeholder='Project title' className='form-control mb-3'  />
              <input type="text" onChange={e=>setProjectData({...projectData,language:e.target.value})} value={projectData.language} placeholder='Languages Used' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,github:e.target.value})} value={projectData.github} placeholder='Gt hub link' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,livelink:e.target.value})} value={projectData.livelink} placeholder='Live link' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,overview:e.target.value})} value={projectData.overview} placeholder='Overview' className='form-control mb-3' />

            </div>
          </div>
           
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button size='sm' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size='sm' variant="light" onClick={updateProject}
          >Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProject