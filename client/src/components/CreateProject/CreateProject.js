import React from 'react';
import './CreateProject.css';
import {connect} from "react-redux";
import {toggleCreateProject} from "../../store/actions/ui.actions";


const CreateProject = props => {
    return (
        <div className={`CreateProject ${props.toggleCreateProjectModel && 'CreateProject__active'}`}>
            <div onClick={props.toggleCreateProject} className="CreateProject__overlay"></div>
            <div className="CreateProject__container">
                <div className="CreateProject__header">
                    <p>Add Project</p>
                </div>
                <form className="CreateProject__form">
                    <div className="CreateProject__form-item">
                        <label htmlFor="" className="CreateProject__form-label">Name</label>
                        <input type="text" placeholder={'Project Name'} className="CreateProject__form-input"/>
                    </div>
                    <div className="CreateProject__form-buttons">
                        <div></div>
                        <div>
                            <button onClick={e => {
                                e.preventDefault();
                                props.toggleCreateProject();
                            }} className="CreateProject__cancel">cancel</button>
                            <button className="CreateProject__submit">create</button>
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

export default connect(mapStateToProps, {toggleCreateProject}) (CreateProject);