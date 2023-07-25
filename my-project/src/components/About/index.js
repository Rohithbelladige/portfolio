import {
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'
import './index.css'

const About = () => (
  <div>
    <div className="details-container">
      <div>
        <img
          src="https://www.linkpicture.com/q/WhatsApp-Image-2023-07-25-at-4.41.07-PM.jpeg"
          alt="Rohith"
          className="my-photo"
        />
      </div>

      <p className="name">
        Hello, Im <span className="my-name">Belladige Rohith</span>, a
        passionate Full Stack Developer with a focus on the MERN stack. My goal
        is to create innovative and user-friendly applications that solve
        real-world problems
      </p>
    </div>
    <div className="bottom-container">
      <div className="skills-container">
        <h3>Skills</h3>
        <hr />
        <p>
          <span className="skill-heading">Front-end: </span>HTML, CSS,
          JavaScript, React.js, Bootstrap <br />
          <span className="skill-heading">Back-end: </span> Node.js, Express.js,
          REST APIs <br />
          <span className="skill-heading">Tools:</span> Git, npm
        </p>
      </div>

      <div className=" contact">
        <h3 className="contact-text">Contact Me</h3>
        <div>
          <hr />
        </div>
        <ul className="list-container">
          <li className="items">
            <a href="mailto: rohithb2143@gmail.com" className="items">
              <AiFillMail />
              <p>rohithb2143@gmail.com</p>
            </a>
          </li>

          <li className="items">
            <AiFillEnvironment />
            <p>Hyderabad , Telangana</p>
          </li>

          <li className="items">
            <a href="tel:+918099772143" className="items">
              <AiFillPhone />
              <p>+91 8099772143</p>
            </a>
          </li>

          <li className="items">
            <a href="https://www.linkedin.com/in/rohith-belladige-/">
              <AiFillLinkedin className="icon" />
            </a>
          </li>
          <li className="items">
            <a href="https://github.com/Rohithbelladige">
              <AiFillGithub className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default About
