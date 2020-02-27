import { RECEIVE_USERS, LOAD_USER, LOGIN_USER, LOGOUT,LOAD_MANUFACTURERS } from './actionTypes';

export const fetchUsers = (payload) => {
    return {
        type: RECEIVE_USERS,
        payload
    };
};

export const loadUser = (payload) => {
    return {
        type: LOAD_USER,
        payload
    };
};

export const setUser = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const loadManufacturers =(payload)=>{
    return{
        type:LOAD_MANUFACTURERS,
        payload
    }
}