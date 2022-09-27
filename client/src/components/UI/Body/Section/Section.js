import React, {useState} from 'react';
import CreateTask from "../../../CreateTask/CreateTask";
import Task from "./Task/Task";
import inputChangeHandlerHelper from "../../../../utls/input.change.handler";
import {createNewTask} from "../../../../store/actions/tasks.actions";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import './Section.css'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import TaskDnd from "./TaskDnd/TaskDnd";


const Section = (props) => {
    const [formToggle, setFormToggle] = useState(false);
    const [form, setForm] = useState({
        title: {
            validation: {
                required: true
            },
            value: '',
            valid: false,
            touched: false
        },
        desc: {
            validation: {
                required: true,
            },
            value: '',
            valid: false,
            touched: false
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);
    const [dragging, setDragging] = useState(false);
    const params = useParams();

    const closeForm = e => {
        setFormToggle(false);
    }



    const formChangeHandler = e => {
        // const input = e.target.closest('.CreateTask__form-input');
        // console.log(e.target)
        // if(!input) return;
        // const formDataCopy = {...formData};
        // formDataCopy[input.name] = e.target.value;
        //
        // setFormData(formDataCopy);
        console.log(inputChangeHandlerHelper);
        const {formIsValid, updatedFormData} = inputChangeHandlerHelper(e, form, 'CreateTask__form-input');
        setForm(updatedFormData);
        setFormIsValid(formIsValid);
    }

    const formSubmitHandler = (e, getDayDate) => {
        e.preventDefault();
        const data = {
            title: form.title.value,
            text: form.desc.value,
            day: getDayDate().dayName,
            project: !!params.id,
            project_id: params.id ? +params.id : null,
            category: props.category
        }

        props.createNewTask(data);

        setForm({
            title: '',
            desc: ''
        });

        setFormToggle(false);
    }

    const dragTouchMove = e =>{

    }

    const dragEnter = e => {
        // e.preventDefault();
        console.log(props.category)
        props.setChangedCategory(props.category)
    }


    return (
                <div
                    className="Section"
                >
                    <div className="Section-header">
                        <p>{props.category}</p>
                        <p>
                            <span>{props.tasks.length}</span>
                        </p>
                    </div>
                    <div className="Section-add-task">
                        <i onClick={e => setFormToggle(!formToggle)} className="fa-solid fa-plus"></i>
                        {formToggle && <CreateTask formIsValid={formIsValid} formSubmitHandler={formSubmitHandler} formChangeHandler={formChangeHandler} setFormIsValid={setFormIsValid} setForm={setForm} form={form} closeForm={closeForm} category={props.category} date={new Date()} />}
                    </div>
                    <div className="Section-body">
                        <Droppable
                            type={'TASK'}
                            droppableId={props.category}
                        >
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="Section__tasks-container"
                                >
                                    {props.tasks.map((t, index) => (
                                        <TaskDnd t={t} index={index} key={t.id} />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
    );
};

export default connect(null, {createNewTask}) (Section);