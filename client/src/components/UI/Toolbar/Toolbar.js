import React from 'react';
import './Toolbar.css';

const Toolbar = props => {
    return (
        <div className={'Toolbar'}>
            <div className="Toolbar__container">
                <div className="Toolbar__left">
                    <div className="Toolbar__searchbar">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input placeholder={'Search'} type="text"/>
                    </div>
                </div>
                <div className="Toolbar__right">
                    <div className="Toolbar__notification">
                        <i className="fa-sharp fa-solid fa-bell"></i>
                    </div>
                    <div className="Toolbar__user">
                        <div className="Toolbar__name">
                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                            <p>Ahmed Gomaa</p>
                        </div>
                        <div className="Toolbar__avatar">
                            <i className="fa-sharp fa-solid fa-user-astronaut"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;