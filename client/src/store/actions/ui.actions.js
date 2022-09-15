import {OPEN_SIDEBAR} from "./types.actions";

export const toggleSidebar = () => {
    console.log('hello')
    return {
        type: OPEN_SIDEBAR
    }
}