import React from 'react';
import './Body.css';

const Body = props => {
    return (
        <div className={'Body'}>
            <div className="Body__container">
                <div className="Body__header">
                    <p className="Body__title">
                        Today
                    </p>
                </div>
                <div className="Body__sections">
                    <div className="Body__sections-container">
                        <div className="Body__section Body__todo">
                            <div className="Body__section-header">
                                <p>To do</p>
                                <p><span>2</span></p>
                            </div>
                            <div className="Body__section-add-task">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="Body__section-body"></div>
                        </div>
                        <div className="Body__section Body__progress">
                            <div className="Body__section-header">
                                <p>In progress</p>
                                <p><span>2</span></p>
                            </div>
                            <div className="Body__section-add-task">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="Body__section-body"></div>
                        </div>
                        <div className="Body__section Body__completed">
                            <div className="Body__section-header">
                                <p>Completed</p>
                                <p><span>2</span></p>
                            </div>
                            <div className="Body__section-add-task">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="Body__section-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;