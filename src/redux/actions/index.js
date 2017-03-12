// Import Config and Action Types
//------------------------------------------------------------------------------

import {
  ERROR_CODES,
  SERVER_LOCAL,
  SERVER_REG,
  MOCK_DATA,
  SERVER_LISTING
} from '../../config'

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  REG_USER,
  REG_ERROR,
  FETCH_DATA,
  FETCH_DATA_REJECTED,
  ADD_LISTING,
  LISTING_ERROR
} from './types'


// Feathers Setup
//------------------------------------------------------------------------------

const url = 'http://localhost:3030';
import io             from 'socket.io-client';
import feathers       from 'feathers/client';
import hooks          from 'feathers-hooks';
import socketio       from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import localStore     from 'store'

const socket = io(url);
const app = feathers()
  .configure(socketio(socket)) // you could use Primus or REST instead
  .configure(hooks())
  .configure(authentication());


import axios from 'axios'
import {browserHistory} from 'react-router'
const token = localStore.get('token');


// LISTINGS ACTION CREATOR
//-------------------------------------------------------

export function fetchListings(filter) {

  return (dispatch) => {

    axios.get(MOCK_DATA)
    .then( (res) => {

      dispatch({
          type:FETCH_DATA,
          payload: res.data.items
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

   axios.post(SERVER_LOCAL, {
     email: user.email,
     password: user.password
   })
   .then( (response) => {

     dispatch({type:AUTH_USER})

     // Set auth in local storage
     //-------------------------------------------------------
     localStore.set('token', response.data.token );

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

   axios.post(SERVER_REG, {
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

  let config = {
  headers: { Authorization: token }
  };

 return (dispatch) => {
   axios.post(SERVER_LISTING, listing, config )
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


// INSERT LISTING ACTION CREATOR
//-------------------------------------------------------

export function insertListing(listing) {

    return (dispatch) => {

      // Get the listing service
      const listingsService = app.service('listings');

    // Create a new listing from submitted form input
    listingsService.create(listing, {token: localStore.get('token')} ).then(() => {

      dispatch({type:ADD_LISTING, payload:true})

      // Redirect to home
      browserHistory.replace('/home');

    }).catch( (error) => {

      dispatch({
        type:LISTING_ERROR,
        payload: error
      })

    })
  }
}
