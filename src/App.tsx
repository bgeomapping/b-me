import React, { Component } from 'react';
import './App.scss';

import Header from './core/Header';
import {PrivateRoute} from './core/Auth';
import Login from './core/Login';
import Home from './core/Home';

import EventList from './events/lists/EventList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AuthProvider} from './core/Auth';


import { ThemeProvider } from '@material-ui/styles';

import theme from './theme/theme';
import OrgRoute from './org/OrgRoute';
import { OrgProvider } from './org/OrgContext';


class App extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
        <OrgProvider>
          <div className="App">
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/org/*" component={OrgRoute} />
              <PrivateRoute exact path="/upcoming" component={EventList} />
              <Route exact path="/login" component={Login} />
            </main>
            <footer></footer>
          </div>
        </OrgProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
    );
  }
}

export default App;
