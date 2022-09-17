import axios from 'axios';
import {
    END_SETTING_CURRENT_PROJECT,
    GET_ALL_TASKS_FAIL,
    GET_ALL_TASKS_SUCCESS,
    GET_PROJECT_TASKS_FAIL,
    GET_PROJECT_TASKS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_SUCCESS,
    SET_CURRENT_PROJECT_FAIL,
    SET_CURRENT_PROJECT_SUCCESS,
    START_SETTING_CURRENT_PROJECT
} from "./types.actions";

export const getProjects = () => async dispatch => {
    try{
        const projects = await axios.get('/server/projects');
        dispatch({
            type: GET_PROJECTS_SUCCESS,
            projects: projects.data
        });
    }catch (e) {
        dispatch({
            type: GET_PROJECTS_FAIL,
            error: e.response.data.error
        })
    }
}

const startSettingCurrentProject = () => {
    return {
        type: START_SETTING_CURRENT_PROJECT
    }
}

const endSettingCurrentProject = () => {
    return {
        type: END_SETTING_CURRENT_PROJECT
    }
}

export const setCurrentProject = (project_id) => async dispatch => {
    try{
        // dispatch(startSettingCurrentProject());
        dispatch({
            type: SET_CURRENT_PROJECT_SUCCESS,
            id: project_id
        });
        // const projectTasks = await axios.get('/server/projects/' + project_id);
        // dispatch({
        //     type: SET_CURRENT_PROJECT_SUCCESS,
        //     todos: projectTasks.data
        // });
        await dispatch(getProjectTasks(project_id));
        // dispatch(endSettingCurrentProject())
    }catch (e) {
        dispatch({
            type: SET_CURRENT_PROJECT_FAIL,
            error: e.response.data.error
        });
    }
}

export const getProjectTasks = project_id => async dispatch => {
    try{
        const tasks = await axios.get('/server/projects/' + project_id);
        dispatch({
            type: GET_PROJECT_TASKS_SUCCESS,
            tasks: tasks.data
        });
    }catch (e) {
        dispatch({
            type: GET_PROJECT_TASKS_FAIL,
            error: e.response.data.error
        })
    }
}

export const getAllTasks = () => async dispatch => {
    try{
        const tasks = await axios.get('/server/all-tasks');

        dispatch({
            type: GET_ALL_TASKS_SUCCESS,
            tasks: tasks.data
        })
    }catch (e) {
        dispatch({
            type: GET_ALL_TASKS_FAIL,
            error: e.response.data.error
        })
    }
}








