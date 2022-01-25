import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRouters } from './DashboardRouters';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginScreen />
						</PublicRoute>
					}
				/>
				<Route
					path='/*'
					element={
						<PrivateRoute>
							<DashboardRouters />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
