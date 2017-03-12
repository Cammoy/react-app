// import types constants
import { ADD_LISTING, LISTING_ERROR } from '../actions/types'

export default function reducer(state = false, action) {

  switch (action.type) {
    case ADD_LISTING: {
      return {...state, listed: true }
    }
    case LISTING_ERROR: {
      console.log('in store', action.payload)
      return {...state, error: action.payload }
    }
    default: {}
  }

  return state;
}
