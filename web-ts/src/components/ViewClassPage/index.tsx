import React from 'react';
import styles from './ViewClassPage.module.css';
import { useDispatch } from 'react-redux';
import { updateCurrentView } from '../../redux/slices/appStateSlice';
import { view } from '../../utils/constants';
import { ClassCard } from '..';

const ViewClassPage = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(updateCurrentView(view.LOG_IN_PAGE));
    };

    return (
        <div className = { styles.wrapper }>
            <button 
                className = { styles['log-out-button'] }
                onClick = { handleLogOut }
            >
                Log out
            </button>
            
            <ClassCard 
                className = 'CSS 102'
                studentNames = { ["Daniel Chuks", "Chukwudi Ngwobia", "Sam Mbakwe", "Hunter Egbuatu"] }
            />
        </div>
  );
}

export { ViewClassPage };