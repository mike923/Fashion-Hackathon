import { combineReducers } from 'redux'
import inputReducer from './inputReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    inputReducer,
    authReducer,
})

export default rootReducer;

