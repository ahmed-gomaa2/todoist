import React, {useEffect, useState} from 'react';
import './Body.css';
import CreateTask from "../../CreateTask/CreateTask";
import {toggleCreateTask} from "../../../store/actions/ui.actions";
import {connect} from "react-redux";
import {setCurrentProject} from "../../../store/actions/tasks.actions";
import {useParams} from "react-router-dom";
import Section from "./Section/Section";

const Body = props => {
    const [header, setHeader] = useState('');
    const [changedCategory, setChangedCategory] = useState(null);

    const params = useParams();
    useEffect(() => {
        if(props.currentProject) {
            setHeader(props.currentProject.name);
        }else {
            setHeader('Today')
        }
    },[props.currentProject]);

    return (
        <div className={'Body'}>
            <div className="Body__container">
                <div className="Body__header">
                    <p className="Body__title">
                        {header}
                    </p>
                </div>
                <div className="Body__sections">
                    <div className="Body__sections-container">
                        {['todo', 'inProgress', 'completed'].map(s => (
                            <Section changedCategory={changedCategory} setChangedCategory={setChangedCategory} formState={props.formState} category={s} toggleCreateTask={props.toggleCreateTask} tasks={props.tasks.filter(t => t.category === s)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        formState: state.ui.toggleCreateTaskForm,
        projects: state.tasks.projects,
        currentProject: state.tasks.currentProject,
        currentPage: state.tasks.currentPage,
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, {toggleCreateTask, setCurrentProject}) (Body);