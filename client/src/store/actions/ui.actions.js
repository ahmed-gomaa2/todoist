import {CLOSE_CREATE_PROJECT, OPEN_SIDEBAR, TOGGLE_CREATE_PROJECT} from "./types.actions";

export const toggleSidebar = () => {
    console.log('hello')
    return {
        type: OPEN_SIDEBAR
    }
}

export const toggleCreateProject = () => {
    console.log('HI');
    return {
        type: TOGGLE_CREATE_PROJECT
    }
}