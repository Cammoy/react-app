// React Setup
//------------------------------------------------------------------------------
import { SETTINGS } from './config'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import React from 'react'
import Store from './redux/store'
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ActionLogin from 'material-ui/svg-icons/social/person-outline';
import ActionRegister from 'material-ui/svg-icons/navigation/arrow-forward';
import FontIcon from 'material-ui/FontIcon';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg'
import './App.scss'

const App = ({children, auth}) => {

    let header,
        path = children.props.location.pathname;

    const _header = () => {
      header  =
        <div className="app-header-container">
          <header className="app-header">
            <div className="app-intro"></div>
            <h2>{SETTINGS.APP.TITLE}</h2>

          </header>
        </div>

      if( !auth  && path !== '/initial' ||  (path === '/register' || path === '/login' ) ) {
        return header;
      }
    }


      return (
        <MuiThemeProvider>
          <div className="app">
            {_header()}
            <div className="app__content-wrap">
              {children}
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
