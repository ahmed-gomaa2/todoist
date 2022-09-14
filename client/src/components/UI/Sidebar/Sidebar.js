import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './Sidebar.css';

const Sidebar = (props) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className={'Sidebar'}>
            <div className="Sidebar__container">
                <div className="Sidebar__header">
                    <Link to={'/'}>T</Link>
                </div>
                <div className="Sidebar__links">
                    <ul className="Sidebar__links-ul">
                        <li className="Sidebar__link">
                            <NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={'/dashboard/today'}>
                                <i className="fa-solid fa-calendar-week"></i>
                                <p>Today</p>
                            </NavLink>
                        </li>
                        <li className="Sidebar__link">
                            <NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={'/dashboard/week'}>
                                <i className="fa-brands fa-weebly"></i>
                                <p>Week</p>
                            </NavLink>
                        </li>
                        <li className="Sidebar__link">
                            <NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={'/dashboard/calendar'}>
                                <i className="fa-regular fa-calendar-days"></i>
                                <p>Calendar</p>
                            </NavLink>
                        </li>
                        <li className={`Sidebar__link ${dropdown && 'Sidebar__link-dropdown'}`}>
                            <div className={'Sidebar__projects'}>
                                <div onClick={e => setDropdown(!dropdown)} className={'Sidebar__projects-header'}>
                                    <i className={`fa-solid fa-chevron-right ${dropdown && 'down'}`}></i>
                                    <p>Projects</p>
                                    <i className="add fa-solid fa-plus"></i>
                                </div>
                                <ul className={`Sidebar__projects-ul ${dropdown && 'Sidebar__projects-ul-active'}`}>
                                    <li className="Sidebar__project"><span></span><NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={'/dashboard/projects1'}>project1</NavLink></li>
                                    <li className="Sidebar__project"><span></span><NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={'/dashboard/project2'}>project2</NavLink></li>
                                    <li className="Sidebar__project"><span></span><NavLink className={navData => navData.isActive ? 'Sidebar__link-active' : null} to={'/dashboard/project3'}>project3</NavLink></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="Sidebar__footer">
                    <div className="Sidebar__footer-links">
                        <ul className="Sidebar__footer-container">
                            <li className="Sidebar__footer-link">
                                <NavLink to={'/dashboard/settings'} className={`Sidebar__footer-link`}>
                                    <i className="fa-solid fa-gear"></i>
                                    <p>Settings</p>
                                </NavLink></li>
                            <li className="Sidebar__footer-link">
                                <div className="Sidebar__footer-link">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <p>Logout</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;