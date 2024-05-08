import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//Register API call
export const registerAPI = async(user) => {
    return await commonAPI("post",`${serverURL}/register`,user,"")
}

// Login API call
export const loginAPI = async(user) => {
    return await commonAPI("post",`${serverURL}/login`,user,"")
}
export const addProjectAPI = async(reqBody,reqHeader) => {
    return await commonAPI("post",`${serverURL}/project/add-project`,reqBody,reqHeader)
}

export const homeProjectAPI = async() => {
    return await commonAPI("get",`${serverURL}/project/homeProject`,"","")
}

export const allProjectAPI = async(searchKey,reqHeader) => {
    return await commonAPI("get",`${serverURL}/projects/allProjects?search=${searchKey}`,"",reqHeader)
}

export const  userProjectAPI = async(reqHeader) => {
    return await commonAPI("get",`${serverURL}/project/viewProject`,"",reqHeader)
}

// delte partiicular user project API call
export const deleteAllUserProjectAPI = async (projectId,reqHeader)=>{
    return await commonAPI ("delete",`${serverURL}/project/delete/${projectId}`,{},reqHeader)
}

// update a user project API Call
export const updateUserProjectAPI = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/project/update-project/${projectId}`,reqBody,reqHeader)
}