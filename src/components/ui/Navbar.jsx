import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const Navbar = () => {
	const {
		user: { name },
		dispatch,
	} = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/login', { replace: true });
		dispatch({
			type: types.logout,
		});
	};

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Home
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							'nav-item nav-link' + (isActive ? ' active' : '')
						}
						to='/marvel'
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							'nav-item nav-link' + (isActive ? ' active' : '')
						}
						to='/dc'
					>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							'nav-item nav-link' + (isActive ? ' active' : '')
						}
						to='/search'
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className=''>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-link nav-item text-info'>{name}</span>
					<button className='nav-item nav-link btn' onClick={handleLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
