import React from 'react';

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const OpeningTimes = ({fieldStyle}) => {
  return(
    <Field
      style={fieldStyle}
      name="openingTimes"
      component={TextField}
      floatingLabelText="Opening Times"
      multiLine={true}
      rows={3} />
  )
}
export default OpeningTimes;
