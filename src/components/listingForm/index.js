import { CATEGORIES, ADVANCE_BOOKING, PARKING } from '../../config'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import GoogleMapsLoader from 'google-maps'
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

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import './style.scss'

// Validation functions
const required  = value => value == null ? 'Required' : undefined
const email     = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
const filedStyle = {width:'100%', float:'left', marginRight:'2%'};

class ListingForm extends Component {

    constructor(props) {
      super(props);

      this.state = {
      finished: false,
      stepIndex: 0,
      };
    }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;
    const { pristine, submitting, submitVal } = this.props;

    return (
      <div style={{margin: '12px 0'}}>

        {stepIndex === 4 ?
          <RaisedButton
            label={submitVal}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
            type="submit"
            disabled={pristine || submitting}/>
          :
          <RaisedButton
            label='Next'
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
          />
        }

        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }


 // Create Select Items from specified dataSource passed
 //-----------------------------------------------------

  _selectItems = (items) => {

    return items.map( (item, i) => {
      return <MenuItem key={i} value={item} primaryText={item}/>;
    })
  }

  // Create Resuable counter
  //-----------------------------------------------------

  _counter = (stop, start = 18, increments = 1) => {
    let items = [];

    if( stop ) {
      stop += 1;
      for ( var i = start; i < stop; i += increments ) {
        items.push(<MenuItem key={i} value={i} primaryText={i}/>)
      }
      return items;

    } else {
      return <MenuItem value="na" primaryText="Not Applicable"/>
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const { handleSubmit, action, error } = this.props;

    return (
      <div className="listingForm">
        <form onSubmit={handleSubmit(action)}>

        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Business Name & Category</StepLabel>
            <StepContent>

              <Field
                style={filedStyle}
                maxHeight={280}
                name="category"
                component={SelectField}
                floatingLabelText="Category">
                  {this._selectItems(CATEGORIES)}
                </Field>

                <Field
                style={filedStyle}
                name="name"
                component={TextField}
                floatingLabelText="Business Name"
                validate={required}/>

                <Field
                  style={filedStyle}
                  name="generalInfo"
                  component={TextField}
                  floatingLabelText="General Information"
                  multiLine={true}
                  rows={5}/>


              {this.renderStepActions(0)}
            </StepContent>
          </Step>

          {/***  Address ***/}
          <Step>
            <StepLabel>Address</StepLabel>
            <StepContent>

              <Field
              style={filedStyle}
              name="addr_line1"
              component={TextField}
              floatingLabelText="Adrress Line 1"
              validate={required}/>

              <Field
              style={filedStyle}
              name="city"
              component={TextField}
              floatingLabelText="City"
              validate={required}/>

              <Field
              style={filedStyle}
              name="post_zip"
              component={TextField}
              floatingLabelText="Postal / Zip Code"/>

              {this.renderStepActions(2)}
            </StepContent>
          </Step>


          <Step>
            <StepLabel>Opening Times & Contact</StepLabel>
            <StepContent>

              <Field
                style={filedStyle}
                name="openingTimes"
                component={TextField}
                floatingLabelText="Opening Times"
                multiLine={true}
                rows={3}/>

             <Field
               style={filedStyle}
               name="email"
               component={TextField}
               floatingLabelText="Email"
               validate={[ required, email ]}/>

            <Field
              style={filedStyle}
              name="phone"
              component={TextField}
              floatingLabelText="Phone"/>

           <Field
             style={filedStyle}
             name="fax"
             component={TextField}
             floatingLabelText="Fax"/>

              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Social Media Links</StepLabel>
            <StepContent>

              <Field
                className="listingForm__left"
                style={filedStyle}
                name="facebook"
                 component={TextField}
                 floatingLabelText="Facebook Link"/>

               <Field
                 className="listingForm__left"
                 style={filedStyle}
                 name="twitter"
                  component={TextField}
                  floatingLabelText="Twitter Link"/>

                  {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Other Information</StepLabel>
            <StepContent>

              <Field
                style={filedStyle}
                name="advancedBooking"
                 maxHeight={280}
                 component={SelectField}
                 floatingLabelText="Advanced Booking?">
                 {this._selectItems(ADVANCE_BOOKING)}
               </Field>

               <Field
                 style={filedStyle}
                 name="ageRestriction"
                  maxHeight={280}
                  component={SelectField}
                  floatingLabelText="Min Age">
                  {this._counter(25,5)}
                </Field>

                <Field
                  style={filedStyle}
                  name="partySize"
                   maxHeight={280}
                   component={SelectField}
                   floatingLabelText="Party Size">
                   {this._counter(250,50, 10)}
                 </Field>

                <Field
                  style={filedStyle}
                  name="parking"
                   maxHeight={280}
                   component={SelectField}
                   floatingLabelText="Parking?"
                   validate={required}>
                   {this._selectItems(PARKING)}
                 </Field>

              {this.renderStepActions(5)}
            </StepContent>
          </Step>

        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>

        )}

        {error}

        </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    errorMessage: state.data.error
  }
}
const form = reduxForm({form: 'listingForm' })(ListingForm);
export default connect(mapStateToProps)(form)
