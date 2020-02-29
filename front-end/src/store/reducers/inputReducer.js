import { HANDLECHANGE, SET_LABELS } from '../actions/actionTypes';

const initialState = {
    username: '',
    password: '',
    avatar_url: 'https://www.jumpstarttech.com/files/2018/08/Network-Profile.png',
    labels: {},
}

const inputReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case HANDLECHANGE:
            newState[action.payload.name] = action.payload.value
            break;
        case SET_LABELS:
            newState.labels = action.payload
            break;
        default:
            break;
    }

    return newState;
}

export default inputReducer;
