import axios from 'axios';

// Fetch Bikes
//--------------------------------------

export function fetchBikes(filter) {

  return function(dispatch) {

    const filters = [];

    axios.get('https://jujhar.com/bikes.json')
    .then( (res) => {

      /* Create filters based on avalible content
       i.e you can never filter by an item that does not exist */

      res.data.items.forEach( (item) => {
        item.class.forEach( (i) => {
          if(!filters.includes(i)) filters.push(i);
        });
      })

      dispatch({
          type:"FETCH_BIKES_FULFILLED",
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
