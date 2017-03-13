
import {DICTIONARY} from '../config'
import React        from 'react'
import { addListing } from '../redux/actions/'
import Form         from '../components/listingForm/'

const AddListing = (props) => {

  return(
    <Form
      action={addListing}
      submitVal={DICTIONARY.ADD_LISTING}
    />
  )
}
export default AddListing;
