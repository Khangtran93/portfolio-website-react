import React from 'react'
import {FaGithub} from 'react-icons/fa'
// import Project1 from "../../assets/snake_game_rs.png"
// import Project2 from "../../assets/pong_game.png"
// import Project3 from "../../assets/pm_rs.png"
// import Project4 from "../../assets/pomodoro_rs.png"
// import Project5 from "../../assets/flashcard_rs.png"
// import Project6 from "../../assets/snake_game_rs.png"
import "./project.css"
import data from "../../data"

const Project = () => {
    // console.log(data)
    
  return (
    <section id="projects">
        <h5>My projects</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
            {
                data.map(({id, image, title, github}) =>
                {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-img'>
                                <img src={image} alt={title}/>
                            </div>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='github-btn' target="_blank"><FaGithub/></a>

                            </div>

                        </article>
                    )
                })
            }
        </div>
        
        {/* <div className="container portfolio__container"> 
            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
               <img className="item__img" src={Project1} alt="project1"/>
            </div>
            <h3>item title</h3>
            <div className='portfolio__item-cta'>
                <a href="google.com" className='btn'>Github</a>
                <a href="google.com" className='btn btn-primary'>Live Demo</a>
            </div>
            
            </article>

            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
               <img src={Project2} alt="project1"/>
            </div>
            <h3>item title</h3>
            <div className='portfolio__item-cta'>
                <a href="google.com" className='btn'>Github</a>
                <a href="google.com" className='btn btn-primary'>Live Demo</a>
            </div>
            
            </article>

            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
               <img src={Project3} alt="project1"/>
            </div>
            <h3>item title</h3>
            <div className='portfolio__item-cta'>
                <a href="google.com" className='btn'>Github</a>
                <a href="google.com" className='btn btn-primary'>Live Demo</a>
            </div>
            
            </article>

            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
               <img src={Project4} alt="project1"/>
            </div>
            <h3>item title</h3>
            <div className='portfolio__item-cta'>
                <a href="google.com" className='btn'>Github</a>
                <a href="google.com" className='btn btn-primary'>Live Demo</a>
            </div>
            
            </article>

            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
               <img src={Project5} alt="project1"/>
            </div>
            <h3>item title</h3>
            <div className='portfolio__item-cta'>
                <a href="google.com" className='btn'>Github</a>
                <a href="google.com" className='btn btn-primary'>Live Demo</a>
            </div>
                
            </article>

            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
               <img src={Project6} alt="project1"/>
            </div>
            <h3>item title</h3>
            <div className='portfolio__item-cta'>
                <a href="google.com" className='btn'>Github</a>
                <a href="google.com" className='btn btn-primary'>Live Demo</a>
            </div>
            
            </article>
        </div> */}
    </section>
  )
}

export default Project