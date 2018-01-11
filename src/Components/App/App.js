import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Switch, Route } from 'react-router';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
