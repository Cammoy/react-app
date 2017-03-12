import React from 'react';

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import { TextField, SelectField } from 'redux-form-material-ui'

const GeneralInfo = ({categories, required, fieldStyle}) => {
  return (
    <div>
      <Field
      style={fieldStyle}
      maxHeight={280}
      name="category"
      component={SelectField}
      floatingLabelText="Category">
      {categories}
      </Field>

      <Field
      style={fieldStyle}
      name="name"
      component={TextField}
      floatingLabelText="Business or Event Name"
      validate={required}/>

      <Field
      style={fieldStyle}
      name="generalInfo"
      component={TextField}
      floatingLabelText="General Information"
      multiLine={true}
      rows={5}/>
    </div>
  )
}
export default GeneralInfo;
