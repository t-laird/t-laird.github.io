import React from 'react';
import './Blogs.scss';

const Blogs = (props) => {
  return (
    <div className="Blogs">
      <h1><a 
        rel="noopener noreferrer" 
        href="https://medium.com/@thomaslaird/diving-in-to-open-source-d2f5ecd20210" 
        target="_blank">Diving in to Open Source <i className="icon-link-ext"></i></a></h1>
      <h1><a 
        rel="noopener noreferrer" 
        href="https://medium.com/@thomaslaird/multiple-react-router-app-deployments-on-github-pages-rafrex-spa-f8f9de04dacf" 
        target="_blank">Multiple React/Router App Deployments on Github Pages — Rafrex SPA <i className="icon-link-ext"></i></a></h1>
    </div>
  );
};

export default Blogs;