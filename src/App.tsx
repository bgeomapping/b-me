import React, { Component } from 'react';
import './App.scss';

import Header from './core/Header';
import {Login, PrivateRoute} from './core/Auth';
import About from './core/About';

import EventList from './events/lists/EventList';
// import SubmitEvent from './events/SubmitEvent'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AuthProvider} from './core/Auth';

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faPlus, faSpinner  } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

library.add( faCheckSquare, faPlus, faSpinner, faSquare);


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="App">
            <Header />
            <main>
              <Route exact path="/" component={About} />
              <PrivateRoute exact path="/upcoming" component={EventList} />
              {/* <PrivateRoute exact path="/submit" component={SubmitEvent} /> */}
              <Route exact path="/login" component={Login} />
            </main>
            <footer></footer>
          </div>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
