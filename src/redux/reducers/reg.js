// import types constants
import {REG_USER, REG_ERROR} from '../actions/types'

export default function reducer(state = false, action) {

  switch (action.type) {
    case REG_USER: {
      return {...state, registration: true }
    }
    case REG_ERROR: {
      return {...state, error: action.payload }
    }
  }

  return state;
}
