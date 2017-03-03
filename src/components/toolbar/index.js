// Feathers Setup
//------------------------------------------------------------------------------

const url = 'http://localhost:3030';
import io             from 'socket.io-client';
import feathers       from 'feathers/client';
import hooks          from 'feathers-hooks';
import socketio       from 'feathers-socketio/client';
import localstorage   from 'feathers-localstorage';
import authentication from 'feathers-authentication/client';
import localStore from 'store'

const socket = io(url);
const app = feathers()
  .configure(socketio(socket)) // you could use Primus or REST instead
  .configure(hooks())
  .configure(authentication());

import {UNAUTH_USER} from '../../redux/actions/types'
import React from 'react'
import './style.scss'

/**
* @name Toolbar
* @usage <Filter classes={} filter={function}/>
* @desc handles filtering & layout change
**/

import {browserHistory} from 'react-router'
import * as DATA from '../../redux/actions/'
import { connect } from 'react-redux'


const Toolbar = (props) => {

  const { classes, filterBy, layout } = props;

  const _logout = () => {
    app.logout().then( () => props.dispatch({type: UNAUTH_USER}) )
    localStore.remove('token')
    browserHistory.replace('/')
  }

  // Build Class Filter
  //----------------------------------------------------------

  const _filters = () => {

      let filters = [];

      if( classes.data ) {
         filters = classes.data.map( (item, i) => {
          return <li key={i+'filter'} className="toolbar__filterBy__item" onClick={filterBy.bind(item)}>{item}</li>;
        })
      }

      return (
        <ul className="toolbar__filterBy">
            <li className="toolbar__layout--heading">{classes.heading}</li>
              {filters}
        </ul>
      )
  }

  // Build Layout Modes
  //----------------------------------------------------------

  const _modes = () => {

    let modes = [];

      if( layout.modes.length ) {
        modes = layout.modes.map( (item, i) => {
          return <li key={i+'mode'} className="toolbar__layout__item" onClick={layout.callback.bind(this, item.name)}>
            <i className={'fa fa-'+item.icon+ ' toolbar__layout__item--icon'}> </i>
            {item.name}
          </li>
        })
      }

      return (
        <ul className="toolbar__layout">
          <li className="toolbar__layout--heading">{layout.heading}</li>
          {modes}
        </ul>
      )
  }


  // Render Component
  //----------------------------------------------------------

  return (
    <div className="toolbar">
      <a href="#" onClick={_logout}>Sign Out</a>
      {_filters()}
      {_modes()}
    </div>
  )

}

Toolbar.propTypes = {
  classes:  React.PropTypes.object,
  filterBy: React.PropTypes.func,
}

function mapStateToProps(state) {
  return {
    auth: state.authenticated
  }
}
export default connect(mapStateToProps)(Toolbar);
