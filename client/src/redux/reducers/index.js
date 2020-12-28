import {combineReducers} from 'redux'
import auth from './authReducer'
import event from './eventReducer'
//import token from './tokenReducer'
//import users from './usersReducer'

export default combineReducers({
    auth,
    event
})