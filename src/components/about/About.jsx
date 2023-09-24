import React from 'react'
import ME from "../../assets/aboutme.png"
import {IoSchoolOutline} from "react-icons/io5"
import {GoProjectSymlink} from "react-icons/go"
import {LiaClipboardListSolid} from "react-icons/lia"
import "./about.css"

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME}  alt="about-me"/>
          </div>
        </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <IoSchoolOutline className="about__icon" />
                <h5>Education</h5>
                <small>Bachelor in Computer Science at Texas State University</small>
              </article>

              <article className='about__card'>
                <GoProjectSymlink className="about__icon" />
                <h5>Projects</h5>
                <small><a href="google.com">Check out my projects on Github</a></small>
              </article>

              <article className='about__card'>
                <LiaClipboardListSolid className="about__icon" />
                <h5>Resume</h5>
                <small><a href="https://google.com">Click here to view my resume</a></small>
              </article>
              
            </div>
            <p>As a recent graduate of Texas State University majoring in Computer Science, I have gained a working knowledge of the basic principles and practices of computing, including programming, software development, and algorithm design. I have learned how to solve complex problems and develop innovative software solutions using a variety of programming languages and tools. Additionally, I have developed strong critical thinking and analytical skills, which will help me succeed throughout my career in a rapidly evolving industry.</p>
          </div>
        </div>
      
    </section>
  )
}

export default About