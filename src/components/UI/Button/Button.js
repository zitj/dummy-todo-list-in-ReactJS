import React from 'react';
import styles from './style/Button.module.css';

const Button = (props) => {
    return (
        <button
            type={props.type}
            id={props.id}
            className={props.className || styles.button}
            onClick={props.onClick}
        >
            {props.children}{' '}
        </button>
    );
};

export default Button;
