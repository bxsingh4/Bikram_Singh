import me from './Bikram.jpg';
import linked from './linkedin-app.svg';
import github from './icons8-github.svg';
import resume from './resume.svg';
import ZTR from './ztr.png';
import TU from './logo-trackunit.png'
import at from './at_sign.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p>
           Bikram Jit Singh
        </p>
        <a
          className="App-link"
          
          target="_blank"
          rel="noopener noreferrer"
        >
           Software Engineer 
        </a>
        <div className='info'>
        <a target="_blank" href='https://github.com/bxsingh4'> <img src={github} className="git" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/bikram04/"><img src={linked} className="linked"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/bikram04/"><img src={resume} className="resume"/></a>
        </div>
        
      
      </header>
      
    </div>
  );
}

//document.body.style.backgroundColor = "#000d1a";

export default App;
