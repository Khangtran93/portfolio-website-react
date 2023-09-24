import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineCode} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {GiSkills} from "react-icons/gi"
import {useState} from "react"

const Nav = () => {
  const [activeNav, setAvtiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setAvtiveNav('#')} className={activeNav === "#" ? "active" : ""} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setAvtiveNav('#about')} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setAvtiveNav('#experience')} className={activeNav === "#experience" ? "active" : ""}><GiSkills/></a>
      <a href="#projects" onClick={()=>setAvtiveNav('#projects')} className={activeNav === "#projects" ? "active" : ""}><AiOutlineCode/></a>
      <a href="#contact" onClick={()=>setAvtiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav