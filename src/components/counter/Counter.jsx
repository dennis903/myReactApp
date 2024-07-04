import { useState } from 'react';
import styles from "./Counter.module.css";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Counter() {
	const [counter, setCounter] = useState(0);

	const onIncrease = () => setCounter(counter + 1);
	const onDecrease = () => setCounter(counter - 1);
	const onReset = () => setCounter(0);

	return (
		<div className={cx('container')}>
			<h1>카운터</h1>
			<span id={cx('value')}>{counter}</span>
			<div className={cx('button-container')}>
				<button type="button" onClick={onDecrease} className={cx('btn', 'decrease')}>감소</button>
				<button type="button" onClick={onReset} className={cx('btn', 'reset')}>재설정</button>
				<button type="button" onClick={onIncrease} className={cx('btn', 'increase')}>증가</button>
			</div>
		</div>
	)
}

export default Counter;
