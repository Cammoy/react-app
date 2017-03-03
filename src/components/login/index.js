import React, {Component} from 'react'
import {Link} from 'react-router'
import { Field, reduxForm } from 'redux-form'
import {loginUser} from '../../redux/actions/'
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
