// App.jsx

import React from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    
  );
};

export default App;
