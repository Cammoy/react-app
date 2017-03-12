import { ACCOUNT_TYPES } from '../../config'
import React from 'react'
import {Link} from 'react-router'
import { Field, reduxForm } from 'redux-form'
import {registerUser} from '../../redux/actions/'
import {connect} from 'react-redux'
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
  RadioButtonGroup,
  TextField,
} from 'redux-form-material-ui'
import './style.scss'


// Validation functions
//-----------------------------------------------------------------------------

const required  = value => value == null ? 'Required' : undefined
const email     = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
const filedStyle = {width:'100%', float:'left', marginRight:'2%'};



const Register= (props) => {

  const { handleSubmit, pristine, submitting } = props

  const _registerUser = (fields) => {
    props.dispatch(registerUser(fields))
  }

  const _registerError = () => {

    if(props.errorMessage) {
      return <div>{props.errorMessage}</div>
    }
  }

  // Create Select Items from specified dataSource passed
  //-----------------------------------------------------

   const _selectItems = (items) => {

     return items.map( (item, i) => {
       return <RadioButton  key={i} value={item.name} label={item.text}/>
     })
   }

  return(
    <div className="reg">
      <form onSubmit={handleSubmit(_registerUser)}>

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

         <div
          className="reg__field">
          <label className="reg__field--radio_label">
            Register as a Business or an Organiser?
          </label>
           <Field name="accountType" component={RadioButtonGroup}>
              {_selectItems(ACCOUNT_TYPES)}
            </Field>
         </div>



        {_registerError()}

        <RaisedButton label="Register" primary={true} type="submit"
          disabled={pristine || submitting} />

      </form>

      <div className="reg__message reg__message--action">
        Already have an account?
        <Link className="reg__message--action__btn" to='/login'>Login</Link>
      </div>

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
