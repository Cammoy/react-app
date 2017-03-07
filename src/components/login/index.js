// Feathers Setup
//------------------------------------------------------------------------------

const url = 'http://localhost:3030';
import io             from 'socket.io-client';
import feathers       from 'feathers/client';
import hooks          from 'feathers-hooks';
import socketio       from 'feathers-socketio/client';
import authentication from 'feathers-authentication/client';
import localStore from 'store'

const socket = io(url);
const app = feathers()
  .configure(socketio(socket)) // you could use Primus or REST instead
  .configure(hooks())
  .configure(authentication());


// React Setup
//------------------------------------------------------------------------------

import {GOOGLE} from '../../config'
import React, {Component} from 'react'
import {Link} from 'react-router'
import { Field, reduxForm } from 'redux-form'
import {loginUser, google} from '../../redux/actions/'
import {connect} from 'react-redux'
import './style.scss'

const Login = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props

  const _loginUser = (fields) => {
    props.dispatch(loginUser(fields))
  }
  const _loginError = () => {
    console.log('props',props);
    if(props.errorMessage) {
      return <div>{props.errorMessage}</div>
    }
  }

  const _google = () => {
    props.dispatch(google())
  }

  return(
    <div>
      <form onSubmit={handleSubmit(_loginUser)}>
        <div>
         <label htmlFor="email">Email</label>
         <Field name="email" component="input" type="email"/>
        </div>
        <div>
         <label htmlFor="password">Password</label>
         <Field name="password" component="input" type="password"/>
        </div>
          {_loginError()}
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </form>

        <ul>
          <li><a href="http://localhost:3030/auth/google" >Sign In with Google</a></li>
          <li><a href="http://localhost:3030/auth/github" >Sign In with Github</a></li>
        </ul>
        <h1>No Account yet?</h1>
        <Link className="initial__btn" to='/register'>Register</Link>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}
const form = reduxForm({form: 'loginForm'})(Login);
export default connect(mapStateToProps)(form)
