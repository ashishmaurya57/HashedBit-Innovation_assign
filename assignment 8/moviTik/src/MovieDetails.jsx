

import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from './assets/asset'; 
import BookingForm from './BookingForm';
const MovieDetails = () => {
  const { id } = useParams(); 
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <p>Description</p>
      
      <BookingForm/>
    </div>
  );
};

export default MovieDetails;
