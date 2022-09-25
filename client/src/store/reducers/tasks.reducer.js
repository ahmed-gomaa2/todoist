import * as actionTypes from '../actions/types.actions';

const initialState = {
    currentPage: '',
    projects: [],
    currentProject: null,
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
            }
        case actionTypes.GET_ALL_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                currentProject: null,
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
        case actionTypes.CREATE_NEW_TASK_SUCCESS:
            return {
                ...state,
                tasks: [action.newTask, ...state.tasks]
            }
        case actionTypes.DELETE_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id != action.taskId)
            }
        case actionTypes.DELETE_PROJECT_SUCCESS:
            console.log(action.projectId);
            const otherProject = state.projects.filter(p => p.id != action.projectId);
            return {
                ...state,
                projects: otherProject
            }
        case actionTypes.EDIT_TASK_SUCCESS:
            const editedTask = state.tasks.filter(t => t.id == action.taskData.id)[0];
            editedTask.title = action.taskData.title;
            editedTask.text = action.taskData.text;
            const otherTasks = state.tasks.filter(t => t.id != action.taskData.id);
            otherTasks.splice(state.tasks.indexOf(editedTask), 0, editedTask);
            return {
                ...state,
                tasks: [...otherTasks]
            }
        default:
            return state;
    }
}