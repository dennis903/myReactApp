import styles from './App.module.css';
import classNames from 'classnames/bind';
import Todo from './components/todo/Todo';

const cx = classNames.bind(styles);

function App() {
	return (
		<>
			<div className={cx('app')}>
				<Todo />
			</div>
		</>
	);
};

export default App;
