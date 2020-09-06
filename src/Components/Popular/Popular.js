import React, { useState, useEffect } from 'react';
import { fetchPopular } from '../../Config';
import { Link } from 'react-router-dom';

var currentPage = 1;
export function PopularMovie() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setPopular(await fetchPopular(currentPage));
    };

    fetchAPI();
  }, []);

  const handleClickMore = async () => {
    setPopular([...popular, ...(await fetchPopular(++currentPage))]);
  };

  const popularList = popular.map((item, index) => {
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
      <div className='row mt-3'>{popularList}</div>
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
