import React from 'react';
import './Body.css';
import CreateTask from "../../CreateTask/CreateTask";
import {toggleCreateTask} from "../../../store/actions/ui.actions";
import {connect} from "react-redux";

const Body = props => {
    return (
        <div className={'Body'}>
            <div className="Body__container">
                <div className="Body__header">
                    <p className="Body__title">
                        Today
                    </p>
                </div>
                <div className="Body__sections">
                    <div className="Body__sections-container">
                        <div className="Body__section Body__todo">
                            <div className="Body__section-header">
                                <p>To do</p>
                                <p><span>2</span></p>
                            </div>
                            <div className="Body__section-add-task">
                                <i onClick={e => props.toggleCreateTask('todo')} className="fa-solid fa-plus"></i>
                                {props.formState['todo'] && <CreateTask category={'todo'} date={'09-15-2022'} />}
                            </div>
                            <div className="Body__section-body"></div>
                        </div>
                        <div className="Body__section Body__progress">
                            <div className="Body__section-header">
                                <p>In progress</p>
                                <p><span>2</span></p>
                            </div>
                            <div className="Body__section-add-task">
                                <i onClick={e => props.toggleCreateTask('inProgress')} className="fa-solid fa-plus"></i>
                                {props.formState['inProgress'] && <CreateTask category={'inProgress'} date={'09-16-2022'} />}
                            </div>
                            <div className="Body__section-body"></div>
                        </div>
                        <div className="Body__section Body__completed">
                            <div className="Body__section-header">
                                <p>Completed</p>
                                <p><span>2</span></p>
                            </div>
                            <div className="Body__section-add-task">
                                <i onClick={e => props.toggleCreateTask('completed')} className="fa-solid fa-plus"></i>
                                {props.formState['completed'] && <CreateTask category={'completed'} date={'09-17-2022'} />}
                            </div>
                            <div className="Body__section-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        formState: state.ui.toggleCreateTaskForm
    }
}

export default connect(mapStateToProps, {toggleCreateTask}) (Body);