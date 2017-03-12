import React from 'react'

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import { SelectField } from 'redux-form-material-ui'

const OtherInfoFields = (props) => {

  const { booking, minAge, partySize, parking, required, fieldStyle } = props;

  return (
    <div>
      <Field
        style={fieldStyle}
        name="advancedBooking"
         maxHeight={280}
         component={SelectField}
         floatingLabelText="Advanced Booking?">
         {booking}
       </Field>
        <Field
          style={fieldStyle}
          name="ageRestriction"
          maxHeight={280}
          component={SelectField}
          floatingLabelText="Min Age">
          {minAge}
        </Field>
        <Field
          style={fieldStyle}
          name="partySize"
           maxHeight={280}
           component={SelectField}
           floatingLabelText="Party Size">
           {partySize}
         </Field>
        <Field
          style={fieldStyle}
          name="parking"
           maxHeight={280}
           component={SelectField}
           floatingLabelText="Parking?"
           validate={required}>
           {parking}
        </Field>
    </div>
    )
}

export default OtherInfoFields;
