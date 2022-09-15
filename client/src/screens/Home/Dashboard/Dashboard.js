import React from 'react';
import './Dashboard.css';
import {Link, NavLink, Outlet} from "react-router-dom";
import Sidebar from "../../../components/UI/Sidebar/Sidebar";
import Toolbar from "../../../components/UI/Toolbar/Toolbar";
import {connect} from "react-redux";

const Dashboard = props => {
    return (
        <div className={'Dashboard'}>
            <div className={`Dashboard__container ${props.toggleSidebar ? 'Dashboard__sidebar-toggle' : null}`}>
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
        toggleSidebar: state.ui.toggleSidebar
    }
}

export default connect(mapStateToProps) (Dashboard);