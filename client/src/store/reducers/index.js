import {combineReducers} from "redux";

const initialState = {
    msg: 'hello from the redux store!'
}

const initialReducer = (state=initialState) => {
    return state;
}

export default combineReducers({
    s: initialReducer
});