import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SUCCESS,
  LOADING
} from '../actionTypes'
const initialState = {
  authenticated: false,
  loading: false,
  error: null,
  errorCode: null,
  user: null
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        errorCode: null,
        error: false
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: false,
        errorCode: null
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        authenticated: false,
        errorCode: action.errorCode
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case SUCCESS:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
