import {combineReducers} from 'redux';

import data from './data'
import auth from './auth'
import reg  from './reg'
import listing  from './listing'

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  data,
  auth,
  reg,
  listing,
  form: formReducer
});
