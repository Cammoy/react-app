import {CATEGORIES} from '../../config'
import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

// Validation functions
const required  = value => value == null ? 'Required' : undefined
const email     = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined


const ListingForm = (props) => {

  const {
    handleSubmit,
    pristine,
    submitting,
    action,
    error,
    submitVal
  } = props

  return(
    <div>
      <form onSubmit={handleSubmit(action)}>
        <div>
          <Field
            name="category"
            component={AutoComplete}
            floatingLabelText="Category"
            openOnFocus={true}
            filter={MUIAutoComplete.fuzzyFilter}
            dataSource={CATEGORIES}
            />
        </div>
      <div>
       <Field name="name"
          component={TextField}
          hintText="Name"
          floatingLabelText="Name"
          validate={required}/>
      </div>

      <div>
        <Field name="email"
          component={TextField}
          floatingLabelText="Email"
          validate={[ required, email ]}/>
      </div>

      <div>
        <Field name="facebook"
           component={TextField}
           hintText="Facebook Link"
           floatingLabelText="Facebook"/>
       </div>

       <div>
         <Field name="twitter"
            component={TextField}
            hintText="Twitter Link"
            floatingLabelText="Twitter"/>
        </div>

        <div>
            <Field
              name="desc"
              component={TextField}
              floatingLabelText="Listing Descriptions"
              multiLine={true}
              rows={5}/>
        </div>

          {error}
        <button type="submit" disabled={pristine || submitting}>{submitVal}</button>
      </form>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    errorMessage: state.data.error
  }
}
const form = reduxForm({form: 'listingForm' })(ListingForm);
export default connect(mapStateToProps)(form)
