import { SET_USER, SET_LOADING, SET_PREV_URL, LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: null,
    isUserLoggedIn: false,
    loadingUser: true,
    prevURL: false,
}

const authReducer = (state = initialState, {type, payload}) => {
    const newState = { ...state }

    switch (type) {
        case SET_USER:
            newState.user = payload
            newState.isUserLoggedIn = true
            newState.loadingUser = false
            break;
        case SET_PREV_URL:
            newState.prevURL = payload
            break;
        case SET_LOADING:
            newState.loadingUser = !newState.loadingUser
            break;
        case LOGOUT:
            newState.user = null
            newState.isUserLoggedIn = false
            break;
        default:
            break;
    }

    return newState;
}

export default authReducer;
