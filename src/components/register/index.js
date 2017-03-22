import { ACCOUNT_TYPES } from '../../config'
import React from 'react'
import {Link} from 'react-router'
import { Field, reduxForm } from 'redux-form'
import {registerUser} from '../../redux/actions/'
import { connect } from 'react-redux'
import styled from 'styled-components';



// Validation functions
//-----------------------------------------------------------------------------

const validate = values => {

  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }

  return errors
}


const warn = values => {

  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings

}


const InputField = styled(Field)`
  margin:0 0 30px;
  label {
    color: #777;
    display: block;
    padding:5px 0;
    color:#22;
    clear: both;
  }
  input {
    outline: none;
    border:0;
    border-bottom:1px solid #888;
    width:100%;
    max-width: 250px;
    font-size: 15px;
    padding:5px;
    height: 30px;
  }
`;


// Input fields - Hoisted to prevent re-render and loosing focus
//---------------------------------------------------------------------------

const renderField = ({ className, input, label, type, meta: { touched, error, warning } }) => (
 <div className={className}>
   <label>{label}</label>
     <input {...input} placeholder="" type={type}/>
     {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
 </div>
)


const Register= (props) => {

  const { handleSubmit, pristine, submitting, reset } = props

  const _registerUser = (fields) => {
    props.dispatch(registerUser(fields))
  }

  const _registerError = () => {

    if(props.errorMessage) {
    }
      return <div>{props.errorMessage}</div>
  }

  // Create radio group from specified dataSource
  //----------------------------------------------------------------------------

   const _radioButtons = (items, name) => {
     return items.map( (item, i) => {
       return (
         <label key={i}>
           <Field name={name} component="input" type="radio" value={item.name}/>{item.text}
         </label>
        )
     })
   }

  return(
    <form onSubmit={handleSubmit(_registerUser)}>
      <InputField name="username" type="text" component={renderField} label="Username" />
      <InputField name="email" type="email" component={renderField} label="Email"/>
      <InputField name="age" type="number" component={renderField} label="Age"/>

      {/* Account Type */}
      <div>
        Register as a Business or an Organiser?
        {_radioButtons(ACCOUNT_TYPES, 'accountType')}
      </div>

      {/* Submit & Reset  */}
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>

      {/* Exting User CTA  */}
      <div>
        Already have an account?
        <Link className="reg__message--action__btn" to='/login'>Login</Link>
      </div>

    </form>
  )

}

function mapStateToProps(state) {
  return {
    errorMessage: state.reg.error
  }
}
const form = reduxForm({form: 'registerForm'})(Register);
export default connect(mapStateToProps)(form)
