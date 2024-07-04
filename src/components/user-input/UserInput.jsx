import React, { useState } from 'react';
import User from '../user/User';

function UserInput() {
	const [userList, setUserList] = useState([]);
	const [inputs, setInputs] = useState({
		name: '',
		age: '',
		email: ''
	});

	const onChangeText = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setInputs({
			...inputs,
			[name]: value
		});
	};

	const onSubmitForm = (e) => {
		e.preventDefault();

		setUserList([
			...userList,
			inputs
		]);

		setInputs({
			name: '',
			age: '',
			email: ''
		})
	};

	return (
		<div>
			<form onSubmit={onSubmitForm}>
				<input type="text" name="name" placeholder="이름" value={inputs.name} onChange={onChangeText} />
				<input type="number" name="age" placeholder="나이" value={inputs.age} onChange={onChangeText} />
				<input type="email" name="email" placeholder="이메일" value={inputs.email} onChange={onChangeText} />
				<input type="submit" value="추가" />
			</form>
			<ul>
				{
					userList.map((user) => {
						return <User name={user.name} age={user.age} email={user.email} />
					})
				}
			</ul>
		</div>
	)
}

export default UserInput;
