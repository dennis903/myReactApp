import React from 'react';
import styles from './TodoForm.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TodoForm({ formValue, onChangeTodoForm, onSubmitTodoForm }) {
	return (
		<form className={cx('todo-form')} onSubmit={(e) => onSubmitTodoForm(e)}>
			<input
				type="text"
				value={formValue}
				onChange={(e) => onChangeTodoForm(e)}
				className={cx('todo-form__input')}
			/>
			<button type="submit" className={cx('todo-form__submit')}>제출</button>
		</form>
	);
}

export default TodoForm;
