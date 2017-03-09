
<Step>
  <StepLabel>Event Date & Time</StepLabel>
  <StepContent>

    <Field
      textFieldStyle={filedStyle}
      name="eventStartDate"
      component={DatePicker}
      format={null}
      floatingLabelText="Event Start Date"
      hintText="eventStartDate"
      validate={required}/>

    <Field
      textFieldStyle={filedStyle}
      name="eventStartTime"
      component={TimePicker}
      format={null}
      floatingLabelText="Event Start Time"
      hintText="Event Start Time"
      validate={required}/>

    <Field
      textFieldStyle={filedStyle}
      name="eventEndDate"
      component={DatePicker}
      format={null}
      floatingLabelText="Event End Date"
      validate={required}/>

    <Field
      textFieldStyle={filedStyle}
      name="eventEndTime"
      component={TimePicker}
      format={null}
      floatingLabelText="Event End Time"
      validate={required}/>

      <Field name="promotions"
         component={TextField}
         floatingLabelText="Promotions"
         hintText="Describe promotions here"
         multiLine={true}
         rows={8}/>

       <div>
         <Field name="ageRestriction"
            maxHeight={280}
            component={SelectField}
            floatingLabelText="Min Age">
            {_counter(30,18)}
          </Field>
       </div>

    {this.renderStepActions(1)}
  </StepContent>
</Step>
