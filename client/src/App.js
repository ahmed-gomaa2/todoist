import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import {useEffect} from "react";
import {connect} from "react-redux";
import Login from "./screens/Landing/Login/Login";
import Register from "./screens/Landing/Register/Register";
import Spinner from "./components/UI/Spinner/Spinner";
import {loadUser} from "./store/actions/auth.actions";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import Layout from "./components/HOC/Layout/Layout";
import Landing from './screens/Landing/Landing';

function App(props) {

    useEffect(() => {
        props.loadUser();
    }, []);

    return (
        <div className="App">
            {props.loadingUser ? (
                    <Spinner/>
                ):
                <Routes>
                    <Route path={'/'} exact element={
                        <ProtectedRoute isAuthenticated={props.isAuthenticated}>
                            <Home history={props.history}/>
                        </ProtectedRoute>
                    }/>

                    <Route path={'/landing'} exact element={
                        <ProtectedRoute isAuthenticated={!props.isAuthenticated}>
                            <Layout>
                                <Landing />
                            </Layout>
                        </ProtectedRoute>
                    }/>

                    <Route path={'/login'} exact element={
                        <Layout>
                            <Login history={props.history}/>
                        </Layout>
                    }/>

                    <Route path={'/register'} exact element={
                        <Layout>
                            <Register history={props.history}/>
                        </Layout>
                    }/>

                    <Route
                        path="*"
                        element={
                            <ProtectedRoute isAuthenticated={!props.isAuthenticated}>
                                <Layout>
                                    <Landing />
                                </Layout>
                            </ProtectedRoute>
                        }
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