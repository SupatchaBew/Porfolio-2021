import logo from './logo.svg';
import './App.css';
import Navbar from './components/pages/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/home'
import Footer from './components/pages/Footer/footer'
import Project from './components/pages/ProjectPage/project';
import AllProjects from './components/pages/ProjectPage/allProjects';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" exact component={Project} />
          <Route path="/projects" exact component={AllProjects} />
        </Switch>
        <Footer copyRightText="© 2020 Supatcha r." />
      </Router>
    </div>
  );
}

export default App;
