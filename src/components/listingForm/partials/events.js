import React from 'react';

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------
import { Field } from 'redux-form'
import {
  DatePicker,
  TimePicker,
  TextField,
} from 'redux-form-material-ui'


const EventFields = ({ required, fieldStyle }) => {

  return (
    <div>
      <Field
        textFieldStyle={fieldStyle}
        name="eventStartDate"
        component={DatePicker}
        format={null}
        floatingLabelText="Event Start Date"
        hintText="eventStartDate"
        validate={required} />
      <Field
        textFieldStyle={fieldStyle}
        name="eventStartTime"
        component={TimePicker}
        format={null}
        floatingLabelText="Event Start Time"
        hintText="Event Start Time"
        validate={required} />
      <Field
        textFieldStyle={fieldStyle}
        name="eventEndDate"
        component={DatePicker}
        format={null}
        floatingLabelText="Event End Date"
        validate={required} />
      <Field
        textFieldStyle={fieldStyle}
        name="eventEndTime"
        component={TimePicker}
        format={null}
        floatingLabelText="Event End Time"
        validate={required}/>
      <Field
        style={fieldStyle}
        name="promotions"
        component={TextField}
        floatingLabelText="Promotions"
        hintText="Describe promotions here"
        multiLine={true}
        rows={8} />
    </div>
  )
}
export default EventFields;
