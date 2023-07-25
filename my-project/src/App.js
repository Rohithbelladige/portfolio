import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
