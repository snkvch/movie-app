import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { PATHS } from './utils/paths.util';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MovieDetails from './pages/movie-details/movie-details.component';
import Wishlist from './pages/wishlist/wishlist.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={PATHS.homePage} element={<HomePage />} />
        <Route path={PATHS.movieDetails} element={<MovieDetails />} />
        <Route path={PATHS.wishlist} element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
