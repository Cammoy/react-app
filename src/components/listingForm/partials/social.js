import React from 'react'

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const SocialMediaFields = ({fieldStyle}) => {
  return (
    <div>
      <Field
        className="listingForm__left"
        style={fieldStyle}
        name="facebook"
        component={TextField}
        floatingLabelText="Facebook Link"/>

       <Field
        className="listingForm__left"
        style={fieldStyle}
        name="twitter"
        component={TextField}
        floatingLabelText="Twitter Link"/>
    </div>
    )
}

export default SocialMediaFields;
