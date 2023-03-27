import me from './Bikram.jpg';
import photo2 from './Photo2.jpg';
import linked from './linkedin-app.svg';
import github from './icons8-github.svg';
import resume from './resume.svg';
import ZTR from './ztr.png';
import TU from './logo-trackunit.png';
import mail from './svg.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header">
        <img src={me} className="webPhoto" alt="logo" />
        <p>Bikram Jit Singh</p>
        <a className="App-link" target="_blank" rel="noopener noreferrer" >Software Engineer </a>
        <div className='info'>
        <a target="_blank" href='https://github.com/bxsingh4'> <img src={github} className="git" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/bikram04/"><img src={linked} className="linked"/></a>
        <a target="_blank" href="https://drive.google.com/drive/folders/1PhB3V4GK7k-Y86N89H0wTncDbtdq7Uzb?usp=sharing"><img src={resume} className="resume"/></a>
        </div>
      
        <div className='work'>
          <h1>Work Experience</h1>
        </div>
          <div className='experience'>
          <div className='ztr'>
            <img src={ZTR} className='ztrLogo'/>
            <h2 className='jobTitle'>QA Engineering Intern</h2>
            <h3 class="workPeriod"> September 2021 - December 2021</h3>
            <p className='workDescription'> Tested various mobile and web applications used to analyze fleet data producted by ZTR telematics devices. Ensured all newly developed products, both hardware and software, 
            are tested to meet company quality standards. </p>
          </div>
          <div className='TU'>
            <img src={TU} className='tuLogo' />
            <h2 className='jobTitle'>QA Engineering Intern</h2>
            <h3 class="workPeriod"> January 2022 - August 2022</h3>
            <p className='workDescription'> Automated and tested  large scale 
            client applications used to produce and analyze fleet telematics data  for various construction rental companies. Scope of automation included
            UI and API components of several web based applications.</p>
          </div>
        </div>

        <div className='aboutMe'>
          <h1>About Me</h1>
        </div>
        <div className='aboutMeInfo'>
        <img src={photo2} className="myPhoto" alt="logo" />
          <p className='aboutBikram'>Hi! I'm Bikram, a fourth year Software Engineering student at the University of Western Ontario. An Aspiring full-stack web developer with a passion for utilizing technology to create innovative and user-friendly websites. 
          With a background in Software Engineering, I bring a unique perspective to web development projects. Constantly seeking new challenges and opportunities to grow, I am eager to contribute my skills and knowledge to any team looking to push the boundaries.
          I am also interested in the field of machine learning with experience in using Python to build and train models to tackle complex real-world problems.</p>
          <h5 className='reach'> Feel free to reach out!</h5>
          <a target="_blank" > <img src={mail} className="mail" /></a>
          <p className='email'> singhbikramjit767@gmail.com</p>
          
        </div>
        
        <br></br>

      </header>
      
    </div>
  );
}

//document.body.style.backgroundColor = "#000d1a";

export default App;
