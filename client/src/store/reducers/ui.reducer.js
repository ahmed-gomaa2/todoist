import * as actionTypes from '../actions/types.actions';

const initialState = {
    toggleSidebar: false,
    toggleCreateProjectModel:false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SIDEBAR:
            return {
                ...state,
                toggleSidebar: !state.toggleSidebar
            }
        case actionTypes.TOGGLE_CREATE_PROJECT:
            return {
                ...state,
                toggleCreateProjectModel: !state.toggleCreateProjectModel
            }
        default:
            return state;
    }
}