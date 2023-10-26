import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import "../footer/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__name">
        Khang Tran
      </a>
      <ul className="page_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" className="footer__social">
          <BiLogoFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/khangtran2012/"
          className="footer__social"
        >
          <BiLogoLinkedin />
        </a>
        <a href="https://github.com/Khangtran93" className="footer__social">
          <BiLogoGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
