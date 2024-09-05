/* eslint-disable jsx-a11y/img-redundant-alt */
// import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Body from './components/body';
import Career from './components/career';
import End from './components/ending';
import Profile from './components/profile';
import Projects from './components/project';
import Skill from './components/skill';

function App() {
  return (
    <div className="main">

      <Profile />
      <div className="body">
        <About />
        <Body />
        <Career />
        <Projects />
        <Skill />
        <End />
      </div>
    </div>

  );
}

export default App;
