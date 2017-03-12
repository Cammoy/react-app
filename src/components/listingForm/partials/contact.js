import React from 'react';

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const ContactDetails = ({required, email, fieldStyle}) => {
  return (
    <div>
      <Field
        style={fieldStyle}
        name="email"
        component={TextField}
        floatingLabelText="Email"
        validate={[ required, email ]}/>

      <Field
        style={fieldStyle}
        name="phone"
        component={TextField}
        floatingLabelText="Phone"/>

      <Field
        style={fieldStyle}
        name="fax"
        component={TextField}
        floatingLabelText="Fax"/>
    </div>
  )
}
export default ContactDetails;
