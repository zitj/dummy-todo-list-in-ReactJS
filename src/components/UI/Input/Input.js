import React from 'react';
import styles from './style/Input.module.css';

const Input = (props) => {
    return (
        <input
            type={props.type}
            className={props.className || styles.input}
            value={props.value}
            onChange={props.onChange}
        />
    );
};
export default Input;
