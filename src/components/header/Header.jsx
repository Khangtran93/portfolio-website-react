import React from 'react'
import Socials from './Socials'
import CTA from "./CTA"
import "./header.css"
import Avatar from "../../assets/myimg.png"

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Khang Tran</h1>
        <h5>Fullstack Developer</h5>
        <CTA/>
        <Socials/>
        
        <div className='avatar'>
          <img className="img" src={Avatar} alt="avatar"/>
        </div>
        <a href="#footer" className='scroll-down'>Scroll Down</a> 
        
      </div>
    </header>
  )
}

export default Header