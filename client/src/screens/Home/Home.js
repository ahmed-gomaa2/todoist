import React, {useEffect} from 'react';
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import './Home.css';

const Home = (props) => {
    useEffect(() => {
    });
    return (
        <div className={'Home'}>
            <Dashboard />
        </div>
    );
};

export default Home;