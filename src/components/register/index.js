import React, {Component} from 'react'
import {Link} from 'react-router'
import { Field, reduxForm } from 'redux-form'
import {registerUser} from '../../redux/actions/'
import {connect} from 'react-redux'
import './style.scss'


const Register= (props) => {

  const { handleSubmit, pristine, reset, submitting } = props

  const _registerUser = (fields) => {
    props.dispatch(registerUser(fields))
  }
  const _registerError = () => {
    console.log('props',props);
    if(props.errorMessage) {
      return <div>{props.errorMessage}</div>
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit(_registerUser)}>
        <div>
         <label htmlFor="email">Email</label>
         <Field name="email" component="input" type="email"/>
        </div>
        <div>
         <label htmlFor="password">Password</label>
         <Field name="password" component="input" type="password"/>
        </div>
          {_registerError()}
        <button type="submit" disabled={pristine || submitting}>Register</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </form>

      <h1>Already have an account?</h1>
      <Link className="initial__btn" to='/login'>Login</Link>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    errorMessage: state.reg.error
  }
}
const form = reduxForm({form: 'registerForm'})(Register);
export default connect(mapStateToProps)(form)
