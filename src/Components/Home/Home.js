import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Hi, I'm Thomas!</h1>
      <h4>I'm a software developer with a passion for building things that people love to use. Please check out some of my  <Link to="/projects">previous projects</Link> or <a href="mailto:lairdthomasr@gmail.com">drop me a line</a> if you have something that needs more hands to be built!</h4>
      <div className="linkContainer">
        <Link to="/projects">Check Out My Projects</Link>
        <a href="https://www.turing.io/sites/default/files/resumes/ThomasLaird-Resume.pdf" target="_blank" rel="noopener noreferrer">Look at my Resume<i className="icon-link-ext"></i></a>
        <a href="https://www.github.com/t-laird" target="_blank" rel="noopener noreferrer">Visit my Github<i className="icon-link-ext"></i></a>
      </div>
    </div>
  );
};

export default Home;