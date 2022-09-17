import React, {useState} from 'react';
import './CreateProject.css';
import {connect} from "react-redux";
import {toggleCreateProject} from "../../store/actions/ui.actions";
import {createProject} from "../../store/actions/tasks.actions";
import {useNavigate} from "react-router-dom";

const CreateProject = props => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const formSubmitHandler = e => {
        e.preventDefault();
        const projectData = {
            name
        }

        props.createProject(projectData, navigate);
        setName('');
        props.toggleCreateProject();
    }
    return (
        <div className={`CreateProject ${props.toggleCreateProjectModel && 'CreateProject__active'}`}>
            <div onClick={props.toggleCreateProject} className="CreateProject__overlay"></div>
            <div className="CreateProject__container">
                <div className="CreateProject__header">
                    <p>Add Project</p>
                </div>
                <form onSubmit={e => formSubmitHandler(e)} className="CreateProject__form">
                    <div className="CreateProject__form-item">
                        <label htmlFor="" className="CreateProject__form-label">Name</label>
                        <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder={'Project Name'} className="CreateProject__form-input"/>
                    </div>
                    <div className="CreateProject__form-buttons">
                        <div></div>
                        <div>
                            <button type={'reset'} onClick={e => {
                                e.preventDefault();
                                props.toggleCreateProject();
                            }} className="CreateProject__cancel">cancel</button>
                            <button type={"submit"} className="CreateProject__submit">create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        toggleCreateProjectModel: state.ui.toggleCreateProjectModel
    }
}

export default connect(mapStateToProps, {toggleCreateProject, createProject}) (CreateProject);