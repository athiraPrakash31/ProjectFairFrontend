import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { LiaLaptopCodeSolid } from "react-icons/lia";function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='black'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/' className='text-light fs-2 mx-2'>
                       
                       <LiaLaptopCodeSolid className='text-light fs-1 mx-3'/>
                        Project Fair
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header