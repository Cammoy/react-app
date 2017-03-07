
// APP CONFIGURATION FILE
//--------------------------------------------------------------

       let  SERVER          = "http://localhost:3030"
export const MOCK_DATA      = "mock/data.json"
export const SERVER_LOCAL   = SERVER + "/auth/local"
export const SERVER_REG     = SERVER + "/users"
export const GOOGLE         = SERVER + "/auth/google"


export const ERROR_CODES = [
  {
    code: 400,
    message: 'Please ensure your email is incorrect format'
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
/* export const CATEGORIES = [
  'Bar', 'Restaurant', 'Cafe', 'Hotel', 'Event', 'Attractions Sights',
  'Physical activity/ exercise','Restaurant', 'Shopping Centre', 'Spa',
  'Taxi','Outdoor activity', 'Nature parks', 'Nail Salons',
  'Nail and Beauty Salon','Museum','Hair and Beauty Salon', 'Clubs',
  'Art Gallery'
] */


export const CATEGORIES = [
  'Bar', 'Restaurant', 'Cafe', 'Event', 'Attractions Sights',
]
