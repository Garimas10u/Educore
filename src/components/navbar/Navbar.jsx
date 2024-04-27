import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll';

import logo from '../../assets/logo.png'
import menuicon from '../../assets/menu-icon.png'
import './Navbar.css'



const Navbar = () => {
  const [sticky, setSticky]= useState(false);
  const [mobileMenu, setmobileMenu]=useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[]);

  const toggleMenu= () =>{
    mobileMenu? setmobileMenu(false): setmobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
        <img src={logo} alt="logo" />
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li> 
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menuicon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar