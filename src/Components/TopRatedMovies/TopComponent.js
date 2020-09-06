import React, { useState, useEffect } from 'react';
import { fetchTopratedMovie } from '../../Config';
import { Link } from 'react-router-dom';

var currentPage = 1;
export function TopRated() {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setTopRated(await fetchTopratedMovie(currentPage));
    };

    fetchAPI();
  }, []);

  const handleClickMore = async () => {
    setTopRated([...topRated, ...(await fetchTopratedMovie(++currentPage))]);
  };

  const topRatedList = topRated.map((item, index) => {
    return (
      <div className='col-md-3' key={index}>
        <div className='card'>
          <Link to={`/movie/${item.id}`}>
            <img className='img-fluid' src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className='mt-3'>
          <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
          <p>
            <i
              className='fa fa-star'
              style={{ fontSize: 18, color: '#f4c10f' }}
            ></i>{' '}
            {item.rating} ({item.votes})
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col'>
          <div className='float-right'>
            <i className='far fa-arrow-alt-circle-right'></i>
          </div>
        </div>
      </div>
      <div className='row mt-3'>{topRatedList}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type='button'
          className='btn btn-outline-info'
          onClick={() => {
            handleClickMore();
          }}
        >
          Load More
        </button>
      </div>
      <br />
    </div>
  );
}
