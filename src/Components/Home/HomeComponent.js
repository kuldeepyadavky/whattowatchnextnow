import React, { useState, useEffect, Fragment } from 'react';
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
} from '../../Config';
import RBCarousel from 'react-bootstrap-carousel';
import { Link } from 'react-router-dom';

export function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPersons(await fetchPersons());
    };

    fetchAPI();
  }, []);
  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const movies = nowPlaying.slice(0, 6).map((item, index) => {
    return (
      <div style={{ height: 500, width: '100%' }} key={index}>
        <div className='carousel-center'>
          <Link to={`/movie/${item.id}`}>
            <img
              style={{ height: 600 }}
              src={item.backPoster}
              alt={item.title}
            />
          </Link>
        </div>

        <div className='carousel-caption' style={{ textAlign: 'center' }}>
          <h1>{item.title}</h1>
        </div>
      </div>
    );
  });

  const genreList = genres.map((item, index) => {
    return (
      <li className='list-inline-item' key={index}>
        <button
          type='button'
          className='btn btn-outline-info'
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  const movieList = movieByGenre.map((item, index) => {
    return (
      <div className='col-md-3 col-sm-6' key={index}>
        <div className='card'>
          <Link to={`/movie/${item.id}`}>
            <img className='img-fluid' src={item.poster} alt={item.title} />
          </Link>
        </div>
        <div style={{ fontWeight: 'bolder' }}>{item.title}</div>

        <p>
          <i
            className='fa fa-star'
            style={{ fontSize: 18, color: '#f4c10f' }}
          ></i>{' '}
          {item.rating} ({item.votes})
        </p>
      </div>
    );
  });
  const trendingPersons = persons.slice(0, 12).map((p, i) => {
    return (
      <div className='col-md-3 col-sm-6 text-center' key={i}>
        <img
          className='img-fluid rounded-circle mx-auto'
          src={p.profileImg}
          alt={p.name}
        />
        <p className='font-weight-bold text-center'>{p.name}</p>
      </div>
    );
  });

  return (
    <Fragment>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col'>
            <RBCarousel
              version={4}
              pauseOnVisibility={true}
              slideShowSpeed={300}
              indicators={false}
              autoplay={true}
            >
              {movies}
            </RBCarousel>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <ul className='list-inline'>{genreList}</ul>
          </div>
        </div>

        <div className='row mt-3'>{movieList}</div>

        <div className='row mt-3'>
          <div className='col'>
            <p className='font-weight-bold' style={{ color: '#5a606b' }}>
              Trending Persons this week
            </p>
          </div>
        </div>
        <div className='row mt-3'>{trendingPersons}</div>

        <br />
      </div>
    </Fragment>
  );
}
