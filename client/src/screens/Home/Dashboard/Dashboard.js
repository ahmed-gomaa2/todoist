import React, {useEffect} from 'react';
import './Dashboard.css';
import {Link, NavLink, Outlet} from "react-router-dom";
import Sidebar from "../../../components/UI/Sidebar/Sidebar";
import Toolbar from "../../../components/UI/Toolbar/Toolbar";
import {connect} from "react-redux";
import {toggleSidebar} from "../../../store/actions/ui.actions";

const Dashboard = props => {
    useEffect(() => {
        const windowWidth = window.innerWidth;
        console.log(windowWidth)
        if(windowWidth <= 500) {
            props.toggleSidebar();
        }
    }, []);
    return (
        <div className={'Dashboard'}>
            <div className={`Dashboard__container ${props.toggleSide ? 'Dashboard__sidebar-toggle' : null}`}>
                <Sidebar />
                <div className="Dashboard__body">
                    <div className={`Dashboard__body-container`}>
                        <Toolbar />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        toggleSide: state.ui.toggleSidebar
    }
}

export default connect(mapStateToProps, {toggleSidebar}) (Dashboard);