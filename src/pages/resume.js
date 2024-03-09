import React from 'react'
import {elton} from '../data/elton.js'
import './resume.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Objective from '../components/Objective/objective.js'
import Education from '../components/Education/Education.js'

export default function resume() {
  return (
    <>
    <div className='resume_container'>

      <p className='text_name'>{elton.name}</p>
      <p className='text_desig'>Software Engineer</p>

      <div className='info_container'>
        <div className='info_child'><MdOutlineEmail className='react_info_icons'/><p className='info_text_child'>{elton.email}</p></div>
        <div className='info_child'><MdLocalPhone className='react_info_icons'/><p className='info_text_child'>{elton.phone}</p></div>
        <div className='info_child'><IoLocationOutline className='react_info_icons'/><p className='info_text_child'>{elton.address}</p></div>
      </div>

      <div className='info_container_link'>
        <div className='info_child'><FaLinkedin className='react_info_icons'/><a href='https://www.linkedin.com/in/elton-costa-ab8500219/' className='info_text_child_link'>Linkedin</a></div>
        <div className='info_child'><FaGithubSquare className='react_info_icons'/><a href='https://github.com/ryzxxn' className='info_text_child_link'>Github</a></div>
      </div>

    <div className='info_header_parent'>
      <div className='info_header_left'>
        <Objective/>
      </div>
      <div className='info_header_right'>
        <Education/>
      </div>
    </div>

    </div>
    </>
  )
}
