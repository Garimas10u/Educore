import React from 'react'

import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='Discover you Path'  />
        <Programs/>
        <About/>
        <Title subTitle='Campus Snapshots' title='Discover Our Gallery' />
        
        <Campus/>
        <Title subTitle='Testimonials' title='Student Feedback' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contacts />
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
