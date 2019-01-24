import { combineReducers } from 'redux'
import message from './message'
import thread from './thread'
import user from './user'
import login from './login'

export default combineReducers({
    message,
    thread,
    user,
    login
})
