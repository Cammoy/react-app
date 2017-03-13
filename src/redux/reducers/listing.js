// import types constants
import { ADD_LISTING, LISTING_ERROR } from '../actions/types'

export default function reducer(state = false, action) {

  switch (action.type) {
    case ADD_LISTING: {
      return {...state, listed: true }
    }
    case LISTING_ERROR: {
      return {...state, error: action.payload }
    }
    default: {}
  }

  return state;
}
