/***
  Custom Dynamic Stepper Component
  will publish on npm when few more features and tests are added
***/

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton  from 'material-ui/FlatButton'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'

class HotStepper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0,
    };
  }

  /* Dynamilcally create steps based based on given array of objects StepLabel
     and compomemts containing components components
  */

  _stepper = (steps) => {
    return steps.map( (item, i) => {
      return(
        <Step key={i}>
          <StepLabel>{item.label}</StepLabel>
          <StepContent>
            {item.component}
            {this.renderStepActions(i)}
          </StepContent>
        </Step>
      )
    })
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
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

    return (
      <div style={{margin: '12px 0'}}>

        { stepIndex === this.props.steps.length -1 ?
          <RaisedButton
            label='Finished'
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
          />
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
    )
  }

  render() {

    const { stepIndex } = this.state;

    return(
        <Stepper activeStep={stepIndex} orientation="vertical">
          {this._stepper(this.props.steps)}
        </Stepper>
    )
  }
}

export default HotStepper;
