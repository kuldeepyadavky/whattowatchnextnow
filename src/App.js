import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Components/Home/HomeComponent';
import { MovieDetail } from './Components/MovieDetail/MovieDetailComponent';
import { Footer } from './Components/Footer/FooterComponent';
import { Header } from './Components/Header/HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SearchMovies } from './Components/SearchMovies/SearchMoviesComponent';
import { TopRated } from './Components/TopRatedMovies/TopComponent';
import { PopularMovie } from './Components/Popular/Popular';

export function App() {
	return (
		<main>
			<BrowserRouter>
				<div className='App'>
					<Header />
					<Switch>
						<Route path='/home' component={Home} />
						<Route path='/topratedmovies' component={TopRated} />
						<Route path='/search' component={SearchMovies} />
						<Route path='/popular' component={PopularMovie} />
						<Route path='/movie/:id' component={MovieDetail} />
						<Redirect to='/home' />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
