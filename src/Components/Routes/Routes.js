import React from 'react';
import { Switch, Route } from 'react-router';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Routes.css';


const Routes = (props) => {
  return (
    <main>
      <TransitionGroup className="switch-routes">
        <CSSTransition 
          key={props.location.key} 
          classNames="fade" 
          timeout={350}>
          <div className="switch-wrapper">
            <Switch 
              location={props.location}>
              <Route path="/projects" component={Projects} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
};

export default Routes;