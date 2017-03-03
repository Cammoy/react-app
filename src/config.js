export const SERVER_LOCAL   = "http://localhost:3030/auth/local"
export const SERVER_REG     = "http://localhost:3030/users"
export const MOCK_DATA      = "mock/data.json"

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
