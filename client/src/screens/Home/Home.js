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
        if(!params.id) {
            props.getAllTasks();
            navigate('/dashboard/today');
        }else {
            if(props.currentProject?.id == params.id) return;
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
        projects: state.tasks.projects,
        currentProject: state.tasks.currentProject
    }
}

export default connect(mapStateToProps, {setCurrentProject, getAllTasks}) (Home);