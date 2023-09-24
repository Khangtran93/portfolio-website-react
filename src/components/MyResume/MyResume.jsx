import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myResume.css";

function MyResume() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <small>
        <a style={{ cursor: "pointer" }} onClick={handleShow}>
          Click here to view my resume
        </a>
      </small>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
          }}
        >
          <h2 style={{ marginRight: "auto" }}>Khang Tran</h2>
          <small style={{ marginBottom: "5px" }}>
            584/35 Phạm Văn Chiêu, Phường 16, Quận Gò Vấp | 0385777091
          </small>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <a>kdt1171@gmail.com |</a>
            <a href="google.com" style={{ marginLeft: "5px" }}>
              {" "}
              GitHub |
            </a>
            <a style={{ marginLeft: "5px" }}> LinkedIn</a>
          </div>
          <div>
            <h4>SUMMARY</h4>
            <p>
              Recent graduate seeking junior software developer roles.
              Proficient in several programming languages.{" "}
            </p>
            <strong> Career Objectives</strong>
            <p>
              My career objective for my resume is to gain real-world experience
              and apply the programming knowledge I have acquired. With a strong
              can-do attitude and a passion for continuous learning, I am eager
              to contribute to innovative projects and collaborate with a
              dynamic team to solve complex problems in the field of software
              development. My goal is to grow as a skilled and versatile
              programmer while making a meaningful impact on the organizations I
              work with.
            </p>
            <h4>EDUCATION</h4>
            <strong>Texas State University</strong>
            <p>B.S Computer Science</p>
            <ul>GPA: 3.61</ul>
            <strong>Austin Community College</strong>
            <p>A.S Computer Science</p>
            <h4>PROJECTS</h4>

            <strong>e-Commerce website:</strong>
            <ul style={{ listStyleType: "revert" }}>
              <li>
                • eCommerce platform with React, Node, Express, MongoDB and
                Redux toolkit.
              </li>
              <li>
                • Full-featured shopping cart, user pay system and product
                rating & review system.
              </li>
              <li>• Product search, carousel and pagination.</li>
              <li>
                • Admin functionalities to list/edit products, update/delete
                users and manage order delivery status.
              </li>
            </ul>

            <strong>Realtime Chat App:</strong>
            <ul>
              <li>
                • Realtime chat app with React, Node JS, Express JS, MongoDB and
                Socket.IO.
              </li>
              <li>• User Authentication with Json Web Token.</li>
              <li>• One-on-one chatting and group chatting functionalities.</li>
              <li>• Search users and add/remove users from a chat group.</li>
            </ul>

            <strong>Compiler's Scanner and Parser using mC and flex:</strong>
            <ul>
              <li>
                • A class project to build Compiler’s Scanner and Parser using
                mC and flex.
              </li>
              <li>
                • Used regular expression to recognize tokens (reserved words,
                data type, comments, etc.).
              </li>
              <li>
                • Each token needs to be identified by scanner and passed to
                parser to be added to AST (Abstract Syntax Tree) for later
                phases.
              </li>
              <li>
                • Scanner and Parser print out the output from the input file.
              </li>
            </ul>

            <strong>Password Manager:</strong>
            <ul>
              <li>
                • Built a Password manager that lets users type in
                website/application, their username, password and store it in a
                file.
              </li>
              <li>
                • Used Python module tkinter to setup GUI and implement
                functionalities such as search, delete, generate random password
                and add data to a .json file.
              </li>
              <li>
                • Used tkinter widgets to setup buttons, entries and perform
                actions (search, add, delete, generate password) when users
                click on them.
              </li>
              <li>
                • Password Manager runs on local machine which is more secure
                compared to a Password Manager Extension.
              </li>
            </ul>

            <strong>Flash Card App:</strong>
            <ul>
              <li>
                • Built a Flash Card app to help with learning languages by
                having words and definition on two sides of the cards.{" "}
              </li>
              <li>
                • Created Flash Card GUI using Python module tkinter and
                populated words and definition from an input file.
              </li>
              <li>
                • Implemented timer mechanism so that every 3 seconds a new word
                is displayed on the screen. Users can either click tick button
                (if they remember the word) or cross button (if they don’t
                remember the word).
              </li>
              <li>
                • Flash Card app runs and displays a random word, then flips to
                the other side after 3 seconds. Users can click the tick and
                cross buttons to see how they progress. When users click the
                tick button, that word is removed and won’t appear again so that
                users can focus on learning unknown words.{" "}
              </li>
            </ul>

            <strong>To-Do List</strong>
            <ul>
              <li>
                • Built a To-do List web application to help users keep track of
                daily activities.
              </li>
              <li>
                • Created the web layout with HTML, CSS and Javascript
                components.
              </li>
              <li>
                • Setup server and backend components using Node.js, Express and
                MongoDB.
              </li>
              <li>
                • Users can run the web application and type in the activities
                that will be displayed on the to-do list. An activity can be
                marked as completed and deleted from the to-do list.
              </li>
            </ul>
            <div>
              <h4>TECHNICAL SKILLS:</h4>
              <div style={{ display: "list-item", margin: 0 }}>
                <text>
                  <strong>Languages:</strong>
                  <small>Python, C, Javascript, HTML, CSS</small>
                </text>
                <br></br>
                <text>
                  <strong>Frameworks/Libraries: </strong>
                  <small>Node.js, Express, MongoDB, React</small>
                </text>
                <br></br>
                <text>
                  <strong>OS: </strong>
                  <small>Microsoft, Linux</small>
                </text>
                <br></br>
                <text>
                  <strong>Tools/Platform: </strong>
                  <small>VSCode, PyCharm, Clion, Github</small>
                </text>
                {/* <text>
                  <strong>Languages: </strong>
                  Python, C, Javascript, HTML, CSS
                </text>
                <text>
                  <strong>Frameworks/Libraries: </strong>
                  Node.js, Express, MongoDB, React
                </text>
                <text>
                  <strong>OS: </strong>
                  Microsoft, Linux
                </text>
                <text>
                  <strong>Tool/Platform:</strong>
                  VSCode, PyCharm, Clion, Github
                </text> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyResume;
