import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentView, updateLoadingStatus } from '../../redux/slices/appStateSlice';
import { view } from '../../utils/constants';
import styles from './LogInPage.module.css';
import { UserService } from '../../services/user.service';

const LogInPage = () => {
    const [studentName, setStudentName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        setStudentName(event.target?.value || '');
    };

    const handleLogIn = async () => {
        if (studentName === '') {
            return;
        }

        dispatch(updateLoadingStatus(true));
        const data = await UserService.fetchClassesOfStudent(studentName);
        console.log(data);
        const moreData = await UserService.fetchStudentIDsAndClassNames(data);
        console.log(moreData)
        dispatch(updateLoadingStatus(false));

        dispatch(updateCurrentView(view.VIEW_CLASSES_PAGE));
    };

    return (
        <div className = { styles.wrapper }>
            <div className = { styles.form }>
                <input 
                    className = { styles.input }
                    type = "text" 
                    placeholder = "Enter the student's name."
                    value = { studentName }
                    onChange = { handleChange }
                />

                <button
                    className = { styles.button }
                    onClick = { handleLogIn }
                >
                    Log in
                </button>
            </div>
        </div>
    )
};

export { LogInPage }