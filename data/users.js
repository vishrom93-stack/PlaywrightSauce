const VALID_PASSWORD = 'secret_sauce'
const VALID_USERNAME = 'standard_user'

export const VALID_USERS = {
  standardUser: {username: VALID_USERNAME, password: VALID_PASSWORD},
  problemUser: {username: 'problem_user', password: VALID_PASSWORD},
  performanceGlitchUser: {
    username: 'performance_glitch_user',
    password: VALID_PASSWORD,
  },
  errorUser: {username: 'error_user', password: VALID_PASSWORD},
  visualUser: {username: 'visual_user', password: VALID_PASSWORD},
}
export const LOCKED_OUT_USER = {
  username: 'locked_out_user',
  password: VALID_PASSWORD,
  message: 'Epic sadface: Sorry, this user has been locked out.',
}

export const CHECKOUT_USER = {
  firstName: 'Romi',
  lastName: 'Tester',
  postalCode: '12345',
}

export const INVALID_USERS = {
  wrongPassword: {
    username: VALID_USERNAME,
    password: 'wrong_password',
    message:
      'Epic sadface: Username and password do not match any user in this service',
  },
  wrongUsername: {
    username: 'wrong_username',
    password: VALID_PASSWORD,
    message:
      'Epic sadface: Username and password do not match any user in this service',
  },
  emptyFields: {
    username: '',
    password: '',
    message: 'Epic sadface: Username is required',
  },
}
