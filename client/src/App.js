import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import {useEffect} from "react";
import {connect} from "react-redux";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";

function App(props) {

    useEffect(() => {
        console.log('Hello from the App!');
    });

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} exact element={<Home history={props.history}/>} />
                <Route path={'/login'} exact element={<Login history={props.history}/>} />
                <Route path={'/register'} exact element={<Register history={props.history}/>} />
            </Routes>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps) (App);