import React, {useEffect, useRef} from 'react';
import './Register.css';
import {Link} from "react-router-dom";

const Register = (props) => {
    useEffect(() => {
        const elements = document.querySelectorAll('.Register *');
        console.log(elements);
        setTimeout(() => {
            elements.forEach(el => {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            })
        }, 400);
    }, []);


    return (
        <div className={'Register'}>
            <div className={'Register__container'}>
                <div className={'Register__header'}>
                    <h1 className="Register__header-greeting">Create your account</h1>
                </div>
                <div className={'Register__form'}>
                    <form className={'Register__form-form'}>
                        <div className="Register__form-item">
                            <label htmlFor="" className="Register__form-label">Your Name</label>
                            <div className="Register__form-input">
                                <input type="text" placeholder={'Enter Your Name'}/>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <div className="Register__form-item">
                            <label htmlFor="" className="Register__form-label">Your email</label>
                            <div className="Register__form-input">
                                <input type="text" placeholder={'Enter Your Email'}/>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <div className="Register__form-item">
                            <label htmlFor="" className="Register__form-label">Your password</label>
                            <div className="Register__form-input">
                                <input type="text" placeholder={'Enter Your Password'}/>
                                <i className="fa-solid fa-lock"></i>                            </div>
                        </div>
                        <div className={'Register__form-item'}>
                            <button className={'Register__form-button'}>SIGN IN</button>
                        </div>
                    </form>
                    <div className={'Register__form-login'}>
                        <p>Already a member? <Link to={'/login'}>LOGIN</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;