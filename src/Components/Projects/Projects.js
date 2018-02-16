import React from 'react';
import './Projects.css';
import Project from '../Project/Project';


const Projects = (props) => {
  const projectInfo = [
    {
      title: 'Snap Ninja',
      description: 'Snap Ninja was built with the importance of peer collaboration in mind. Fostering an environment where students pull each other up is a challenge, especially when it\'s a group of strangers who are suddenly thrown together as often happens at coding bootcamps. Snap Ninja helps bridge that gap by making shoutouts accessible and easy to do.',
      features: 'Snap Ninja features a customized backend built in express and with OAuth via AuthRocket. The frontend is built using React/Redux/Router, data visualization via VictoryJS and styled with SCSS.',
      techStack: ['React', 'Redux', 'Router', 'VictoryJS', 'Express', 'PostgreSQL' ],
      link: "https://t-laird.com/snap-ninja",
      aspectRatioOfsetClass: 'snap'
    },
    {
      title: 'SWapiBox',
      description: 'SWapiBox is built using the Star Wars API and provides a means for the user to look through information pertaining to the Star Wars universe as well as select their favorites.',
      features: 'SWapiBox is a single page application built using React and React Router.',
      techStack: ['React', 'Router', 'ES7 ASync/Await'],
      link: 'https://t-laird.com/SWapiBox',
      aspectRatioOfsetClass: 'swapi'
    },
    {
      title: 'Game Time - Centipede',
      description: 'Centipede was built using HTML canvas and ES6 and is modeled off of the 1980 Atari, Inc game. Our version of Centipede was carefully constructed to preserve as much of the functionality and behavior of the original game as possible.',
      features: 'Centipede utilizes a 2d HTML canvas and is bundled with webpack.',
      techStack: ['HTML Canvas', 'ES6', 'Webpack'],
      link: 'https://t-laird.com/Centipede',
      aspectRatioOfsetClass: 'centipede'
    },
    {
      title: 'Headcount',
      description: 'Headcount was built using React and Sparklines as a way to visualize and organize school district data from around Colorado.',
      features: 'Headcount is built using React with data visualization via Sparklines',
      techStack: ['React', 'Sparklines'],
      link: 'https://t-laird.com/Headcount',
      aspectRatioOfsetClass: 'headcount'
    }

  ];

  return (
    <div className="Projects">
      <h1>Projects:</h1>
      <div className="quicklinks">
        <h2>Quick Links: </h2>
        <div className="quicklink"><a href="https://t-laird.com/snap-ninja" target="_blank" rel="noopener noreferrer">Snap Ninja<i className="icon-link-ext"></i></a></div>
        <div className="quicklink"><a href="https://t-laird.com/SWapiBox" target="_blank" rel="noopener noreferrer">SWapiBox<i className="icon-link-ext"></i></a></div>
        <div className="quicklink"><a href="https://t-laird.com/Centipede" target="_blank" rel="noopener noreferrer">Game Time<i className="icon-link-ext"></i></a></div>
        <div className="quicklink"><a href="https://t-laird.com/Headcount" target="_blank" rel="noopener noreferrer">Headcount<i className="icon-link-ext"></i></a></div>
      </div>
      {projectInfo.map( (project, index) => <Project key={`project${index}`} {...project} /> )}
    </div>
  );
};

export default Projects;