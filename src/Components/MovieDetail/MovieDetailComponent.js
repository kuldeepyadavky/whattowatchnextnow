import React, { useState, useEffect } from 'react';
import {
  fetchMovieDetail,
  fetchMovieVideos,
  fetchCasts,
  fetchSimilarMovie,
} from '../../Config';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
export function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  const [detail, setDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchCasts(params.id));
      setSimilarMovie(await fetchSimilarMovie(params.id));
    };
    fetchAPI();
  }, [params.id]);

  genres = detail.genres;

  const MoviePlayerModal = (props) => {
    const youtubeUrl = 'https://www.youtube.com/watch?v=';
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id='contained-modal-title-vcenter'
            style={{ color: '#000000', fontWeight: 'bolder' }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#000000' }}>
          <ReactPlayer
            className='container-fluid'
            url={youtubeUrl + video.key}
            playing
            width='100%'
          />
        </Modal.Body>
      </Modal>
    );
  };

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className='list-inline-item' key={i}>
          <button type='button' className='btn btn-outline-info'>
            {g.name}
          </button>
        </li>
      );
    });
  }

  const similarMovieList = similarMovie.slice(0, 16).map((item, index) => {
    return (
      <div className='col-md-3 col-sm-6' key={index}>
        <div className='card'>
          <Link to={`/movie/${item.id}`}>
            <img className='img-fluid' src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className='mt-3'>
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

  const castList = casts.slice(0, 8).map((c, i) => {
    return (
      <div className='col-md-3 text-center' key={i}>
        <img
          className='img-fluid rounded-circle mx-auto d-block'
          src={c.img}
          alt='NA'
        />
        <p className='font-weight-bold text-center'>{c.name}</p>
        <p
          className='font-weight-light text-center'
          style={{ color: '#5a606b' }}
        >
          {c.character}
        </p>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row mt-2'>
        <MoviePlayerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        />
        <div className='col text-center' style={{ width: '100%' }}>
          <img
            className='img-fluid'
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
          />
          <div className='carousel-center'>
            <i
              onClick={() => setIsOpen(true)}
              className='fa fa-play-circle'
              style={{ fontSize: 95, color: '#f4c10f', cursor: 'pointer' }}
            ></i>
          </div>
          <div
            className='carousel-caption'
            style={{ textAlign: 'center', fontSize: 35 }}
          >
            {detail.title}
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>GENRE</p>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <ul className='list-inline'>{genresList}</ul>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          {' '}
          <p>
            <i
              className='fa fa-star'
              style={{ fontSize: 18, color: '#f4c10f' }}
            ></i>{' '}
            {detail.vote_average}
          </p>
          <div className='mt-3'>
            <p style={{ fontWeight: 'bold', color: '#5a606b' }}>OVERVIEW</p>
            {detail.overview}
          </div>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-md-3'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>RELEASE DATE</p>
          <p style={{ color: '#f4c10f' }}>{detail.release_date}</p>
        </div>
        <div className='col-md-3'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>RUN TIME</p>
          <p style={{ color: '#f4c10f' }}>{detail.runtime}</p>
        </div>
        <div className='col-md-3'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>BUDGET</p>
          <p style={{ color: '#f4c10f' }}>{detail.budget}</p>
        </div>
        <div className='col-md-3'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>HOMEPAGE</p>
          <p style={{ color: '#f4c10f' }}>{detail.homepage}</p>
        </div>
      </div>
      <br />

      <div className='row mt-3'>
        <div className='col'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>
            SIMILAR MOVIES YOU MAY LIKE
          </p>
        </div>
      </div>

      <div className='row mt-3'>{similarMovieList}</div>
      <br />
      <div className='row mt-3'>
        <div className='col'>
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>CASTS</p>
        </div>
      </div>
      <div className='row mt-3'>{castList}</div>
    </div>
  );
}
