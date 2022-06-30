// Libs
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Styles
import './scss/app.scss';

// Components
import Header from './components/Header';

// Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PizzaPage from './pages/PizzaPage';

const App: React.FC = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/cart'} element={<Cart />} />
						<Route path={'/pizza/:id'} element={<PizzaPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;