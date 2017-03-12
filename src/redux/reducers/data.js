
// Listings Reducer
//------------------------------------------------------------------------------

import {
  FETCH_DATA,
  FETCH_DATA_PENDING,
  FETCH_DATA_REJECTED
} from '../actions/types'

const defaultState = {
    pending:true,
    error:false,
    rejected:false,
    auth:false
}

export default function reducer(state = defaultState, action) {

  switch (action.type) {

    case FETCH_DATA_PENDING: {
        return {...state={}, pending: true}
    }
    case FETCH_DATA_REJECTED: {
        return {...state={}, pending:false, rejected:true }
    }
    case FETCH_DATA: {
      return { ...state={}, pending: false, payload: action.payload }
    }
    default: {}

  }
  return state;
}
