import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import {useEffect} from "react";
import {connect} from "react-redux";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Spinner from "./components/UI/Spinner/Spinner";
import {loadUser} from "./store/actions/auth.actions";
import ProtectedRoute from "./components/HOC/ProtectedRoute";

function App(props) {

    useEffect(() => {
        props.loadUser();
    }, []);

    return (
        <div className="App">
            {props.loadingUser ? (
                    <Spinner/>
                ) :
                <Routes>
                    <Route path={'/'} exact element={
                        <ProtectedRoute isAuthenticated={props.isAuthenticated}>
                            <Home history={props.history}/>
                        </ProtectedRoute>
                    }/>
                    <Route path={'/login'} exact element={<Login history={props.history}/>}/>
                    <Route path={'/register'} exact element={<Register history={props.history}/>}/>
                    <Route
                        path="*"
                        element={<Login />}
                    />
                </Routes>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state,
        isAuthenticated: state.auth.isAuthenticated,
        loadingUser: state.auth.loadingUser
    }
}

export default connect(mapStateToProps, {loadUser}) (App);