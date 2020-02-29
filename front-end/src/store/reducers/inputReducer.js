import { HANDLECHANGE, LOAD_TECH_PACK } from '../actions/actionTypes';

const initialState = {
    username: '',
    password: '',
    avatar_url: 'https://www.jumpstarttech.com/files/2018/08/Network-Profile.png',
    tech_pack:{}
}

const inputReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case HANDLECHANGE:
            newState[action.payload.name] = action.payload.value
            break;
        case LOAD_TECH_PACK:
                newState.tech_pack = action.payload
                break;
        default:
            break;
    }

    return newState;
}

export default inputReducer;
