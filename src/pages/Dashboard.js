import React from 'react';
import Button from '../components/Button';

export default function Dashboard() {
	const register = (e) => {
		alert('Register');
	};
	return (
		<div>
			Dashboard <Button onClick={register} />
		</div>
	);
}
