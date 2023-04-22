import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Authguard({ children }) {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
		checkAuth();
	}, []);

	const checkAuth = () => {
		// alert('Hi');
		const token = localStorage.getItem('token');
        console.log(token)

		// if (token === undefined) {
		// 	return navigate('/login', { replace: true });
		// } 
        
        // if (token === '') {
		// 	return navigate('/login', { replace: true });
		// }
	};
	return <div>{(loading && <>Loadding....</>) || children}</div>;
}
