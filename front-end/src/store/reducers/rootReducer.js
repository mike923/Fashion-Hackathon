import authReducer from './authReducer'
import inputReducer from './inputReducer'
import designerReducer from './designerReducer'


import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        authReducer,
        inputReducer,
        designerReducer
    }
);