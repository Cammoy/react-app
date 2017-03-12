import React from 'react';

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const AddressFields = ({required, fieldStyle}) => {
return(
  <div>
    <Field
    style={fieldStyle}
    name="addr_line1"
    component={TextField}
    floatingLabelText="Adrress Line 1"
    validate={required}/>

    <Field
    style={fieldStyle}
    name="city"
    component={TextField}
    floatingLabelText="City"
    validate={required}/>

    <Field
    style={fieldStyle}
    name="post_zip"
    component={TextField}
    floatingLabelText="Postal / Zip Code"/>
  </div>
  )
}
export default AddressFields;
