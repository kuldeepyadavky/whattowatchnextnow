import React from 'react';
import { Home } from '../Home/HomeComponent';
import { MovieDetail } from '../MovieDetail/MovieDetailComponent';
import { Footer } from '../Footer/FooterComponent';
import { Header } from '../Header/HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SearchMovies } from '../SearchMovies/SearchMoviesComponent';
import { TopRated } from '../TopRatedMovies/TopComponent';
import { PopularMovie } from '../Popular/Popular';

export function Main() {
  return (
    <div>
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
  );
}
