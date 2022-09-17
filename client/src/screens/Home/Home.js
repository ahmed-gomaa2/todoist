import React, {useEffect} from 'react';
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import './Home.css';
import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentProject, getAllTasks} from "../../store/actions/tasks.actions";

const Home = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.log('hello', params.id, props.projects);
        if(!params.id) {
            console.log('has')
            props.getAllTasks();
            navigate('/dashboard/today');
        }else {
            console.log('hasnt')
            props.setCurrentProject(params.id);
        }
    }, [params.id]);
    return (
        <div className={'Home'}>
            <Dashboard />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        projects: state.tasks.projects
    }
}

export default connect(mapStateToProps, {setCurrentProject, getAllTasks}) (Home);