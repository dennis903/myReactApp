import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import classNames from 'classnames/bind';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function TodoItem({ todo }) {
	const [isEdit, setIsEdit] = useState(false);

	const onClickEditBtn = () => {
		setIsEdit(true);
	}

	return (
		<li className={cx('todo-item')}>
			<form className={cx('todo-edit', !isEdit && 'hide')}>
				<input type="text" className={cx('todo-edit__input')} />
				<div className={cx('todo-edit-buttons')}>
					<Button type="button" classname="todo-button--type-complete" text="변경" />
					<Button type="button" classname="todo-button--type-cancel" text="취소" />
				</div>
			</form>
			<div className={cx('todo-info', isEdit && 'hide')}>
				<input type="checkbox" className={cx('todo-info__checkbox')} />
				<p className={cx('todo-info__detail')}>{todo.text}</p>
			</div>
			<div className={cx('todo-buttons')}>
				<Button type="button" classname="todo-button--type-edit" onClick={onClickEditBtn} text="수정" />
				<Button type="button" classname="todo-button--type-delete" text="삭제" />
			</div>
		</li>
	)
}

export default TodoItem;
