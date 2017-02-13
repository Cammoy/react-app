// Bikes Reducer
import localStore from 'store'

const defaultState = { pending:true, error:false, rejected:false, filterBy:false, filters: [], layout:false }

export default function reducer(state = defaultState, action) {

  switch (action.type) {

    case "FETCH_BIKES_PENDING": {
        return {...state={}, pending: true}
    }
    case "FETCH_BIKES_REJECTED": {
        return {...state={}, rejected:true, pending:false, error:action.payload.status }
    }
    case "FETCH_BIKES_FULFILLED": {

      // Check if fitereing is in process

      const filter    = action.payload.filterBy;
      const filtered  = [];

      // If filter is passed then perform filter
      //-------------------------------------------------------

      if(filter) {
        action.payload.data.filter( (item, i) => {
          if( item.class.includes(filter) ) filtered.push(item);
        })
        if( filtered.length ) action.payload.data = filtered;
      }

      // Set filter in local storage
      //-------------------------------------------------------
      localStore.set('filterBy', action.payload.filterBy);

      return {
        ...state={},
        pending: false,
        filters: action.payload.filters,
        filterBy: action.payload.filterBy,
        bikes: action.payload.data
      }
    }

    case "SET_LAYOUT": {

      // Set layout in local storage
      //-------------------------------------------------------
      localStore.set('layout', action.payload);

      return {...state={}, layout: action.payload}
    }

  }
  return state;
}
