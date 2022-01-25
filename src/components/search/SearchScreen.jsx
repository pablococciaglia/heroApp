import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);
	const [formValues, handleInputChange] = useForm({
		textBox: q,
	});

	const { textBox } = formValues;
	const herosFilter = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${textBox}`);
	};

	return (
		<div>
			<h1>Search</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Search form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Encuentra tu héroe'
							className='form-control'
							name='textBox'
							onChange={handleInputChange}
							value={textBox}
							autoComplete='off'
						/>
						<button
							type='submit'
							className='btn m1 btn-block btn-outline-primary'
						>
							Search
						</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Result</h4>
					<hr />
					{q === '' && <div className='alert alert-info'>Look for a hero</div>}
					{q !== '' && herosFilter.length === 0 && (
						<div className='alert alert-danger'>
							We couldnt find any hero with the name: <b>{q}</b>
						</div>
					)}

					{herosFilter.map((heroe) => (
						<HeroCard key={heroe.id} {...heroe} />
					))}
				</div>
			</div>
		</div>
	);
};
