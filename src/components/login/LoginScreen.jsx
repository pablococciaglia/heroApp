import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = () => {
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleOnclick = () => {
		const ultimaRuta = localStorage.getItem('ultimaRuta') || '/';

		dispatch({
			type: types.login,
			payload: {
				name: 'Pablo',
			},
		});

		navigate(ultimaRuta);
	};

	return (
		<div className='container mt-5'>
			<h1>Pantalla de Login</h1>
			<hr />
			<button className='btn btn-primary' onClick={handleOnclick}>
				login
			</button>
		</div>
	);
};
