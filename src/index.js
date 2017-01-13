import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MapTracker from './components/Map/resources'
import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'


import App from './components/app';
import Resources from './components/Map/resources'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/map"/>
        <Route path = "/map" component ={MapTracker}/>
        </Route>
      </Router>
  </Provider>
  , document.querySelector('.StartApp'));
