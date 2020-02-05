import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Routes from '../Routes/Routes';
import { withRouter, Route } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route component={Routes} />
      </div>
    );
  }
}

export default withRouter(App);
