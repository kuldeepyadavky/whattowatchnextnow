import React, { useState } from 'react';
import { fetchMovieBySearch } from '../../Config';
import { Link } from 'react-router-dom';

export function SearchMovies() {
  const [movieBySearch, setMovieBySearch] = useState([]);

  const handleInput = async (a) => {
    if (a !== '') {
      setMovieBySearch(await fetchMovieBySearch(a));
    }
  };

  const searchList = movieBySearch.map((item, index) => {
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
  console.log(searchList);
  return (
    <div className='container'>
      <br />

      <div
        className='jumbotron'
        style={{
          color: '#f1f1f1',
          height: '400px',
          borderRadius: '20px',
          backgroundImage: `url(${require('../SearchMovies/Search.jpeg')})`,
        }}
      >
        <header>
          <h2 className='text-center'>Search For Any Movie</h2>
        </header>

        <main>
          <section className='searchbox-wrap'>
            <form
              id='searchForm'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className='searchbox form-control'
                type='text'
                placeholder='Hello from search box..!'
                id='searchText'
                onChange={(e) => handleInput(e.target.value)}
              />
            </form>
          </section>
        </main>
      </div>
      <div className='row mt-3'>{searchList}</div>
    </div>
  );
}
