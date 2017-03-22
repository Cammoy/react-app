import { SETTINGS } from './config'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {browserHistory} from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.scss'


const App = (props) => {

  const _checkNav = () => {
    // authenticated users should NOT be able to visit these links
    if( props.auth && SETTINGS.SETUP_LINKS.includes(location.pathname.substr(1)) ) {
      browserHistory.push('/home');
    }
  }

  _checkNav();

  const _header = () => {

    if( !props.auth ) {
      return (
        <div className="app-header-container">
          <header className="app-header">
            <div className="app-intro"></div>
            <h2>{SETTINGS.APP.TITLE}</h2>
          </header>
        </div>
      )
    }
  }

  return (
    <MuiThemeProvider>
      <div className="app">
        {_header}
        <div className="app__content-wrap">
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  );

}

function mapStateToProps (state) {
  return {
    auth: state.auth.authenticated
  }
}
export default connect( mapStateToProps)(App);
