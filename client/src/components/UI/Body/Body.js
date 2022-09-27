import React, {useEffect, useState} from 'react';
import './Body.css';
import CreateTask from "../../CreateTask/CreateTask";
import {toggleCreateTask} from "../../../store/actions/ui.actions";
import {connect} from "react-redux";
import {setCurrentProject, changeCategory, removeTaskFromUI, addTaskToUI} from "../../../store/actions/tasks.actions";
import {useParams} from "react-router-dom";
import Section from "./Section/Section";
import {DragDropContext} from "react-beautiful-dnd";

const Body = props => {
    const [header, setHeader] = useState('');
    const [changedCategory, setChangedCategory] = useState(null);
    const [draggedTask, setDraggedTask] = useState(null);

    const params = useParams();
    useEffect(() => {
        if(props.currentProject) {
            setHeader(props.currentProject.name);
        }else {
            setHeader('Today')
        }
    },[props.currentProject]);

    const onDragEnd = value => {
        const {destination} = value;
        if(!destination) return;
        const task = props.tasks.filter(t => t.id === +value.draggableId)[0];
        if(value.source.droppableId === value.destination.droppableId) return;
        props.removeTaskFromUI(task);
        props.addTaskToUI(task, value.destination.droppableId);
        props.changeCategory(task, value.destination.droppableId);
    }

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
                        <DragDropContext
                            onDragEnd={onDragEnd}
                        >
                        {['todo', 'inProgress', 'completed'].map(s => (
                            <Section key={s} changedCategory={changedCategory} setChangedCategory={setChangedCategory} formState={props.formState} category={s} toggleCreateTask={props.toggleCreateTask} tasks={props.tasks.filter(t => t.category === s)} />
                        ))}
                        </DragDropContext>
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

export default connect(mapStateToProps, {addTaskToUI, removeTaskFromUI, toggleCreateTask, setCurrentProject, changeCategory}) (Body);