import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'


const Socials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/khangtran2012/" target="_blank"><BsLinkedin/></a>
		  <a href="https://github.com/Khangtran93" target="_blank"><FaGithub/></a>
      <a href="mailto:kdt1171@gmail.com"><SiGmail/></a>
    </div>
  )
}

export default Socials 