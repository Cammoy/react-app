import { CATEGORIES, ADVANCE_BOOKING, PARKING } from '../../config'
import React from 'react'
import { connect } from 'react-redux'

// REDUX FORM AND MATERIAL UI IMPORTS
//------------------------------------------------------------------------------

import { reduxForm } from 'redux-form'
import MenuItem  from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

// IMPORT PARTIALS
//------------------------------------------------------------------------------
import Event          from './partials/events'
import Address        from './partials/address'
import General        from './partials/general'
import OpeningTimes   from './partials/openingTimes'
import Other          from './partials/otherInfo'
import Contact        from './partials/contact'
import Social         from './partials/social'

import HotStepper from '../stepper/'
import './style.scss'

const ListingForm = (props) => {

  const { handleSubmit, pristine, submitting, action } = props;


  // Validation functions
  //------------------------------------------------------------------------------

  const required    = value => value == null ? 'Required' : undefined
  const email       = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
  const fieldStyle  = {width:'100%', float:'left', marginRight:'2%'};

 // Create Select Items from specified dataSource passed
 //-----------------------------------------------------


  const _selectItems = (items) => {

    return items.map( (item, i) => {
      return <MenuItem key={i} value={item} primaryText={item}/>;
    })
  }

  // Create Resuable counter
  //-----------------------------------------------------

  const _counter = (stop, start = 18, increments = 1) => {
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

  const _dynamicSteps = () => {
    return [
      {
        label: 'General',
        component: <General categories={_selectItems(CATEGORIES)}
          required={required}
          fieldStyle={fieldStyle}/>
      },
      {
        label: 'Event Details',
        component: <Event required={required} fieldStyle={fieldStyle}/>
      },

      {
        label: 'Address',
        component: <Address required={required} fieldStyle={fieldStyle}/>
      },
      {
        label: 'Contact',
        component: <Contact required={required} email={email} fieldStyle={fieldStyle}/>
      },
      {
        label: 'Social Links',
        component: <Social required={required} fieldStyle={fieldStyle}/>
      },
      {
        label: 'Opening Times',
        component: <OpeningTimes required={required} fieldStyle={fieldStyle}/>
      },
      {
        label: 'Additional Details',
        component: <Other
          booking={_selectItems(ADVANCE_BOOKING)}
          minAge={_counter(30,18)}
          partySize={_counter(500, 0, 10)}
          parking={_selectItems(PARKING)}
          required={required}
          fieldStyle={fieldStyle}/>
      }

    ]
  }

  const _addListing = (fields) => {
    props.dispatch(action(fields))
  }

  return (
      <form onSubmit={handleSubmit(_addListing)}>
        <HotStepper steps={_dynamicSteps()}/>
        <RaisedButton label="Register" primary={true} type="submit"
          disabled={pristine || submitting} />
      </form>
  );
}


// Decorate with connect to read form values
// const selector = formValueSelector('listingForm');
// category: selector(state, 'category')


function mapStateToProps(state) {
  return {
    //errorMessage: state.data.error,
  }
}
const form = reduxForm({form: 'listingForm' })(ListingForm);
export default connect(mapStateToProps)(form)
