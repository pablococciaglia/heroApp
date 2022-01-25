import React, { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router';
import { getHeroById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {
	const { heroeId } = useParams();
	const navigate = useNavigate();
	const heroe = useMemo(() => getHeroById(heroeId), [heroeId]);

	if (!heroe) {
		return <Navigate to='/' />;
	}

	const handleAtras = () => {
		navigate(-1);
	};

	const { id, superhero, publisher, alter_ego, first_appearance, characters } =
		heroe;

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img
					src={`../assets/${id}.jpg`}
					className='img-thumbnail animate__animated animate__fadeInLeft'
					alt={superhero}
				/>
			</div>
			<div className='col-8'>
				<h3>{superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego: </b>
						{alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Compañía: </b>
						{publisher}
					</li>
					<li className='list-group-item'>
						<b>Primera aparición: </b>
						{first_appearance}
					</li>
				</ul>
				<h5>Characters</h5>
				<p>{characters}</p>
				<button onClick={handleAtras} className='btn btn-outline-info'>
					Back
				</button>
			</div>
		</div>
	);
};
