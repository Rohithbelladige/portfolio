import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

import './index.css'

const Home = () => (
  <div className="main-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="avatar"
        className="image"
      />
    </div>
    <h1 className="name-home">ROHITH BELLADIGE</h1>
    <h3 className="role">Mern Full Stack Developer</h3>
    <p className="description">
      Enthusiastic and motivated self-learning about information technology.
      Focused on web development. Now I am looking for more experience in my
      field.
    </p>
    <div className="">
      <a href="https://www.linkedin.com/in/rohith-belladige-/">
        <AiFillLinkedin className="icon" />
      </a>
      <a href="https://github.com/Rohithbelladige">
        <AiFillGithub className="icon" />
      </a>
    </div>
  </div>
)

export default Home
