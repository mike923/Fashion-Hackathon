import usersReducer from './usersReducer'


import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        usersReducer
    }
);