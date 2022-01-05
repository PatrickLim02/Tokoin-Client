import {SET_USER,SET_USER_LOGOUT} from './authorizationReducerTypes'

const initialState = {
    user : {},
}

const authorizationReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SET_USER: return {
            ...state,
            user: {
              ...state.user,
              ...action.payload,
            }
          }
          case SET_USER_LOGOUT: return {
            ...state,
            user: {}
          }
        default : return state;
    }
}

export default authorizationReducer;