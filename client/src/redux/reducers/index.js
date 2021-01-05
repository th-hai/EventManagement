import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import category from './categoryReducer'
import speaker from './speakerReducer'


export default combineReducers({
    auth,
    token,
    speaker,
    category
})