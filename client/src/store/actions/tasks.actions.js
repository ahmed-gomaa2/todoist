import axios from 'axios';
import {
    CREATE_NEW_TASK_FAIL,
    CREATE_NEW_TASK_SUCCESS,
    CREATE_PROJECT_FAIL,
    CREATE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAIL,
    DELETE_PROJECT_SUCCESS,
    DELETE_TASK_FAIL,
    DELETE_TASK_SUCCESS, EDIT_TASK_FAIL, EDIT_TASK_SUCCESS,
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

export const createProject = (projectData, navigate) => async dispatch => {
    try {
        const project = await axios.post('/server/create-project', projectData);
        dispatch({
            type: CREATE_PROJECT_SUCCESS,
            project: project.data.projectData
        });

        await dispatch(setCurrentProject(project.data.projectData.id));
        navigate('/dashboard/projects/' + project.data.projectData.id);
    }catch (e) {
        dispatch({
            typ: CREATE_PROJECT_FAIL,
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

export const createNewTask = taskData => async dispatch => {
    try{
        const newTask = await axios.post('/server/create-task', taskData);
        dispatch({
            type: CREATE_NEW_TASK_SUCCESS,
            newTask: newTask.data.todoData
        });
    }catch (e) {
        dispatch({
            type: CREATE_NEW_TASK_FAIL,
            error: e.response.data.error
        })
    }
}

export const deleteTask = taskId => async dispatch => {
    try{
        const task_id = await axios.delete('/server/delete-task/' + taskId);

        dispatch({
            type: DELETE_TASK_SUCCESS,
            taskId
        });
    }catch (e) {
        dispatch({
            type: DELETE_TASK_FAIL,
            error: e.response.data.error
        })
    }
}

export const deleteProject = project_id => async dispatch => {
    try {
        const projectId = await axios.delete('/server/delete-project/' + project_id);
        dispatch({
            type: DELETE_PROJECT_SUCCESS,
            projectId: projectId.data
        });
    }catch (e) {
        dispatch({
            type: DELETE_PROJECT_FAIL,
            error: e.response.data.error
        })
    }
}

export const editTask = taskData => async dispatch => {
    try {
        const data = await axios.put('/server/edit-task', taskData);
        dispatch({
            type: EDIT_TASK_SUCCESS,
            taskData: data.data
        });
    }catch (e) {
        dispatch({
            type: EDIT_TASK_FAIL,
            error: e.response.data.error
        })
    }
}








