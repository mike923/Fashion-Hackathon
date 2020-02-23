import { HANDLECHANGE } from '../actions/actionTypes';

const initialState = {
    username: '',
    password: '',
    avatar_url: 'https://www.jumpstarttech.com/files/2018/08/Network-Profile.png',
}

const inputReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case HANDLECHANGE:
            newState[action.payload.name] = action.payload.value
            break;
        default:
            break;
    }

    return newState;
}

export default inputReducer;
