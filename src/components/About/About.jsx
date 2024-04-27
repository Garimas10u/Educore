import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'


const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
        </div>
        <div className="about-right">
            <h3>ABOUT INSTITUTION</h3>
            
            <h2>Gateway to Excellence</h2> <br />
            <p>Welcome to Educore, a distinguished institution renowned for its commitment to academic excellence, innovation, and community engagement which is established with a vision to inspire and empower future leaders. Through our initiatives and partnerships, we aim to make a positive impact on local and global communities.</p>
            <p> With a diverse range of undergraduate, graduate, and professional programs, we offer pathways for students to pursue their passions and carve out their unique academic journeys.We strive to instill values of ethical leadership and civic engagement in our students.</p>
        </div>
    </div>
  )
}

export default About