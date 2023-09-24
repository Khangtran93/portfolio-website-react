import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {RiMessengerLine} from "react-icons/ri"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {useRef} from "react"
import emailjs from 'emailjs-com'
import "../contact/contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tf9ys5f', 'template_idbg48b', form.current, 'XfWMqQzyeJfQdgAuN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
           <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kdt1171@gmail.com</h5>
            <a href="mailto:kdt1171@gmail.com">Send me an email</a>
           </article>

           <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Khang Tran</h5>
            <a href="https://m.me/khang.black.10">Message Me On Messenger</a>
            </article>
            
           <article className="contact__option">
           <AiOutlineWhatsApp className='contact__option-icon'/>
           <h4>WhatsApp</h4>
           <h5>+1 512-412-5830</h5>
           <a href="https://api.whatsapp.com/send?phone=15124125830">Message Me On WhatsApp</a>
           </article>

          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required></input>
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact