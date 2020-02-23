import { RECEIVE_USERS, LOAD_USER, LOGIN_USER, LOGIN_OUT } from './actionTypes';

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

export const logOut = (payload) => {
    return {
        type: LOGIN_OUT,
        payload
    }
}
