import authReducer from './authReducer'
import inputReducer from './inputReducer'


import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        authReducer,
        inputReducer
    }
);