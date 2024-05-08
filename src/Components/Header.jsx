import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Header() {
    
    const [token,setToken] = useState(false)
    const navigate = useNavigate()
    const logout=()=>{
        sessionStorage.clear()
        navigate('/')
    }
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(true)
        }
        else{
            setToken(false)
        }
    },[])

    return (
        <div>
           {
           
            <MDBNavbar light bgColor='black'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/' className='text-light fs-2 mx-2'>
                       
                       <LiaLaptopCodeSolid className='text-light fs-1 mx-3'/>
                        Project Fair
                    </MDBNavbarBrand>
                  <button className='btn text-light' onClick={logout}><IoIosLogOut className='fs-1' /></button>
                </MDBContainer>
            </MDBNavbar>
        
            
           } 
        </div>
    )
}

export default Header