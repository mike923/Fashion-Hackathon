import { RECEIVE_USERS, LOAD_USER, LOGIN_USER, LOGIN_OUT } from '../actions/actionTypes';

const initialState = {

    loggedInUser: {
        user: null,
        isUserLoggedIn: false
    },
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_USERS:
            stateCopy.users = action.payload
            break
        case LOAD_USER:
            stateCopy.user = action.payload
            break
        case LOGIN_USER:
            let user = action.payload

            user.name = user.username
            user.photoUrl = user.avatar_url
            user.role = 'Member'

            stateCopy.loggedUser = {
                user: action.payload,
                isUserLoggedIn: true
            }
            break
        case LOGIN_OUT:
            stateCopy.loggedUser = {
                user: action.payload,
                isUserLoggedIn: false
            }
            break
        default:
            break
    }
    return stateCopy;
};