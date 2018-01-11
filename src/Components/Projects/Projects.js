import React from 'react';
import './Projects.css';
import snapNinjaSS from './ProjectScreenshots/snap-ninja.png';

const Projects = (props) => {
  console.log('rendering projects');

  return (
    <div className="Projects">
      <h1>Projects:</h1>
      <div className="projectDiv">
        <h2>Snap Ninja</h2>
        <img
          src={snapNinjaSS}
          alt="snap-ninja screenshot" />
        <h3>Description: </h3>
        <p className="description">Snap Ninja was built with the importance of peer collaboration in mind. Fostering an environment where students pull each other up is a challenge, especially when it's a group of strangers who are suddenly thrown together as often happens at coding bootcamps. Snap Ninja helps bridge that gap by making shoutouts accessible and easy to do.</p>
        <p className="features">Snap Ninja features a customized backend built in express and with OAuth via AuthRocket. The frontend is built using React/Redux/Router, data visualization via VictoryJS and styled with SCSS.</p>
        <ul className="techStack">          
          <li>React</li>
          <li>Redux</li>
          <li>Router</li>
          <li>VictoryJS</li>
          <li>Express</li>
          <li>PostgreSQL</li>        
        </ul>
        <a 
          href="https://t-laird.com/snap-ninja" 
          target="_blank" 
          rel="noopener noreferrer">Live Version</a>
      </div>
    </div>
  );
}

export default Projects;