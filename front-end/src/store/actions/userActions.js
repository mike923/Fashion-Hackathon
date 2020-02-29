import { RECEIVE_USERS, LOAD_USER, LOGIN_USER, LOGOUT,LOAD_MANUFACTURERS, LOAD_TECH_PACK, SET_LABELS } from './actionTypes';


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

export const setLabels = (payload) => {
    return {
        type: SET_LABELS,
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

export const loadTechPack = (payload) =>{
    return{
        type: LOAD_TECH_PACK,
        payload
    }
}