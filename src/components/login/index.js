// React Setup
//------------------------------------------------------------------------------

import React from 'react'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../../redux/actions/'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'
import './style.scss'


// Validation functions
//-----------------------------------------------------------------------------

const required  = value => value == null ? 'Required' : undefined
const email     = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
const filedStyle = {width:'100%', float:'left', marginRight:'2%'};

const Login = (props) => {

  const { handleSubmit, pristine, submitting } = props

  const _loginError = () => {
    if(props.errorMessage) {
      return <div>{props.errorMessage}</div>
    }
  }

  return(
    <div className="reg">
      <form onSubmit={handleSubmit( props.onLoginClick) }>

         <Field
          className="reg__field"
         style={filedStyle}
         name="email"
         type="email"
         component={TextField}
         floatingLabelText="Email"
         validate={[ required, email ]}/>

         <Field
          className="reg__field"
         style={filedStyle}
         name="password"
         type="password"
         component={TextField}
         floatingLabelText="Password"
         validate={required}/>

        {_loginError()}

        <RaisedButton label="Login" primary={true} type="submit"
          disabled={pristine || submitting} />
      </form>

      <div className="reg__message reg__message--action">
        No Account yet?
        <Link className="reg__message--action__btn" to='/register'>Register</Link>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}
const form = reduxForm({form: 'loginForm'})(Login);
export default connect(mapStateToProps,

  // MapDispatchToProps
  { onLoginClick:loginUser }
)(form)
