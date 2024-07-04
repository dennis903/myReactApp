import React, { useState } from 'react';
import styles from './Todo.module.css';
import classNames from 'classnames/bind';

import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

const cx = classNames.bind(styles);

function Todo() {
	const [todoList, setTodoList] = useState([]);
	const [formValue, setFormValue] = useState('');
	const onChangeTodoForm = function (e) {
		setFormValue(e.target.value);
	};
	const onSubmitTodoForm = function (e) {
		e.preventDefault();

		const todoObj = {
			text: formValue,
			checked: false
		};

		setTodoList([...todoList, todoObj]);
		setFormValue('');
	};

	return (
		<div className={cx('todo')}>
			<h1 className={cx('todo-title')}>Todo List</h1>
			<div className={cx('todo-main')}>
				<TodoForm
					formValue={formValue}
					onChangeTodoForm={onChangeTodoForm}
					onSubmitTodoForm={onSubmitTodoForm}
				/>
				<TodoList todoList={todoList} />
			</div>
		</div>
	);
};

export default Todo;
