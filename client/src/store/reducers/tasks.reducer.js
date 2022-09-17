import * as actionTypes from '../actions/types.actions';

const initialState = {
    currentPage: '',
    projects: [],
    currentProject: {},
    tasks: [],
    settingCurrentProject: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_SETTING_CURRENT_PROJECT:
            return {
                ...state,
                settingCurrentProject: true
            }
        case actionTypes.END_SETTING_CURRENT_PROJECT:
            return {
                ...state,
                settingCurrentProject: false
            }
        case actionTypes.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects
            }
        case actionTypes.SET_CURRENT_PROJECT_SUCCESS:
            console.log(action.id);
            const currentProject = state.projects.filter(p => p.id == action.id);

            return {
                ...state,
                currentProject: currentProject[0],
                currentPage: '/projects/' + action.id
            }
        case actionTypes.GET_PROJECT_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                currentProject: {},
            }
        case actionTypes.GET_ALL_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                currentProject: {},
                currentPage: 'today'
            }
        case actionTypes.GET_PROJECT_TASKS_FAIL:
            return {
                ...state
            }
        case actionTypes.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                projects: [action.project, ...state.projects]
            }
        default:
            return state;
    }
}