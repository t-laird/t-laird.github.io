import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
    <header>
      <h1>
        <span>Thomas Laird</span>
      </h1>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          <li><a href="https://github.com/t-laird" target="_blank" rel="noopener noreferrer">GitHub<i className="icon-link-ext"></i></a></li>
          <li><a href="https://www.linkedin.com/in/thomasrlaird/" target="_blank" rel="noopener noreferrer">LinkedIn<i className="icon-link-ext"></i></a></li>
          <li><a href={process.env.PUBLIC_URL + '/tl-resume.pdf'} target="_blank" rel="noopener noreferrer">Resume<i className="icon-link-ext"></i></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;