import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import {useEffect} from "react";
import {connect} from "react-redux";

function App(props) {

    useEffect(() => {
        console.log('Hello from the App!');
    });

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} exact element={<Home history={props.history}/>} />
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