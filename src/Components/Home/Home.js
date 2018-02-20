import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Looking for another member for your team?</h1>
      <h4>I'm a developer looking for an opportunity where I can contribute meaningfully to an already awesome product or service!</h4>
      <div className="linkContainer">
        <Link to="/projects">Check Out My Projects</Link>
        <a href="https://www.turing.io/sites/default/files/resumes/ThomasLaird-Resume.pdf" target="_blank" rel="noopener noreferrer">Look at my Resume<i className="icon-link-ext"></i></a>
        <a href="https://www.github.com/t-laird" target="_blank" rel="noopener noreferrer">Visit my Github<i className="icon-link-ext"></i></a>
      </div>
    </div>
  );
};

export default Home;