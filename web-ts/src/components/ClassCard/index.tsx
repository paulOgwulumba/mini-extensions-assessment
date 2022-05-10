import React from 'react';
import styles from './ClassCard.module.css';
import { IClassCardProps } from '../../utils/interfaces';
import { seperateNames } from '../../utils/functions';

const ClassCard = ({ className, studentNames }: IClassCardProps) => {
    return (
        <div className = { styles.wrapper }>
            <h4>Class name:</h4>
            <p>{ className }</p>

            <h4>Student names:</h4>
            <p>{ seperateNames(studentNames) }</p>
        </div>
    );
};

export { ClassCard };