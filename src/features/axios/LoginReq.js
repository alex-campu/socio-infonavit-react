import Axios from './configAxios'
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN,
  LOGOUT_SUCCESS,
  SERVER_ERROR
} from '../actionTypes'

export function logIn (user) {
  return async (dispatch) => {
    dispatch(logInAttempt())
    Axios.post('/login', {
      user: {
        email: user.email,
        password: user.password
      }
    })
      .then((res) => {
        window.localStorage.setItem('access', res.headers.authorization.substr(7))
        dispatch(logInSuccess())
        console.log(res)
      })
      .catch((error) => {
        error.response.status === 401 ? dispatch(logInError()) : dispatch(serverError())
      })
  }
}

export function alreadyLogIn () {
  return async (dispatch) => {
    try {
      dispatch(logInSuccess())
    } catch (err) {
      dispatch(logInError(err))
    }
  }
};

export function LoggedOut () {
  return async (dispatch) => {
    try {
      dispatch(logOutSuccess())
      window.localStorage.clear()
    } catch (err) {
      dispatch(logInError(err))
    }
  }
};

export const logInSuccess = () => ({
  type: LOGIN_SUCCESS
})
export const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS
})
export const logInAttempt = () => ({
  type: LOGIN
})
export const logInError = (errorCode, auth) => ({
  error: true,
  errorCode: errorCode,
  authenticated: auth,
  type: LOGIN_ERROR
})
export const serverError = (error, errorCode, auth) => ({
  error: error,
  errorCode: errorCode,
  authenticated: auth,
  type: SERVER_ERROR
})
