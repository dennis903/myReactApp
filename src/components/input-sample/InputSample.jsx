import { useState } from 'react';

function InputSample() {
	const [inputs, setInputs] = useState({
		name: '',
		nickname: ''
	});

	const onChangeText = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setInputs({
			...inputs,
			[name]: value
		})
	};

	const onReset = () => {
		setInputs({
			name: '',
			nickname: ''
		});
	}

	return (
		<div>
			<input type="text" name="name" placeholder="이름" value={inputs.name} onChange={onChangeText} />
			<input type="text" name="nickname" placeholder="닉네임" value={inputs.nickname} onChange={onChangeText} />
			<button type="button" onClick={onReset}>초기화</button>
			<div>
				<span>
					이름: {inputs.name}
					닉네임: {inputs.nickname}
				</span>
			</div>
		</div>
	)
}

export default InputSample;
