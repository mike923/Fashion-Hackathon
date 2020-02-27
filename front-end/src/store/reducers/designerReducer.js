import { LOAD_MANUFACTURERS } from '../actions/actionTypes';

const initialState = {
    manufacturers:[]
}

const inputReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case LOAD_MANUFACTURERS:
            newState.manufacturers = action.payload
            break;
        default:
            break;
    }

    return newState;
}

export default inputReducer;
