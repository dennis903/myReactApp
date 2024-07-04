import React from 'react'

function User({ name, age, email }) {
	return (
		<li>
			<p>{name}</p>
			<p>{age}</p>
			<p>{email}</p>
		</li>
	)
}

export default User