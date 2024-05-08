import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { addProjectAPI } from '../Services/allAPI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectResponseContext } from '../ContextAPI/ContextShare';
function AddProject() {

const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)


  const [token,setToken] = useState("")
  const [preview,setPreview] = useState("")
   const [fileStatus,setFileStatus] = useState(false)
  const [projectData,setProjectData] = useState({
    title:"",
    language:"",
    github:"",
    livelink:"",
    overview:"",
    projectImage:""
  })
  console.log(projectData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
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



 const handleAddProject = async() =>{
  const {title,language,github,livelink,overview,projectImage} = projectData

  if(!title||!language||!github||!livelink||!overview||!projectImage){
    alert("please fill details")
  }
  else{
    const reqBody = new FormData()
    reqBody.append("title",title)
    reqBody.append("language",language)
    reqBody.append("github",github)
    reqBody.append("livelink",livelink)
    reqBody.append("overview",overview)
    reqBody.append("projectImage",projectImage)
    
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }

      //api call
      const result = await addProjectAPI(reqBody,reqHeader)
      console.log(result);

      if(result.status==200){
        alert("Project added successfully")
        setAddProjectResponse(result.data)
        handleClose()
        setProjectData({
          title:"",
          language:"",
          github:"",
          livelink:"",
          overview:"",
          projectImage:""
        })
        setPreview("")
      }
      else{
        alert(result.response.data)
     }
    }
  }
}




 useEffect(() => {
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
  
},[])
 
  return (
    <div>
      <button className='btn btn-dark m-5' onClick={handleShow}>Add</button>
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
          <img  width={'200px'} src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHh4Nu4IGjp6Pd5FQMBiLiUatyZyUyvNu8_3OBHUYlQ&s"} alt="" />
        </label>
          {
            fileStatus && <p className='text-danger'>Please upload following image extensions(png,jpg,jpeg) only...</p>

          }
            </div>
            <div className="col-6">
              <input type="text" onChange={e=>setProjectData({...projectData,title:e.target.value})} placeholder='Project title' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,language:e.target.value})} placeholder='Languages Used' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,github:e.target.value})} placeholder='Gt hub link' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,livelink:e.target.value})}placeholder='Live link' className='form-control mb-3' />
              <input type="text" onChange={e=>setProjectData({...projectData,overview:e.target.value})}placeholder='Overview' className='form-control mb-3' />

            </div>
          </div>


        


        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button size='sm' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size='sm' variant="light" onClick={handleAddProject}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject