import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='nav_tab'>
            <Link to='/' className='nav_link'>Elton Costa</Link>
        </div>

        <div className='nav_tab'>
            <Link to='/about' className='nav_link'>About</Link>
            {/* <Link to='/blog' className='nav_link'>Blog</Link> */}
            <Link to='/project' className='nav_link'>project</Link>
        </div>

        <div className='nav_tab'>
            <a href='https://github.com/ryzxxn' className='nav_link'><FaGithub style={{fontSize: '1.4rem'}} /></a>
            <a href='https://www.linkedin.com/in/elton-costa-ab8500219/' className='nav_link'><FaLinkedin style={{fontSize: '1.4rem'}} /></a>
            <a href='https://www.instagram.com/eltoncosta_45/' className='nav_link'><FaInstagram style={{fontSize: '1.4rem'}} /></a>
            <a className='nav_link'><FaDiscord style={{fontSize: '1.4rem'}} /></a>
        </div>
    </div>
    </>
  )
}
