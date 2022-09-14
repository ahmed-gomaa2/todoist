import React from 'react';
import './Dashboard.css';
import {Link, NavLink, Outlet} from "react-router-dom";
import Sidebar from "../../../components/UI/Sidebar/Sidebar";
import Toolbar from "../../../components/UI/Toolbar/Toolbar";

const Dashboard = props => {
    return (
        <div className={'Dashboard'}>
            <div className="Dashboard__container">
                <Sidebar />
                <div className="Dashboard__body">
                    <div className="Dashboard__body-container">
                        <Toolbar />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;