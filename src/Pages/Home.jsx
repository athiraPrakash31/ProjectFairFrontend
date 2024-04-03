import React from 'react'
import { Link } from 'react-router-dom'
import Programmer from '../assets/programmer.webp'
import ProjectCard from '../Components/ProjectCard'
import './Home.css'
function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-center mx-5 mt-5'>Project Fair</h1>
                    <p style={{ textAlign: 'justify' }} className='mx-5 mt-5 '>Project Management is the application of specific knowledge, skills, methodologies, and techniques aimed at achieving specific and measurable project goals, including, ultimately, successful project completion. It differs from general “management” because project management relates directly to the goals and time-bound objectives achieved within the scope of a project itself, on a limited timeline, rather than an ongoing one.</p>
                    <div className='text-center'>
                        <Link to='/login'>
                            <button className='btn btn-dark  mt-2 mb-5'>Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={Programmer} width={'100%'} alt="" />
                </div>
            </div>
            <div className="row ">
                <div className="col-12" style={{ height: '500px' }}>
                    <h1 className='text-center  m-5'>Explore Our Project</h1>
                    <marquee className="pb-5" width="100%" direction="left" height="400px">
                        <div className='pb-5'>
                            <ProjectCard />
                        </div>
                    </marquee>
                </div>
            </div>
            <div className="row mb-5 mt-5 m-2 cards" >
                <h1 className="text-center mb-5">Our Services</h1>
                <div className="col-md-4">
                    <div className="card shadow p-5" style={{border:'1px solid grey'}}>
                        <h3 className='text-center m-2' style={{textShadow:'2px 2px 2px black'}}>Web Designing</h3>
                        <p  style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio error itaque totam corporis quo, labore praesentium odio odit quos sunt ratione, qui vel voluptates doloribus! Illo accusamus suscipit eius velit.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow p-5" style={{border:'1px solid grey'}}>
                        <h3 className='text-center m-2' style={{textShadow:'2px 2px 2px black'}}>Single Page Application</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio error itaque totam corporis quo, labore praesentium odio odit quos sunt ratione, qui vel voluptates doloribus! Illo accusamus suscipit eius velit.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow p-5" style={{border:'1px solid grey'}}>
                        <h3 className='text-center m-2' style={{textShadow:'2px 2px 2px black'}}>Backend Services</h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio error itaque totam corporis quo, labore praesentium odio odit quos sunt ratione, qui vel voluptates doloribus! Illo accusamus suscipit eius velit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home