import React from 'react';
import styles from './TodoList.module.css';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem/TodoItem';

const cx = classNames.bind(styles);

function TodoList({ todoList }) {
	return (
		<ul className={cx('todo-list')}>
			{todoList.map((todo, index) => <TodoItem key={index} todo={todo} />)}
		</ul>
	);
};

export default TodoList;