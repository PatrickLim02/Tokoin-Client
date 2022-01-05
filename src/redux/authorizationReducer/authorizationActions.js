import { SET_USER,SET_USER_LOGOUT} from './authorizationReducerTypes';

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  }
}
export const setUserLogout = (payload = {}) => {
  return {
    type: SET_USER_LOGOUT,
    payload,
  }
}