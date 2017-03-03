// React Setup
//------------------------------------------------------------------------------
import localStore   from 'store'
import store from './redux/store'
import { Provider } from 'react-redux'
import {AUTH_USER}  from './redux/actions/types'
import React        from 'react'
import ReactDOM     from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App          from './App'
import Initial      from './components/initial/'
import Login        from './components/login/'
import Register     from './components/register/'
import Home         from './views/home/'
import Error        from './components/error/'

// Router authentication higher order component
//------------------------------------------------------------------------------
import reqAuth      from './components/auth/'
import './index.css'


// Check if the user signed in
//------------------------------------------------------------------------------

if(localStore.get('token')) {
 store.dispatch({type:AUTH_USER})
}

// Routes Setup
//------------------------------------------------------------------------------

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/initial"/>
          <Route path="/home" component={reqAuth(Home)}/>
          <Route path="/initial" component={Initial}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Route>
        <Route path="*" code={500} message="Did it work?" component={Error}/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
