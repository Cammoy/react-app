
// Listings Reducer
//------------------------------------------------------------------------------
import moment from 'moment'

import {
  FETCH_DATA,
  FETCH_DATA_PENDING,
  FETCH_DATA_REJECTED
} from '../actions/types'

const defaultState = {
    pending:true,
    error:false,
    rejected:false,
    whatson: []
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

      // Events happening the the next 7 days include today
      //-----------------------------------------------------------------

      let whatson = [], eventEndDate,
          curWeek = moment().add(100, 'days').valueOf(),
          now     = moment().valueOf();

          action.payload.map( (item) => {
          eventEndDate = moment(item.eventEndDate, "YYYY/MM/DD").valueOf();
            if( eventEndDate && eventEndDate >= now && eventEndDate <= curWeek )
              {
                whatson.push(item._id);
            }
      })



      return { ...state={}, pending: false, data:action.payload, whatson  }
    }
    default: {}

  }
  return state;
}
