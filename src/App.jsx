import React from "react";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import { Route, Router, Routes } from "react-router-dom";
import MyResume from "./components/MyResume/MyResume";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      {/* <Education/> */}

      <Footer />
      <Routes>
        <Route path="/resume" Component={MyResume} />
      </Routes>
    </div>
  );
};

export default App;
