import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import App from './App'
import Home from './views/home/'
import Error from './components/error/'
import './index.css'

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home"/>
        <Route path="/home" component={Home}/>
      </Route>
      <Route path="*" code={500} message="Did it work?" component={Error}/>
    </Router>,
  document.getElementById('root')
);
