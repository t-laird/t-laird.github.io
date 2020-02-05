import React, { Component } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Thomas Laird</h1>
        <h4>I'm a software developer from Denver Colorado. Check out some of my <Link to="/projects">previous projects</Link> or <a href="mailto:lairdthomasr@gmail.com">drop me a line</a>.</h4>
        <div className="linkContainer">
          <Link to="/projects">Check Out My Projects</Link>
          <a href={process.env.PUBLIC_URL + '/tl-resume.pdf'} target="_blank" rel="noopener noreferrer">Look at my Resume<i className="icon-link-ext"></i></a>
          <a href="https://www.github.com/t-laird" target="_blank" rel="noopener noreferrer">Visit my Github<i className="icon-link-ext"></i></a>
        </div>
      </div>
    );
  }
}

export default Home;