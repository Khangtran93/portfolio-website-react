import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>HTML</h5>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>CSS</h5>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>Javascript</h5>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>ReactJS</h5>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>Node.js</h5>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>Express</h5>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>MongoDB</h5>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h5>Python</h5>
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
  );
};

export default Experience;
