import { SETTINGS } from './config'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {browserHistory} from 'react-router'
//import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.scss'


class App extends Component {

  componentWillMount() {
    this._checkNav();
  }
  componentDidUpdate() {
    this._checkNav();
  }

  _checkNav = () => {

    const { pathname } = this.props.children.props.location;

    // authenticated users should NOT be able to visit these links
    if( this.props.auth && SETTINGS.SETUP_LINKS.includes(pathname.substr(1)) ) {
      browserHistory.push('/home');
    }
  }

  _header = () => {

    if( !this.props.auth ) {
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

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          {this._header()}
          <div className="app__content-wrap">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth.authenticated
  }
}
export default connect( mapStateToProps)(App);
