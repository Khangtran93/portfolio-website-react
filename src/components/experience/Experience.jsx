import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"
import "./experience.css"

const Experience = () => {
  return (
    <section id="experience">
        <h5>Skills I have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
              <h3>Frontend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>HTML</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>CSS</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>Javascript</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>ReactJS</h4>
                  </article>
              </div>
            </div>

            <div className='experience__backend'>
              <h3>Backend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>Node.js</h4>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>Express</h4>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>MongoDB</h4>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>Python</h4>
                </article>
                
                
                

            </div>
        </div>

        {/* <div className='experience__frontend'>
              <h3>Frontend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>HTML</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>CSS</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>Javascript</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>ReactJS</h4>
                  </article>
              </div>
            </div>

            <div className='experience__frontend'>
              <h3>Frontend Development</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>HTML</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>CSS</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>Javascript</h4>
                  </article>
                  <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <h4>ReactJS</h4>
                  </article>
              </div>
            </div> */}
        </div>
    </section>
  )
}

export default Experience