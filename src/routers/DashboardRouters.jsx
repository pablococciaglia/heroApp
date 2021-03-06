import { Routes, Route } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouters = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-2'>
				<Routes>
					<Route path='marvel' element={<MarvelScreen />} />
					<Route path='hero/:heroeId' element={<HeroScreen />} />
					<Route path='dc' element={<DcScreen />} />
					<Route path='search' element={<SearchScreen />} />
					<Route path='/' element={<MarvelScreen />} />
				</Routes>
			</div>
		</>
	);
};
