import React, {useEffect} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

const Login = (props) => {

    useEffect(() => {
        const elements = document.querySelectorAll('.Login *');
        console.log(elements);
        setTimeout(() => {
            elements.forEach(el => {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            })
        }, 400);
    }, []);
    return (
        <div className={'Login'}>
            <div className={'Login__container'}>
                <div className={'Login__header'}>
                    <h1 className="Login__header-greeting">Welcome back again</h1>
                </div>
                <div className={'Login__form'}>
                    <form className={'Login__form-form'}>
                        <div className="Login__form-item">
                            <label htmlFor="" className="Login__form-label">Your email</label>
                            <div className="Login__form-input">
                                <input type="text" placeholder={'Enter Your Email'}/>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <div className="Login__form-item">
                            <label htmlFor="" className="Login__form-label">Your password</label>
                            <div className="Login__form-input">
                                <input type="text" placeholder={'Enter Your Password'}/>
                                <i className="fa-solid fa-lock"></i>                            </div>
                        </div>
                        <div className={'Login__form-item'}>
                            <button className={'Login__form-button'}>SIGN IN</button>
                        </div>
                    </form>
                    <div className={'login__form-register'}>
                        <p>Not a member? <Link to={'/register'}>REGISTER</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;