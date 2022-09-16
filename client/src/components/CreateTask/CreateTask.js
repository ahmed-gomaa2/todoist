import React from 'react';
import './CreateTask.css';
import moment from "moment";
import {connect} from "react-redux";
import {toggleCreateTask} from "../../store/actions/ui.actions";

const CreateTask = props => {
    const getDayDate = () => {
        const day = new Date(props.date);
        const dayInWeekNumber = new Date(props.date).getDay();
        const weekDays = new Array(7);
        weekDays[0] = 'Sunday';
        weekDays[1] = 'Monday';
        weekDays[2] = 'Tuesday';
        weekDays[3] = 'Wednesday';
        weekDays[4] = 'Thursday';
        weekDays[5] = 'Friday';
        weekDays[6] = 'Saturday';

        const dayInWeekName = weekDays[dayInWeekNumber];

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthName = monthNames[day.getMonth()]
        return {
            dayName: dayInWeekName,
            monthName: monthName.substring(0, 3),
            dayInWeekNumber: day.getDate()
        };
    }

    return (
        <div className={'CreateTask'}>
            <div className="CreateTask__container">
                <div className="CreateTask__header">
                    <div className="CreateTask__date">
                        <p>{getDayDate().monthName} {getDayDate().dayInWeekNumber} {getDayDate().dayName}</p>
                    </div>
                </div>
                <form className="CreateTask__form">
                    <div className="CreateTask__form-item">
                        <input placeholder={'Title'} type="text" className="CreateTask__form-input"/>
                    </div>

                    <div className="CreateTask__form-item">
                        <textarea placeholder={'Description'} type="text" className="CreateTask__form-input"/>
                    </div>

                    <div className="CreateTask__form-buttons">
                        <div></div>
                        <div>
                            <button onClick={e => {
                                e.preventDefault();
                                props.toggleCreateTask(props.category);
                            }} className="CreateTask__form-cancel">cancel</button>
                            <button className="CreateTask__form-submit">create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect(null, {toggleCreateTask}) (CreateTask);