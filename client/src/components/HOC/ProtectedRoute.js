import React from 'react';
import {Navigate} from 'react-router-dom'

const ProtectedRoute = (props) => {
    if(!props.isAuthenticated) {
        return <Navigate to={'/login'} />
    }
    return props.children;
};

export default ProtectedRoute;