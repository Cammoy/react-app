import {ERROR_CODES, SERVER, MOCK_DATA} from '../../config'
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_DATA, SET_LAYOUT} from './types'
import localStore from 'store'
import axios from 'axios'
import {browserHistory} from 'react-router'




// DATA ACTIONS
//-------------------------------------------------------

export function fetchBikes(filter) {

  return function(dispatch) {

    const filters = [];

    axios.get(MOCK_DATA)
    .then( (res) => {

      /* Create filters based on avalible content
       i.e you can never filter by an item that does not exist */

      res.data.items.forEach( (item) => {
        item.class.forEach( (i) => {
          if(!filters.includes(i)) filters.push(i);
        });
      })

      dispatch({
          type:"FETCH_BIKES",
          payload:{
            data:res.data.items,
            filterBy:filter,
            filters: filters
          }
      })

    }).catch( (err) => {

        // If there is an error display friendly message
        dispatch({type:"FETCH_BIKES_REJECTED", payload:err.response})
    })
  }
}

export function setLayout(mode) {
 return {
   type: 'SET_LAYOUT',
   payload: mode
 }
}











// USER ACTIONS
//-------------------------------------------------------

export function loginUser(user) {
  console.log('user', user);

 return function(dispatch) {
   axios.post(SERVER, {
     email: user.email,
     password: user.password
   })
   .then( (response) => {

     dispatch({type:AUTH_USER})

     // Set auth in local storage
     //-------------------------------------------------------
     localStore.set('token', response.data.token )

     // Redirect to home
     //-------------------------------------------------------
     browserHistory.push('/home')

   })
   .catch( (error) => {

     dispatch({type:UNAUTH_USER, payload:false})

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
