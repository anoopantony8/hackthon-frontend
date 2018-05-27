import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Home} from './app/home';
import {Signup} from './app/signup';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/signUp" component={Signup}/>
    <Route path="/home" component={Home}/>
  </Router>,
  document.getElementById('root')
);
