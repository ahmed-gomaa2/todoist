import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import './Project.css';
import {connect} from "react-redux";
import {deleteProject} from "../../../../store/actions/tasks.actions";

const Project = props => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const refRect = dropdownRef.current.getBoundingClientRect();
        const fromBottom = window.innerHeight - refRect.bottom;

        if(fromBottom < 0 ) {
            dropdownRef.current.style.transform = `translateY(${fromBottom}px`;
        }else {
            dropdownRef.current.style.transform = 'none';
        }
    }, [dropdown]);

    return (
        <li key={props.p.id} className="Sidebar__project">
            <span></span>
            <NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={`/dashboard/projects/${props.p.id}`}>
                {props.p.name}
            </NavLink>
            <div className={`Sidebar__project-dots--container ${dropdown ? 'Sidebar__project-dropdown--active' : null}`}>
                <div onClick={e => setDropdown(true)} className="Sidebar__project-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div onClick={e => setDropdown(false)} className={`Sidebar__project-overlay ${dropdown ? 'Sidebar__project-dropdown--active' : null}`}></div>
                <div ref={dropdownRef} className={`Sidebar__project-dropdown ${dropdown ? 'Sidebar__project-dropdown--active' : null}`}>
                    <div className="Sidebar__project-dropdown--container">
                        <div className="Sidebar__project-dropdown--item Sidebar__project-dropdown--edit">
                            <i className="fa-solid fa-pen"></i>
                            <p>Edit</p>
                        </div>
                        <div onClick={e => {
                            setDropdown(false);
                            props.deleteProject(props.p.id)
                        }} className="Sidebar__project-dropdown--item Sidebar__project-dropdown-delete">
                            <i className="fa-solid fa-trash"></i>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default connect(null, {deleteProject}) (Project);