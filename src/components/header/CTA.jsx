import React from 'react'
import CV from "../../assets/KhangResume.pdf"

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA;