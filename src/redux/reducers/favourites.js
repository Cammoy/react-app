import { FAVE_TOGGLE, FAVE_ERROR } from '../actions/types'

export default function reducer(state = {}, action) {

  switch (action.type) {
    case FAVE_TOGGLE: {
      return {...state, payload: action.payload}
    }
    case FAVE_ERROR: {
      return {...state, payload: action.payload }
    }
    default: {}
  }

  return state;
}
