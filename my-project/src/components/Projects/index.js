import './index.css'

const Projects = () => (
  <div className="pro-container">
    <h1 className="project-heading">My Projects</h1>
    <ul className="grid-container">
      <li className="grid-item">
        <img
          src="https://www.linkpicture.com/q/Untitled_21.png"
          alt="money"
          className="project-image"
        />
        <p className="link-name">Books Hub</p>
        <p className="link-des">
          link: <a href="https://booksh.ccbp.tech/login">View Live</a>.
        </p>
      </li>
      <li className="grid-item">
        <img
          src="https://www.linkpicture.com/q/jobby.jpg"
          alt="money"
          className="project-image"
        />
        <p className="link-name">Jobby App</p>
        <p className="link-des">
          link: <a href="https://rohitjobby01.ccbp.tech/login">View Live</a>.
        </p>
      </li>
      <li className="grid-item">
        <img
          src="https://www.linkpicture.com/q/WhatsApp-Image-2023-07-25-at-12.47.06-PM.jpeg"
          alt="money"
          className="project-image"
        />
        <p className="link-name">Money Manager</p>
        <p className="link-des">
          link: <a href="https://moneymngr.ccbp.tech/ ">View Live</a>.
        </p>
      </li>
      <li className="grid-item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxxL8emsmfGfW_A8Vkn5ToQlVarHSDAFqqg&usqp=CAU"
          alt="wiki"
          className="project-image"
        />
        <p>Wikipedia</p>
        <p>
          link: <a href="https://webwikipedia01.ccbp.tech/">View Live</a>.
        </p>
      </li>
      <li className="grid-item">
        <img
          src="https://adniasolutions.com/wp-content/uploads/2018/05/To-Do-List-Excel-Template-01.png"
          alt="Todolist"
          className="project-image"
        />
        <p>Todo List</p>
        <p>
          link: <a href="https://webapptodo2.ccbp.tech/">View Live</a>.
        </p>
      </li>
      <li className="grid-item">
        <img
          src="https://www.linkpicture.com/q/zarla-our-kitchen-1x1-2400x2400-20211105-h3rkb8t4qvc74kx6bjpt.png"
          alt="restraunt"
          className="project-image"
        />
        <p>kitchenresto</p>
        <p>
          link: <a href="https://kitchenresto.ccbp.tech/ ">View Live</a>.
        </p>
      </li>
    </ul>
  </div>
)

export default Projects
