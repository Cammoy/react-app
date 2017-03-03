import {combineReducers} from 'redux';

import data from './data';
import auth from './auth';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  data,
  auth,
  form: formReducer
});
