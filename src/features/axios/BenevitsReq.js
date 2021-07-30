import Axios from './configAxios'
import {
  LOADING,
  SUCCESS
} from '../actionTypes'
import { logInError, serverError } from './LoginReq'

export const loading = () => ({
  type: LOADING
})

export const success = () => ({
  type: SUCCESS
})
