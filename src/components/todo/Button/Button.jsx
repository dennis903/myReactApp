import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ type, classname, onClick, text }) {
	return (
		<button
			type={type}
			className={cx('todo-button', classname)}
			onClick={onClick}
		>{text}</button>
	);
};

export default Button;
