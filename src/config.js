
// APP CONFIGURATION FILE
//--------------------------------------------------------------

       let    API             = "http://0.0.0.0:3000/api"
export const  MOCK_DATA       = "../mock/data.json"

// Users
export const  API_USERS       = API + "/Users"
export const  API_USER_LOGIN  = API_USERS + "/login"
export const  API_USER_REG    = API_USERS + "/register"
export const  API_USER_LOGOUT = API_USERS + "/logout"
export const  API_USER_RESET  = API_USERS + "/reset"
export const  API_USER_UPDATE = API_USERS + "/update"

// Listings
//---------------------------------------------------

export const  API_LISTING     = API + "/Events"

// Custom Error Codes - ( Need to organise error code by actions )
//----------------------------------------------------------------

export const ERROR_CODES = [
  {
    code: 400,
    message: 'Please ensure your email is in the correct format'
  },
  {
    code: 401,
    message: 'Please check your username and password and try again'
  },
  {
    code: 403,
    message: 'Resource forbidden'
  },
  {
    code: 404,
    message: 'Resource not found'
  },
  {
    code: 409,
    message: 'Duplicate'
  },
  {
    code: 500,
    message: 'Unfortunately there was a server error, we have been notified.'
  }
];

// APP DICTIONARY CONFIGURATION
//--------------------------------------------------------------

export const DICTIONARY = {
  ADD_LISTING: 'Add Listing'
}


// APP LISTING CATEGORIES
//--------------------------------------------------------------

export const CATEGORIES = [
  'Bar', 'Restaurant', 'Cafe', 'Hotel', 'Events', 'Attractions Sights',
  'Physical activity / exercise', 'Shopping Centre', 'Spa',
  'Taxi','Outdoor activity', 'Nature parks', 'Nail Salons',
  'Nail and Beauty Salon','Museum','Hair and Beauty Salon', 'Clubs',
  'Art Gallery'
]

// APP ADVANCE_BOOKING
//--------------------------------------------------------------

export const ADVANCE_BOOKING = ['Required', 'Not Required']

// APP PARKING
//--------------------------------------------------------------

export const PARKING = [ 'Public', 'Private', 'No Parking' ]


// APP ACCOUNT TYPES
//--------------------------------------------------------------

export const ACCOUNT_TYPES = [
  {
    name: 'business',
    text: 'Business'
  },
  {
    name: 'organiser',
    text: 'Organiser'
  },
  {
    name: 'user',
    text: 'User'
  }
]

// APP ADVANCE_BOOKING
//--------------------------------------------------------------
export const SETTINGS = {
  APP: {
    TITLE: 'The Travel App'
  },
  EXPIRE: 30 // All listing expire after x days
}
