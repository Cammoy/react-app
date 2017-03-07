
import {DICTIONARY} from '../config'
import React        from 'react'
import {addListing} from '../redux/actions/'
import Form         from '../components/listingForm/'
import {connect}    from 'react-redux'


const DataAdd = (props) => {

  const _action = (fields) => {
    props.dispatch(addListing(fields))
  }
  const _dataError = () => {
    if(props.errorMessage) {
      return <div>{props.errorMessage}</div>
    }
  }

  return(
    <Form
      action={_action}
      error={_dataError}
      submitVal={DICTIONARY.ADD_LISTING}
    />
  )
}

function mapStateToProps() {
  return {

  }
}
export default connect(mapStateToProps)(DataAdd)
