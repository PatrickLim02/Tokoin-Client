import { combineReducers } from 'redux'
import generalReducer from './generalReducer/generalReducer'
import authorizationReducer from './authorizationReducer/authorizationReducer'

const rootReducer = combineReducers({
  generalReducer: generalReducer,
  authorizationReducer: authorizationReducer,
})

export default rootReducer

