// Import Config and Action Types
//------------------------------------------------------------------------------

import {
  ERROR_CODES,
  API_USER_LOGIN,
  API_USER_REG,
  API_USER_RESET,
  API_USER_UPDATE,
  API_USER_LOGOUT,
  MOCK_DATA,
  API_LISTING
} from '../../config'

// UTILITIES
//------------------------------------------------------------------------------

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  REG_USER,
  REG_ERROR,
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  ADD_LISTING,
  LISTING_ERROR,
  FAVE_TOGGLE
} from './types'


// UTILITIES
//------------------------------------------------------------------------------

import localStore from 'store'
import axios from 'axios'
import { browserHistory } from 'react-router'

// Default global axios headers
const AUTH_TOKEN = localStore.get('token')
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
//axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';


// LISTINGS ACTION CREATOR
//-------------------------------------------------------

export function fetchListings() {

  return (dispatch) => {

    axios.get(API_LISTING)
    .then( (res) => {
      dispatch({
          type:FETCH_DATA,
          payload: res.data
      })

    }).catch( (err) => {
        dispatch({type:FETCH_DATA_REJECTED})
    })
  }
}


// LOGIN ACTION CREATOR
//-------------------------------------------------------

export function loginUser(user) {

 return (dispatch) => {

   axios.post(API_USER_LOGIN, {
     email: user.email,
     password: user.password
   })
   .then( (response) => {

     dispatch({type:AUTH_USER})

     // Set auth in local storage ( might need to change field depending on response for choosen API )
     //----------------------------------------------------------------------------------------------
     localStore.set('token', response.data.id );

     // Redirect to home
     //-------------------------------------------------------
     browserHistory.replace('/home')

   })
   .catch( (error) => {

     dispatch({type:UNAUTH_USER})
     localStore.remove('token')

      ERROR_CODES.forEach( (item)=> {
        if(error.response.status === item.code) {
           dispatch({
             type:AUTH_ERROR,
             payload: item.message
           })
         }
      })

   });
 }
}



// REGISTER ACTION CREATOR
//-------------------------------------------------------

export function registerUser(user) {

 return (dispatch) => {

   axios.post(API_USER_REG, {
     email: user.email,
     password: user.password
   })
   .then( (response) => {

     dispatch({type:REG_USER})

     // Redirect to home
     //-------------------------------------------------------
     browserHistory.replace('/login')

   })
   .catch( (error) => {

     dispatch({type:REG_ERROR, payload:false})

      ERROR_CODES.forEach( (item)=> {
        if(error.response.status === item.code) {
           dispatch({
             type:REG_ERROR,
             payload: item.message
           })
         }
      })

   });
 }
}


// ADD LISTING ACTION CREATOR
//-------------------------------------------------------


export function addListing(listing) {
  console.log('Listing', listing);

 return (dispatch) => {
   axios.post(API_LISTING, listing )
   .then( (response) => {

     dispatch({type:ADD_LISTING, payload:true})

     // Redirect to home
     //-------------------------------------------------------
     browserHistory.replace('/home')

   })
   .catch( (error) => {
     console.log( 'ERROR MESSAGE: ',error.response )

      ERROR_CODES.forEach( (item)=> {
        if(error.response.status === item.code) {

           dispatch({
             type:LISTING_ERROR,
             payload: item.message
           })
         }
      })

   });
 }
}

// Favouties Toggle
//--------------------------------------

export function faveToggle(item) {
  return {
      type: FAVE_TOGGLE,
      payload: item
  }
}
