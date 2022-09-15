import * as actionTypes from '../actions/types.actions';

const initialState = {
    toggleSidebar: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SIDEBAR:
            return {
                ...state,
                toggleSidebar: !state.toggleSidebar
            }
        default:
            return state;
    }
}